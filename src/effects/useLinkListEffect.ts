import { useState, useCallback, useEffect } from "react";
import axios from "axios";

interface List {
  longUrl: string;
  shortUrl: string;
  dateCreated: string;
}

const useLinkListEffect = () => {
  const [links, setLinks] = useState<List[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  console.log("enter useLinkListEffect");

  const fetchLinks = useCallback(async () => {
    console.log("enter fetchLinks");
    setIsLoading(true);
    try {
      setLinks([]);
      const timestamp = Date.now(); // Generate a unique timestamp
      const response = await axios.get(`/api/linkList?timestamp=${timestamp}`); // Append the timestamp to the URL
      console.log("1");
      console.log(response.data);
      setLinks(response.data); // Update the links state
      console.log("2");
      setError(null);
      console.log("3");
    } catch (error) {
      console.log("enter error");
      console.error("Error fetching links:", error);
      setError("Failed to fetch links");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      console.log("enter useEffect");
      await fetchLinks();
      console.log("finish useEffect");
    };

    fetchData();
  }, [fetchLinks]);

  useEffect(() => {
    console.log("Updated links:", links);
  }, [links]);

  return { links, fetchLinks, isLoading, error };
};

export default useLinkListEffect;
