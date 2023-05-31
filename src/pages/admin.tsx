import type { NextPage } from "next";
import Head from "next/head";
import { Admin, Alert } from "@src/components";
import { AlertProvider } from "@src/providers";

const AdminPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Admin Page</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <AlertProvider>
        <main className="max-w-7xl mx-auto">
          <Admin />
        </main>
        <Alert />
      </AlertProvider>
    </>
  );
};

export default AdminPage;
