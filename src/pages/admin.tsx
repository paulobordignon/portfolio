import type { NextPage } from "next";
import Head from "next/head";
import { Admin, Alert, Footer, Header } from "@src/components";
import { AlertProvider } from "@src/providers";

const AdminPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Admin Page</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <AlertProvider>
        <Header />
        <main className="max-w-7xl mx-auto">
          <Admin />
        </main>
        <Footer />
        <Alert />
      </AlertProvider>
    </>
  );
};

export default AdminPage;
