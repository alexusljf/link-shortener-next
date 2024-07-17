import { Link } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface ShortLinkCardProps {
  shortUrl: string;
}

const ShortLinkCard: React.FC<ShortLinkCardProps> = ({ shortUrl }) => {
  return (
    <Alert className="border-muted border-2 w-80  md:w-3/5">
      <Link className="h-4 w-4" />
      <AlertTitle>Your Link has been shortened!</AlertTitle>
      <AlertDescription>
        Shortened URL:
        <a href={shortUrl} target="_blank" rel="noopener noreferrer">
          {shortUrl}
        </a>
      </AlertDescription>
    </Alert>
  );
};

export default ShortLinkCard;
