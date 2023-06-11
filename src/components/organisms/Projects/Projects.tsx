import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";
import { Card } from "@src/components";
import { useAccount } from "@src/hooks";
import { IProject } from "./types";

export function Projects({ projects }: { projects: IProject[] }) {
  const { isAdmin } = useAccount();

  return (
    <section className="flex flex-col gap-5 mb-40 md:ml-10 px-5 pt-64 xs:px-10">
      <h3 className="text-2xl text-primaryText font-semibold">
        I have built{" "}
        {isAdmin && (
          <Link className="ml-4 text-primary text-lg" href={"/admin"}>
            Add new project
          </Link>
        )}
      </h3>
      <p className="text-lg text-secondaryText mb-10 text-justify">
        The list below is public on the Ethereum blockchain{" "}
        <a
          className="text-primary"
          href={`https://goerli.etherscan.io/address/${process.env.NEXT_PUBLIC_CONTRACTADDRESS}`}
          target={"_blank"}
          rel="noopener noreferrer"
        >
          in this smart contract{" "}
          <FiExternalLink className="hover:text-primaryHover inline align-baseline" />
        </a>
        .
      </p>
      <ul className="flex gap-y-12 flex-wrap">
        {projects.map((project, index) => (
          <Card key={index} sequence={index} project={project} />
        ))}
      </ul>
      <a
        className="font-semibold text-primary text-lg text-center mt-5 md:mr-10"
        href={"https://github.com/paulobordignon?tab=repositories"}
        target={"_blank"}
        rel="noopener noreferrer"
      >
        See more projects{" "}
        <FiExternalLink className="hover:text-primaryHover inline align-baseline" />
      </a>
    </section>
  );
}
