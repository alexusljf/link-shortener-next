import { headers } from "next/headers";
import LinkShortenerForm from "../components/LinkShortenerForm";
import { LoginDialog } from "@/components/LoginDialog";

const Home = () => {
  const domainName = headers().get("host");
  const baseUrl = `https://${domainName}`;

  return (
    <div className="flex flex-col justify-items-center items-center gap-10 p-10">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Link Shortener
      </h1>
      {baseUrl && <LinkShortenerForm domainName={baseUrl} />}
    </div>
  );
};

export default Home;
