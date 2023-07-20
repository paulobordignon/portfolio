// @ts-nocheck
import { useState, useRef, useEffect } from "react";
import {
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
  useWalletClient,
} from "wagmi";

import { Button, Input } from "@src/components";
import { useAlert } from "@src/hooks";
import abi from "@src/artifacts/contracts/Projects.json";

export function Admin() {
  const { addAlert, addVariant } = useAlert();
  const [allProjects, setAllProjects] = useState([]);
  const removeId = useRef<Number>();
  const createNew = useRef<Boolean>(false);
  const iptTitle = useRef<HTMLInputElement>();
  const iptAbout = useRef<HTMLInputElement>();
  const iptImage = useRef<HTMLInputElement>();
  const iptKeywords = useRef<HTMLInputElement>();
  const iptGitHub = useRef<HTMLInputElement>();
  const iptWebsite = useRef<HTMLInputElement>();
  const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS;

  const { data: walletClient } = useWalletClient();
  useContractRead({
    address: contractAddress,
    abi: abi.abi,
    functionName: "getAllProjects",
    walletClient: walletClient,
    watch: true,
    onSuccess(data) {
      setAllProjects(data);
    },
    onError(error) {
      showAlert("Error", error);
    },
  });

  const { config: configAdd, refetch: refetchAdd } = usePrepareContractWrite({
    address: contractAddress,
    abi: abi.abi,
    functionName: "addProject",
    from: walletClient?.account?.address,
    args: [
      iptImage.current?.value,
      iptTitle.current?.value,
      iptAbout.current?.value,
      JSON.parse(iptKeywords.current?.value || JSON.stringify([])),
      iptGitHub.current?.value,
      iptWebsite.current?.value,
    ],
  });
  const {
    data: dataAdd,
    write: writeAdd,
    isLoading: loadingAdd,
  } = useContractWrite(configAdd);

  const { config: configRemove, refetch: refetchRemove } =
    usePrepareContractWrite({
      address: contractAddress,
      abi: abi.abi,
      functionName: "removeProject",
      from: walletClient?.account?.address,
      args: [removeId.current || 0],
    });
  const {
    data: dataRemove,
    write: writeRemove,
    isLoading: loadingRemove,
  } = useContractWrite(configRemove);

  const { isLoading, isSuccess, isError, error } = useWaitForTransaction({
    hash: dataAdd?.hash || dataRemove?.hash,
  });

  useEffect(() => {
    if (removeId.current > -1) {
      refetchRemove?.();
      writeRemove?.();
      removeId.current = undefined;
    }
  }, [removeId.current]);

  useEffect(() => {
    if (createNew.current) {
      refetchAdd?.();
      writeAdd?.();
      createNew.current = false;
    }
  }, [createNew.current]);

  useEffect(() => {
    if (isSuccess || isError) {
      showAlert(
        isSuccess ? "Success" : "Error",
        isSuccess
          ? "Operation completed successfully"
          : error?.message.substring(0, 40)
      );
    }
  }, [isSuccess, isError]);

  function showAlert(title, text) {
    addAlert(title, text);
    addVariant(title);
  }

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
          onClick={async () => {
            if (iptTitle.current?.value && iptKeywords.current?.value) {
              createNew.current = true;
            } else {
              showAlert("Error", "Title and Keywords are required");
            }
          }}
          disabled={isLoading || loadingAdd || loadingRemove}
        />
      </form>

      {allProjects && (
        <div className="mt-8 border border-cardHover p-5 rounded-[10px]">
          <p className="text-lg">All Projects</p>
          <ul className="mt-5">
            {allProjects.map((project, i) => {
              return (
                <li key={project.id} className="mt-1">
                  {project.id} - {project.title}
                  <button
                    className="ml-5 border-2 rounded-[10px] p-1 text-sm border-error 
                    text-error hover:border-errorHover hover:text-errorHover
                    disabled:border-cardHover disabled:text-cardHover"
                    onClick={() => {
                      removeId.current = i;
                    }}
                    disabled={isLoading || loadingAdd || loadingRemove}
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
