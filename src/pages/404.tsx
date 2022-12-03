import type { NextPage } from "next";
import Head from "next/head";
import { Footer, FourOhFour, Header } from "@src/components";

const FourOhFourPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>404 - Page Not Found</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <main>
        <FourOhFour />
      </main>
      <Footer />
    </>
  );
};

export default FourOhFourPage;
