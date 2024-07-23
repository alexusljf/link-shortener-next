import { useState, useCallback, useEffect } from "react";
import axios from "axios";

interface List {
  longUrl: string;
  shortUrl: string;
  dateCreated: string;
}

const useLinkListEffect = () => {
  const [links, setLinks] = useState<List[]>([]);
  const [isLoading, setIsLoading] = useState(false); // Add a loading state
  const [error, setError] = useState<string | null>(null); // Add an error state
  console.log("enter useLinkListEfefct");

  const fetchLinks = useCallback(async () => {
    console.log("enter fetchLinks");
    setIsLoading(true); // Set loading to true before fetching
    try {
      console.log("ebnter try");
      const timestamp = Date.now(); // Generate a unique timestamp
      const response = await axios.get(`/api/linkList?timestamp=${timestamp}`); // Append the timestamp to the URL
      console.log("1");
      console.log(response.data);
      setLinks(response.data);
      console.log("2");
      setError(null); // Clear any previous errors
      console.log("3");
    } catch (error) {
      console.log("enteer error");
      console.error("Error fetching links:", error);
      setError("Failed to fetch links");
    } finally {
      setIsLoading(false); // Set loading to false after fetching
    }
  }, []);

  useEffect(() => {
    console.log("Updated links:", links); // This will log the updated `links` after state change
  }, [links]);

  useEffect(() => {
    const fetchData = async () => {
      console.log("enter useEffect");
      await fetchLinks(); // Await fetchLinks to ensure it completes
      console.log("finish useEffect");
    };

    fetchData();
  }, []);

  return { links, fetchLinks, isLoading, error }; // Return loading and error states
};

export default useLinkListEffect;
