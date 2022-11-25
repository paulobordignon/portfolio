import { useEffect, useState } from "react";
import Link from "next/link";
import { ethers } from "ethers";
import abi from "@src/artifacts/contracts/Projects.json";
import { Card, Spinner } from "@src/components";
import { useAccount } from "@src/hooks";

export function Projects() {
  const { isAdmin } = useAccount();
  const [loading, setLoading] = useState(true);
  const [allProjects, setAllProjects] = useState([]);
  const contractAddress = process.env.NEXT_PUBLIC_CONTRACTADDRESS;
  const contractABI = abi.abi;

  const getAllProjects = async () => {
    try {
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

      setAllProjects(projectsCleaned);
    } catch (error) {
      console.error("err", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllProjects();
  }, []);

  return (
    <section className="flex flex-col gap-5 md:ml-10 px-5 pt-64 xs:px-10">
      <h3 className="text-2xl text-primaryText font-semibold">
        I have built{" "}
        {isAdmin && (
          <Link href={"/admin"}>
            <a className="ml-4 text-primary text-lg">Add new project</a>
          </Link>
        )}
      </h3>
      <p className="text-lg text-secondaryText mb-10 font-semibold text-justify">
        The list below is public on the Ethereum blockchain{" "}
        <a
          className="text-primary"
          href="https://goerli.etherscan.io/address/0xC7B134E751293DC1905feD846eB68294a2A68f18"
          target={"_blank"}
          rel="noopener noreferrer"
        >
          in this smart contract
        </a>
        .
      </p>
      {loading ? (
        <Spinner height="h-20" width="max-w-7xl" />
      ) : (
        <ul className="flex gap-y-12 flex-wrap">
          {allProjects.map((project, index) => (
            <Card key={index} sequence={index} project={project} />
          ))}
        </ul>
      )}
    </section>
  );
}
