"use client";
import React, { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";
import axios from "axios";
import { usePathname, useRouter } from "next/navigation";

const RedirectLink = () => {
  const router = useRouter();
  const id = usePathname().slice(1);
  const [progress, setProgress] = useState(13);
  const [longLinkState, setLongLinkState] = useState("");

  // Use a more descriptive status state
  const [status, setStatus] = useState({
    type: "loading",
    message: "Loading your link...",
  });

  useEffect(() => {
    const fetchLink = async () => {
      try {
        const response = await axios.get(`/api/redirect?id=${id}`);
        if (response.status === 200 && response.data.longUrl) {
          const longLink = response.data.longUrl;
          setLongLinkState(longLink);
          setStatus({
            type: "success",
            message: `Enjoy your visit to ${longLink}`,
          });

          setTimeout(() => setProgress(50), 500);
          setTimeout(() => {
            setProgress(100);
            console.log("Redirecting to:", longLink);
            router.push(longLink);
          }, 1000);
        } else {
          setStatus({
            type: "error",
            message: "Received an invalid response from the server",
          });
        }
      } catch (error) {
        console.log("Error details:", error);

        // Check if it's an Axios error with response data
        if (axios.isAxiosError(error) && error.response) {
          if (error.response.status === 404) {
            setStatus({
              type: "not-found",
              message: "This short link doesn't exist",
            });
          } else if (error.response.status === 400) {
            setStatus({
              type: "bad-request",
              message: "Invalid request format",
            });
          } else {
            setStatus({
              type: "error",
              message: `Server error: ${error.response.status}`,
            });
          }
        } else {
          setStatus({
            type: "error",
            message: "Connection error. Please try again later.",
          });
        }
      }
    };

    fetchLink();
  }, [id, router]);

  return (
    <div className="w-[60%]">
      <Progress value={progress} />
      <div className="mt-10">
        <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0 text-center leading-snug">
          {status.type === "success" ? (
            <>
              Enjoy your visit to <br />
              {longLinkState}
            </>
          ) : (
            status.message
          )}
        </h2>
      </div>
    </div>
  );
};

export default RedirectLink;
