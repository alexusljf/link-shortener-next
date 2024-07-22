import { useState, useCallback } from "react";
import axios from "axios";

interface List {
  longUrl: string;
  shortUrl: string;
  dateCreated: string;
}

const useLinkListEffect = () => {
  const [links, setLinks] = useState<List[]>([]);

  const fetchLinks = useCallback(async () => {
    try {
      const response = await axios.get("/api/list");
      setLinks(response.data);
    } catch (error) {
      console.error("Error fetching links:", error);
    }
  }, []);

  return { links, fetchLinks };
};

export default useLinkListEffect;
