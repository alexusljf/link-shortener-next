"use client";
import { useState } from "react";
import axios from "axios";
import { z } from "zod";
import { SubmitHandler } from "react-hook-form";

const useLinkShortenEffect = (domainName: string) => {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrlState, setShortUrl] = useState("");
  const [errorState, setErrorState] = useState<string | null>(null);

  const formSchema = z.object({
    url: z.string().url({
      message: "Invalid URL format",
    }),
  });
  type FormValues = z.infer<typeof formSchema>;

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      setErrorState(null);
      const response = await axios.post("/api/shortenLink", {
        longUrl: data.url,
      });
      console.log({ response });
      const shortId = response.data.shortUrl as string;
      setShortUrl(`${domainName}/${shortId}`);
      console.log({ shortUrlState });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setErrorState(
          error.response?.data?.error ||
            "An error occurred while shortening the URL"
        );
      } else {
        setErrorState("An unknown error occurred");
      }
    }
  };
  return {
    formSchema,
    longUrl,
    setLongUrl,
    shortUrlState,
    setShortUrl,
    errorState,
    setErrorState,
    onSubmit,
  };
};

export default useLinkShortenEffect;
