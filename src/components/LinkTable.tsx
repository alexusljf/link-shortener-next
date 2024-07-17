"use client";
import useLinkListEffect from "@/effects/useLinkListEffect";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const LinkTable = () => {
  const { links } = useLinkListEffect();
  console.log(links);

  return (
    <div className="space-y-8 border-muted border-2 py-4 md:p-4 md:w-3/7 ">
      <div className="overflow-auto h-[500px]">
        <Table className="w-full border-collapse">
          <TableHeader>
            <TableRow>
              <TableHead className="md:w-[200px]">Long URL</TableHead>
              <TableHead className="md:w-[200px]">Short URL</TableHead>
              <TableHead>Date Created</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {links.map((link, index) => (
              <TableRow key={index}>
                <TableCell>{link.longUrl}</TableCell>
                <TableCell>
                  <a
                    href={link.shortUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.shortUrl}
                  </a>
                </TableCell>
                <TableCell>
                  {new Date(link.dateCreated).toLocaleDateString()}
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
