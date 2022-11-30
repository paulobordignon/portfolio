import Link from "next/link";
import { Card } from "@src/components";
import { useAccount } from "@src/hooks";
import { IProject } from "./types";

export function Projects({ projects }: { projects: IProject[] }) {
  const { isAdmin } = useAccount();

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
          href="https://goerli.etherscan.io/address/0xF37c5dFe3c7700F25EAaAdcD1debB5308a0F350e"
          target={"_blank"}
          rel="noopener noreferrer"
        >
          in this smart contract
        </a>
        .
      </p>
      <ul className="flex gap-y-12 flex-wrap">
        {projects.map((project, index) => (
          <Card key={index} sequence={index} project={project} />
        ))}
      </ul>
    </section>
  );
}
