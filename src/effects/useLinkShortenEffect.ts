"use client";
import { useState } from "react";
import axios from "axios";
import { z } from "zod";
import { SubmitHandler } from "react-hook-form";

const useLinkShortenEffect = () => {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [errorState, setErrorState] = useState<string | null>(null);

  const formSchema = z.object({
    url: z.string().url({
      message: "Invalid URL format",
    }),
  });
  type FormValues = z.infer<typeof formSchema>;

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      setErrorState(null); // Reset error state before new request
      // const response = await axios.post("/api/shorten", { longUrl: data.url });
      // console.log({ response });
      // setShortUrl(response.data.link);
      setShortUrl("www.test.com");
    } catch (error) {
      console.log("in catch block");
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
    shortUrl,
    setShortUrl,
    errorState,
    setErrorState,
    onSubmit,
  };
};

export default useLinkShortenEffect;
