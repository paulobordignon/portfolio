import type { NextPage } from "next";
import Head from "next/head";
import { About, Header, Hero } from "@src/components";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Paulo Bordignon</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="max-w-7xl mx-auto">
        <Header />
        <Hero />
        <About />
      </div>
    </>
  );
};

export default Home;
