import type { NextPage } from "next";
import Head from "next/head";

import { Footer, Header } from "@src/components";

import { useSession } from "next-auth/react";

const Admin: NextPage = () => {
  const { data: session, status } = useSession();

  console.log("teste", session, status);
  return (
    <>
      <Head>
        <title>Admin Page</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <main className="max-w-7xl mx-auto"></main>
      <Footer />
    </>
  );
};

export default Admin;
