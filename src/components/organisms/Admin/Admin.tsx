import { createRef, useEffect, useState } from "react";
import { ethers } from "ethers";
import abi from "@src/artifacts/contracts/Projects.json";
import { Button, Input } from "@src/components";
import { useAlert } from "@src/hooks";

export function Admin() {
  const { addAlert, addVariant } = useAlert();
  const [loading, setLoading] = useState(false);
  const [allProjects, setAllProjects] = useState([]);
  const iptImage = createRef<HTMLInputElement>();
  const iptTitle = createRef<HTMLInputElement>();
  const iptAbout = createRef<HTMLInputElement>();
  const iptKeywords = createRef<HTMLInputElement>();
  const iptGitHub = createRef<HTMLInputElement>();
  const iptWebsite = createRef<HTMLInputElement>();

  const contractAddress = process.env.NEXT_PUBLIC_CONTRACTADDRESS;
  const contractABI = abi.abi;
  const localProvider = new ethers.providers.Web3Provider(window.ethereum);
  const alchemyProvider = new ethers.providers.AlchemyProvider(
    "goerli",
    process.env.NEXT_PUBLIC_GOERLI_PROVIDER
  );
  const listContract = new ethers.Contract(
    contractAddress,
    contractABI,
    alchemyProvider
  );
  const crudContract = new ethers.Contract(
    contractAddress,
    contractABI,
    localProvider.getSigner()
  );

  const fields = [
    { label: "Title", placeholder: "Project title" },
    { label: "About", placeholder: "About the project" },
    { label: "Image", placeholder: "QmZk64ZpHdLrMkcK..." },
    { label: "Keywords", placeholder: "['Solidity', 'React']" },
    {
      label: "GitHub",
      placeholder: "https://github.com/paulobordignon/portfolio",
    },
    { label: "Website", placeholder: "https://www.paulobordignon.com/" },
  ];

  function showAlert(title, text) {
    addAlert(title, text);
    addVariant(title);
  }

  const addProject = async () => {
    try {
      setLoading(true);

      const projectTxn = await crudContract.addProject(
        iptImage.current.value,
        iptTitle.current.value,
        iptAbout.current.value,
        JSON.parse(iptKeywords.current.value),
        iptGitHub.current.value,
        iptWebsite.current.value
      );

      await projectTxn.wait();

      listAllProjects();
      showAlert("Success", `Project has been added ${projectTxn.hash}`);
    } catch (error) {
      showAlert("Error", error.message);
    } finally {
      setLoading(false);
    }
  };

  const listAllProjects = async () => {
    try {
      const listProjects = await listContract.getAllProjects();

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
      showAlert("Error", error.message);
    }
  };

  const removeProject = async (index) => {
    try {
      const removeProjectTxn = await crudContract.removeProject(index);

      await removeProjectTxn.wait();

      listAllProjects();
      showAlert("Success", "The project has been removed");
    } catch (error) {
      showAlert("Error", error.message);
    }
  };

  useEffect(() => {
    console.log("localProvider", localProvider, listContract);
    listAllProjects();
  }, []);

  return (
    <section className="min-h-[100vh] px-5 pt-[15vh] text-primaryText">
      <form className="flex gap-5 flex-wrap border border-cardHover p-5 rounded-[10px]">
        {fields.map((item) => {
          return (
            <div
              className="basis-full sm:basis-[calc(50%-1.25rem)] w-max"
              key={item.label}
            >
              <Input
                label={item.label}
                placeholder={item.placeholder}
                ref={eval(`ipt${item.label}`)}
              />
            </div>
          );
        })}
        <Button
          title="Add Project"
          onClick={() => addProject()}
          disabled={loading}
        />
      </form>

      {allProjects && (
        <div className="mt-8 border border-cardHover p-5 rounded-[10px]">
          <p className="text-lg">All Projects</p>
          <ul className="mt-5">
            {allProjects.map((project, i) => {
              return (
                <li key={project.title} className="mt-1">
                  {i} - {project.title}
                  <button
                    className="ml-5 border-2 rounded-[10px] p-1 text-sm border-error text-error hover:border-errorHover hover:text-errorHover"
                    onClick={() => removeProject(i)}
                  >
                    Remove
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </section>
  );
}
