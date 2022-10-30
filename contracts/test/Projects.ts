import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("Project contract tests", function () {
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

  describe("Owner user", function () {
    it("Should add a new project and list it", async function () {
      const { projects, image, title, about, keywords, github, website } =
        await loadFixture(deployOneYearLockFixture);

      await expect(
        projects.addProject(image, title, about, keywords, github, website)
      );
      const result = await projects.getAllProjects();
      await expect(result[0].title).to.equal(title);
    });

    it("Should add three new projects and remove one", async function () {
      const { projects, image, title, about, keywords, github, website } =
        await loadFixture(deployOneYearLockFixture);

      await expect(
        projects.addProject(image, title, about, keywords, github, website)
      );
      await expect(
        projects.addProject(image, "title2", about, keywords, github, website)
      );
      await expect(
        projects.addProject(image, "title3", about, keywords, github, website)
      );
      await expect(projects.removeProject(1));
      await expect(
        projects.addProject(image, "title4", about, keywords, github, website)
      );
      await expect(projects.removeProject(1));
      const result = await projects.getAllProjects();
      await expect(result[1].title).to.equal("title4");
    });

    it("Should destruct the contract", async function () {
      const { projects } = await loadFixture(deployOneYearLockFixture);

      await expect(projects.selfDestruct());
      const bytecode2 = await projects.provider.getCode(projects.address);
      await expect(bytecode2).to.equal("0x");
    });
  });

  describe("Another user", function () {
    it("Shouldn't add a new project", async function () {
      const {
        projects,
        image,
        title,
        about,
        keywords,
        github,
        website,
        otherAccount,
      } = await loadFixture(deployOneYearLockFixture);

      await expect(
        projects
          .connect(otherAccount)
          .addProject(image, title, about, keywords, github, website)
      ).to.be.revertedWithCustomError(projects, "OnlyOwner");
    });

    it("Shouldn't remove a project", async function () {
      const {
        projects,
        image,
        title,
        about,
        keywords,
        github,
        website,
        otherAccount,
      } = await loadFixture(deployOneYearLockFixture);

      await expect(
        projects.addProject(image, title, about, keywords, github, website)
      );
      await expect(
        projects.connect(otherAccount).removeProject(0)
      ).to.be.revertedWithCustomError(projects, "OnlyOwner");
      const result = await projects.getAllProjects();
      await expect(result[0].title).to.equal(title);
    });

    it("Shouldn't destruct the contract and should list the projects", async function () {
      const {
        projects,
        image,
        title,
        about,
        keywords,
        github,
        website,
        otherAccount,
      } = await loadFixture(deployOneYearLockFixture);

      await expect(
        projects.addProject(image, title, about, keywords, github, website)
      );
      await expect(
        projects.connect(otherAccount).selfDestruct()
      ).to.be.revertedWithCustomError(projects, "OnlyOwner");
      const result = await projects.connect(otherAccount).getAllProjects();
      await expect(result[0].title).to.equal(title);
    });
  });
});
