import LinkShortenerForm from "../components/LinkShortenerForm";

const Home = () => {
  return (
    <div className="flex flex-col justify-items-center items-center gap-10 p-10">
      <h1>Home Page</h1>
      <LinkShortenerForm />
      {/* Other SSR-rendered content */}
    </div>
  );
};

export default Home;
