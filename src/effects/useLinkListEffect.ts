"use client";
import { useState, useEffect } from "react";
import axios from "axios";

interface List {
  longUrl: string;
  shortUrl: string;
  dateCreated: string;
}

const useLinkListEffect = () => {
  const [links, setLinks] = useState<List[]>([]);

  useEffect(() => {
    const fetchLinks = async () => {
      try {
        const response = await axios.get("/api/list");
        console.log("API Response for /api/list:", response.data);
        setLinks(response.data);
      } catch (error) {
        console.error("Error fetching links:", error);
      }
    };

    fetchLinks();
  }, []);

  return { links };
};

export default useLinkListEffect;
