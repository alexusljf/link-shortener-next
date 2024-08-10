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

  const fetchLinks = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`/api/list/${Date.now()}`);
      setLinks(response.data);
      setError(null);
    } catch (error) {
      console.error("Error fetching links:", error);
      setError("Failed to fetch links");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchLinks(); // Fetch links when the component mounts or fetchLinks changes
  }, [fetchLinks]);

  return { links, fetchLinks, isLoading, error };
};

export default useLinkListEffect;
