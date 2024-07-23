import { useState, useEffect } from "react";
import axios from "axios";

interface List {
  longUrl: string;
  shortUrl: string;
  dateCreated: string;
}

const useLinkListEffect = () => {
  const [links, setLinks] = useState<List[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchLinks = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get("/api/list");
        setLinks(response.data);
      } catch (error) {
        console.error("Error fetching links:", error);
      } finally {
        setIsLoading(false);
      }
    };
    console.log("Fetching links...");
    fetchLinks();
    console.log("Links fetched:", links);
  }, []);

  return { links, isLoading };
};

export default useLinkListEffect;
