import { createRef, useState } from "react";
import { ethers } from "ethers";
import abi from "@src/artifacts/contracts/Projects.json";
import { Button, Input } from "@src/components";
import { useAlert } from "@src/hooks";

export function Admin() {
  const [loading, setLoading] = useState(false);
  const iptImage = createRef<HTMLInputElement>();
  const iptTitle = createRef<HTMLInputElement>();
  const iptAbout = createRef<HTMLInputElement>();
  const iptKeywords = createRef<HTMLInputElement>();
  const iptGitHub = createRef<HTMLInputElement>();
  const iptWebsite = createRef<HTMLInputElement>();
  const contractAddress = process.env.NEXT_PUBLIC_CONTRACTADDRESS;
  const contractABI = abi.abi;
  const { ethereum } = window;
  const { addError } = useAlert();

  const fields = [
    { label: "Title", placeholder: "Project title" },
    { label: "About", placeholder: "About the project" },
    { label: "Image", placeholder: "QmZk64ZpHdLrMkcK..." },
    { label: "Keywords", placeholder: "['Solidity', 'React']" },
    {
      label: "GitHub",
      placeholder: "https://github.com/paulobordignon/portfolio",
    },
    { label: "Website", placeholder: "paulobordignon.com" },
  ];

  const addProject = async () => {
    try {
      if (ethereum) {
        setLoading(true);

        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const ProjectsContract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );

        const projectTxn = await ProjectsContract.addProject(
          iptImage.current?.value,
          iptTitle.current?.value,
          iptAbout.current?.value,
          JSON.parse(iptKeywords.current?.value),
          iptGitHub.current?.value,
          iptWebsite.current?.value
        );

        await projectTxn.wait();
        iptImage.current.value = "";
        iptTitle.current.value = "";
        iptAbout.current.value = "";
        iptKeywords.current.value = "";
        iptGitHub.current.value = "";
        iptWebsite.current.value = "";
        addError("Success", `Project has been added ${projectTxn.hash}`);
      } else {
        addError("Error", "Authentication problem");
      }
    } catch (error) {
      addError("Error", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-[100vh] px-5 pt-[10vh] text-primaryText ">
      <form className="flex gap-5 flex-wrap">
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
        <Button title="Add" onClick={() => addProject()} disabled={loading} />
      </form>
    </section>
  );
}
