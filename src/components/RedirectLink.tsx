"use client";
import React, { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";
import axios from "axios";
import { usePathname, useRouter } from "next/navigation";

const RedirectLink = () => {
  const router = useRouter();
  const id = usePathname().slice(1);
  const [progress, setProgress] = useState(13);
  const [longLinkState, setLongLinkState] = useState<string>("");
  const [hasError, setHasError] = useState(false);
  useEffect(() => {
    const fetchLink = async () => {
      if (id) {
        try {
          const response = await axios.get(`/api/redirect?id=${id}`);
          const longLink = response.data.longUrl;

          setLongLinkState(longLink);
          setTimeout(() => setProgress(50), 500);
          setTimeout(() => {
            setProgress(100);
            console.log("Redirecting to:", longLink);
            router.push(longLink);
          }, 1000);
        } catch (error) {
          console.log("Error fetching the link");
          setHasError(true);
        }
      } else {
        console.log("please enter an id at the end of the link");
      }
    };
    fetchLink();
  }, [id, router]);

  useEffect(() => {}, []);

  return (
    <div className="w-[60%]">
      <Progress value={progress} />
      {!hasError ? (
        <div className="mt-10">
          <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0 text-center leading-snug">
            Enjoy your visit to <br />
            {longLinkState}
          </h2>
        </div>
      ) : (
        <div className="mt-10">
          <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0 text-center leading-snug">
            Please Ensure your link is correct!
          </h2>
        </div>
      )}
    </div>
  );
};

export default RedirectLink;
