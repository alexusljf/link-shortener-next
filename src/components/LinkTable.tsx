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

  // for mobile views
  const renderMobileCards = links.map((link, index) => (
    <div key={index} className="border rounded-md p-4 space-y-2">
      <div className="flex justify-between items-center">
        <span className="font-medium text-sm text-muted-foreground">
          Long URL
        </span>
        <DeleteButton id={link.shortUrl} />
      </div>
      <div className="truncate text-sm">{link.longUrl}</div>

      <div className="font-medium text-sm text-muted-foreground">Short URL</div>
      <a
        href={`https://${domainName}/${link.shortUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="truncate block text-sm text-blue-600"
      >
        {`https://${domainName}/${link.shortUrl}`}
      </a>

      <div className="flex justify-between text-sm">
        <div>
          <span className="font-medium text-muted-foreground">Created: </span>
          {new Date(link.dateCreated).toLocaleDateString()}
        </div>
        <div>
          <span className="font-medium text-muted-foreground">By: </span>
          {!link.userName ? "No User" : link.userName}
        </div>
      </div>
    </div>
  ));

  return (
    <div className="md:space-y-8 border-muted border-2 md:p-4 w-full max-w-[1200px]">
      <div className="hidden md:block overflow-auto h-[500px]">
        <Table className="w-full table-fixed">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[30%]">Long URL</TableHead>
              <TableHead className="w-[30%]">Short URL</TableHead>
              <TableHead className="w-[15%]">Date Created</TableHead>
              <TableHead className="w-[15%]">Created By</TableHead>
              <TableHead className="w-[10%]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {links.map((link, index) => (
              <TableRow key={index}>
                <TableCell className="truncate">
                  <div className="truncate">{link.longUrl}</div>
                </TableCell>
                <TableCell className="truncate">
                  <a
                    href={`https://${domainName}/${link.shortUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="truncate block"
                  >
                    {`https://${domainName}/${link.shortUrl}`}
                  </a>
                </TableCell>
                <TableCell>
                  {new Date(link.dateCreated).toLocaleDateString()}
                </TableCell>
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
      {/* Mobile card view (visible only on mobile) */}
      <div className="md:hidden space-y-4">{renderMobileCards}</div>
    </div>
  );
};

export default LinkTable;
