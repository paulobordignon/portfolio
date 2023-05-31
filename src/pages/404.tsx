import type { NextPage } from "next";
import Head from "next/head";
import { FourOhFour } from "@src/components";

const FourOhFourPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>404 - Page Not Found</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        <FourOhFour />
      </main>
    </>
  );
};

export default FourOhFourPage;
