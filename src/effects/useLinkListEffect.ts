// src/hooks/useLinkListEffect.ts
"use client";
import { useEffect, useState } from "react";
import Link, { LinkDocument } from "../models/Link";
import connect from "../../db"; // Ensure this is your MongoDB connection setup
import axios from "axios";

type Link = {
  longUrl: string;
  shortUrl: string;
  dateCreated: string;
};

const useLinkListEffect = () => {
  const [links, setLinks] = useState<Link[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLinks = async () => {
      try {
        const response = await axios.get("/api/list");
        if (response.status === 200) {
          setLinks(response.data); // Use response.data to get the actual data
        } else {
          setError("Failed to fetch links");
        }
      } catch (error) {
        setError("Error fetching links");
        console.error("Error:", error);
      }
    };

    fetchLinks();
  }, []);

  return { links };
};

export default useLinkListEffect;
