import type { NextPage } from "next";
import Head from "next/head";
import { Header } from "@src/components";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Paulo Bordignon</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <section className="bg-secondary min-h-screen">
        <Header />
      </section>
    </>
  );
};

export default Home;
