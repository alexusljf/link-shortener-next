import { LinkDocument } from "@/models/Link";
import axios from "axios";
import React from "react";
import useLinkListEffect from "./useLinkListEffect";

const useDeleteLinkEffect = (id: string) => {
  const { fetchLinks } = useLinkListEffect();
  const handleDelete = async () => {
    if (id) {
      try {
        const response = await axios.delete(`/api/deleteLink?id=${id}`);
        if (response.status === 200) {
          fetchLinks();
        } else {
          console.log("Unable to delete Link");
        }
      } catch (error) {
        console.log("Error occured while deleting link");
      }
    }
  };

  return handleDelete;
};

export default useDeleteLinkEffect;
