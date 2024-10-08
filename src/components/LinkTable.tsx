"use client";
import React from "react";
import useLinkListEffect from "@/effects/useLinkListEffect";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import DeleteButton from "./ui/DeleteButton";
import useUserEffect from "@/effects/useUserEffect";

interface props {
  domainName: string;
}

const LinkTable: React.FC<props> = ({ domainName }) => {
  const { currentUser } = useUserEffect();
  const { links } = useLinkListEffect(currentUser);
  return (
    <div className="space-y-8 border-muted border-2 md:p-4 w-full md:w-auto md:py-4">
      <div className="overflow-auto h-[500px]">
        <Table className="w-full border-collapse">
          <TableHeader>
            <TableRow>
              <TableHead className="md:w-[200px]">Long URL</TableHead>
              <TableHead className="md:w-[200px]">Short URL</TableHead>
              <TableHead>Date Created</TableHead>
              <TableHead>Created By</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {links.map((link, index) => (
              <TableRow key={index}>
                <TableCell>{link.longUrl}</TableCell>
                <TableCell>
                  <a
                    href={`https://${domainName}/${link.shortUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {`https://${domainName}/${link.shortUrl}`}
                  </a>
                </TableCell>
                <TableCell>
                  {new Date(link.dateCreated).toLocaleDateString()}
                </TableCell>{" "}
                <TableCell>
                  {!link.userName ? "No User" : link.userName}
                </TableCell>
                <TableCell>
                  <DeleteButton id={link.shortUrl} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default LinkTable;
