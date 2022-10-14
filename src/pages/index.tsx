import type { NextPage } from "next";
import Head from "next/head";
import { About, Header, Hero, Projects } from "@src/components";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Paulo Bordignon</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <main className="max-w-7xl mx-auto">
        <Hero />
        <About />
        <Projects />
      </main>
      <footer className="text-secondaryText flex justify-center mt-48 mb-5">
        Built in 2022
      </footer>
    </>
  );
};

export default Home;
