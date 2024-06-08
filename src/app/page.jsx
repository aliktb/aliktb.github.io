import Navbar from "./navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>
          Developer
          {process.env.NEXT_PUBLIC_ROOT_URL}
        </div>
      </main>
    </>
  );
}

export default Home;
