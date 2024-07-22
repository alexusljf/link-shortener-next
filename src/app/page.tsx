import { headers } from "next/headers";
import LinkShortenerForm from "../components/LinkShortenerForm";

const Home = () => {
  const domainName = headers().get("host");

  return (
    <div className="flex flex-col justify-items-center items-center gap-10 p-10">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Link Shortener
      </h1>
      {domainName && <LinkShortenerForm domainName={domainName} />}
    </div>
  );
};

export default Home;
