import type { NextPage } from "next";
import Head from "next/head";
import { Admin, Footer, Header } from "@src/components";

const AdminPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Admin Page</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <main className="max-w-7xl mx-auto">
        <Admin />
      </main>
      <Footer />
    </>
  );
};

export default AdminPage;
