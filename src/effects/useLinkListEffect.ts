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
    setIsLoading(true); // Set loading to true before fetching
    try {
      const response = await axios.get(`/api/list/${Date.now()}`);
      setLinks(response.data);
      setError(null); // Clear any previous errors
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
