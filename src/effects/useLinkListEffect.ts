// src/hooks/useLinkListEffect.ts
"use client";
import { useEffect, useState } from "react";
import Link from "../models/Link";
import axios from "axios";

type Link = {
  longUrl: string;
  shortUrl: string;
  dateCreated: string;
};

const useLinkListEffect = () => {
  const [links, setLinks] = useState<Link[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchLinks = async () => {
    try {
      const response = await axios.get("/api/list");
      if (response.status === 200) {
        setLinks(response.data);
      } else {
        setError("Failed to fetch links");
        console.log(error);
      }
    } catch (error) {
      setError("Error fetching links");
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchLinks();
  }, []);

  return { fetchLinks, links };
};

export default useLinkListEffect;
