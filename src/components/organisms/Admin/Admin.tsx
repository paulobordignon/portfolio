import { useEffect, useState, useRef } from "react";
import { ethers } from "ethers";
import abi from "@src/artifacts/contracts/Projects.json";
import { Button, Input } from "@src/components";
import { useAlert } from "@src/hooks";

export function Admin() {
  const { addAlert, addVariant } = useAlert();
  const [loading, setLoading] = useState(false);
  const [allProjects, setAllProjects] = useState([]);
  const iptTitle = useRef<HTMLInputElement>();
  const iptAbout = useRef<HTMLInputElement>();
  const iptImage = useRef<HTMLInputElement>();
  const iptKeywords = useRef<HTMLInputElement>();
  const iptGitHub = useRef<HTMLInputElement>();
  const iptWebsite = useRef<HTMLInputElement>();
  const localProvider = useRef<any>();
  const contract = useRef<any>();
  const contractAddress = process.env.NEXT_PUBLIC_CONTRACTADDRESS;
  const contractABI = abi.abi;

  function showAlert(title, text) {
    addAlert(title, text);
    addVariant(title);
  }

  const addProject = async () => {
    try {
      if (iptTitle.current.value) {
        setLoading(true);

        const projectTxn = await contract.current.addProject(
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
      }
    } catch (error) {
      showAlert("Error", error.message);
    } finally {
      setLoading(false);
    }
  };

  const removeProject = async (index) => {
    try {
      if (index) {
        const removeProjectTxn = await contract.current.removeProject(index);

        await removeProjectTxn.wait();

        listAllProjects();
        showAlert("Success", "The project has been removed");
      }
    } catch (error) {
      showAlert("Error", error.message);
    }
  };

  const listAllProjects = async () => {
    try {
      const listProjects = await contract.current.getAllProjects();

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

  async function getProvider() {
    // @ts-ignore
    localProvider.current = new ethers.BrowserProvider(window.ethereum);
    contract.current = new ethers.Contract(
      contractAddress,
      contractABI,
      await localProvider.current.getSigner(0)
    );

    listAllProjects();
  }

  useEffect(() => {
    getProvider();
  }, []);

  return (
    <section className="min-h-[100vh] px-5 pt-[15vh] text-primaryText">
      <form className="flex gap-5 flex-wrap border border-cardHover p-5 rounded-[10px]">
        <Input label="Title" placeholder="Project title" ref={iptTitle} />
        <Input label="About" placeholder="About the project" ref={iptAbout} />
        <Input label="Image" placeholder="QmZk64ZpHdLrMkcK..." ref={iptImage} />
        <Input
          label="Keywords"
          placeholder="['Solidity', 'React']"
          ref={iptKeywords}
        />
        <Input
          label="GitHub"
          placeholder="https://github.com/paulobordignon/portfolio"
          ref={iptGitHub}
        />
        <Input
          label="Website"
          placeholder="https://www.paulobordignon.com/"
          ref={iptWebsite}
        />
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
