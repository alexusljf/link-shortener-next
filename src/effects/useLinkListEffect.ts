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

  const fetchLinks = useCallback(async () => {
    setIsLoading(true); // Set loading to true before fetching
    try {
      const response = await axios.get("/api/list");
      setLinks(response.data);
      setError(null); // Clear any previous errors
    } catch (error) {
      console.error("Error fetching links:", error);
      setError("Failed to fetch links");
    } finally {
      setIsLoading(false); // Set loading to false after fetching
    }
  }, []);

  useEffect(() => {
    fetchLinks(); // Fetch links when the component mounts or fetchLinks changes
  }, [fetchLinks]);

  return { links, fetchLinks, isLoading, error }; // Return loading and error states
};

export default useLinkListEffect;
