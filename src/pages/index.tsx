import type { NextPage } from "next";
import Head from "next/head";

import { About, Alert, Footer, Header, Hero, Projects } from "@src/components";
import { AlertProvider } from "@src/providers";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Paulo Bordignon</title>
        <link rel="icon" href="/favicon.png" />
        <meta
          name="description"
          content="Paulo Bordignon's Portfolio. A Full Stack Developer from Brazil."
          key="desc"
        />
        <meta property="og:title" content="Paulo Bordignon" />
        <meta
          property="og:description"
          content="Paulo Bordignon's Portfolio. A Full Stack Developer from Brazil."
        />
      </Head>
      <AlertProvider>
        <Header />
        <main className="max-w-7xl mx-auto">
          <Hero />
          <About />
          <Projects />
        </main>
        <Footer />
        <Alert />
      </AlertProvider>
    </>
  );
};

export default Home;
