import RedirectLink from "@/components/RedirectLink";
import { usePathname, useSearchParams } from "next/navigation";

const RedirectPage = () => {
  return (
    <div className="flex flex-col justify-items-center items-center gap-10 p-10">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Redirecting to your Page...
      </h1>
      <RedirectLink />
    </div>
  );
};

export default RedirectPage;
