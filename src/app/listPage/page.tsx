import LinkList from "@/components/LinkList";

const Home = () => {
  return (
    <div className="flex flex-col justify-items-center items-center gap-10 p-10">
      <h1>list</h1>
      <LinkList />
      {/* Other SSR-rendered content */}
    </div>
  );
};

export default Home;
