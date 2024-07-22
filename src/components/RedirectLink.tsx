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
  useEffect(() => {
    const fetchLink = async () => {
      if (id) {
        const response = await axios.get(`/api/redirect?id=${id}`);
        const longLink = response.data.longUrl;

        setLongLinkState(longLink);
        setTimeout(() => setProgress(50), 500);
        setTimeout(() => {
          setProgress(100);
          console.log("Redirecting to:", longLink);
          router.push(longLink);
        }, 1000);
        console.log(longLink);
        console.log(longLink.data.longUrl);
      } else {
        console.log("error found when trying to retrieve link");
      }
    };
    fetchLink();
  }, [id, router]);

  useEffect(() => {}, []);

  return (
    <div className="w-[60%]">
      <Progress value={progress} />

      <div className="mt-10">
        {" "}
        <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0 text-center  leading-snug">
          Enjoy your visit to <br />
          {longLinkState}
        </h2>
      </div>
    </div>
  );
};

export default RedirectLink;
