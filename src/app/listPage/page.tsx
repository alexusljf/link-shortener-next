import LinkTable from "@/components/LinkTable";

const Home = () => {
  return (
    <div className="flex flex-col justify-items-center items-center gap-10 p-10">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Previously Shortened Links
      </h1>
      <LinkTable />
    </div>
  );
};

export default Home;
