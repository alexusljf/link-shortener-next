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
    <div className="border-solid border-black border-2  p-4 w-2/3">
      <Table>
        <TableCaption>A list of previously shortened links.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">Long URL</TableHead>
            <TableHead className="w-[200px]">Short URL</TableHead>
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
  );
};

export default LinkTable;
