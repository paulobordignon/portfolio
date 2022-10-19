import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("Projects", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployOneYearLockFixture() {
    const image = "image";
    const title = "title";
    const about = "about";
    const keywords = ["solidity", "react"];
    const github = "github";
    const website = "website";

    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();

    const Projects = await ethers.getContractFactory("Projects");
    const projects = await Projects.deploy();

    return {
      projects,
      image,
      title,
      about,
      keywords,
      github,
      website,
      owner,
      otherAccount,
    };
  }

  describe("New Projects", function () {
    describe("Project all fields", function () {
      it("Should add a new project", async function () {
        const { projects, image, title, about, keywords, github, website } =
          await loadFixture(deployOneYearLockFixture);

        await expect(
          projects.addProject(image, title, about, keywords, github, website)
        );
      });
    });
    describe("Get all projects", function () {
      it("Should list all projects", async function () {
        const { projects } = await loadFixture(deployOneYearLockFixture);

        const allProjects = await expect(projects.getAllProjects());

        // console.log(ethers.utils.formatEther(allProjects));
      });
    });
  });
});
