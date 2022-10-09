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
    </>
  );
};

export default Home;
