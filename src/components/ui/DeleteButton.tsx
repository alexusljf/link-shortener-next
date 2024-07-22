import React from "react";
import { Button } from "./button";
import { Trash2 } from "lucide-react";
import useDeleteLinkEffect from "@/effects/useDeleteLinkEffect";

interface props {
  id: string;
  onDeleted: () => void;
}

const DeleteButton: React.FC<props> = ({ id, onDeleted }) => {
  const handleDelete = useDeleteLinkEffect(id, onDeleted);
  return (
    <div>
      <Button variant="ghost" size="icon" onClick={handleDelete}>
        <Trash2 className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Trash2 className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Delete link</span>
      </Button>
    </div>
  );
};

export default DeleteButton;
