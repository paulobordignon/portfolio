import type { NextPage } from "next";
import Head from "next/head";
import { ethers } from "ethers";

import abi from "@src/artifacts/contracts/Projects.json";
import { About, Alert, Footer, Header, Hero, Projects } from "@src/components";
import { AlertProvider } from "@src/providers";
import { IProject } from "@src/components/organisms/Projects/types";

export async function getStaticProps() {
  const contractAddress = process.env.NEXT_PUBLIC_CONTRACTADDRESS;
  const contractABI = abi.abi;
  const provider = new ethers.providers.AlchemyProvider(
    "goerli",
    process.env.NEXT_PUBLIC_GOERLI_PROVIDER
  );
  const ProjectsContract = new ethers.Contract(
    contractAddress,
    contractABI,
    provider
  );

  const listProjects = await ProjectsContract.getAllProjects();

  const projectsCleaned = listProjects.map((project) => {
    return {
      image: project.image,
      title: project.title,
      about: project.about,
      keywords: project.keywords,
      github: project.github,
      website: project.website,
    };
  });

  return {
    props: {
      projects: projectsCleaned,
    },
    revalidate: 86400,
  };
}

const Home: NextPage = ({ projects }: { projects: IProject[] }) => {
  return (
    <>
      <Head>
        <title>Paulo Bordignon</title>
        <link rel="icon" href="/favicon.png" />
        <link
          rel="canonical"
          href="https://paulobordignon.com/"
          key="canonical"
        />
        <meta
          name="description"
          content="Paulo Bordignon is a full stack developer from Brazil who has been working since 2015 with test automation, project management, and web application development."
          key="desc"
        />
        <meta property="og:title" content="Paulo Bordignon" />
        <meta
          property="og:description"
          content="Paulo Bordignon is a full stack developer from Brazil with a software engineering degree. Working since 2015 with test automation, project management, and web application development."
        />
        <meta
          property="og:image"
          content="https://www.paulobordignon.com/ogimage.png"
        />
        <meta property="og:url" content="https://www.paulobordignon.com/" />
        <meta property="og:type" content="website" />
      </Head>
      <AlertProvider>
        <Header />
        <main className="max-w-7xl mx-auto">
          <Hero />
          <About />
          <Projects projects={projects} />
        </main>
        <Footer />
        <Alert />
      </AlertProvider>
    </>
  );
};

export default Home;
