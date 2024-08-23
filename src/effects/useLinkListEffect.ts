import { useState, useCallback, useEffect } from "react";
import axios from "axios";
import { User } from "@/models/interfaces";

interface List {
  longUrl: string;
  shortUrl: string;
  dateCreated: string;
  userName: string;
}

const useLinkListEffect = (currentUser?: User) => {
  const [links, setLinks] = useState<List[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchLinks = async (userName?: string) => {
    setIsLoading(true);
    try {
      const response = await axios.get(`/api/list/${Date.now()}`, {
        params: {
          userName: currentUser?.userName,
        },
      });
      setLinks(response.data);
      setError(null);
    } catch (error) {
      console.error("Error fetching links:", error);
      setError("Failed to fetch links");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (currentUser?.userName) {
      fetchLinks(currentUser.userName);
    } else {
      fetchLinks(); // Fetch without userName if not logged in
    }
  }, [currentUser]);

  return { links, fetchLinks, isLoading, error };
};

export default useLinkListEffect;
