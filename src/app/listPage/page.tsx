import LinkTable from "@/components/LinkTable";
import { LoginDialog } from "@/components/LoginDialog";
import { headers } from "next/headers";

const Home = () => {
  const domainName = headers().get("host");
  return (
    <div className="flex flex-col justify-items-center items-center gap-10 p-10">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Previously Shortened Links
      </h1>
      {domainName && <LinkTable domainName={String(domainName)} />}
    </div>
  );
};

export default Home;
