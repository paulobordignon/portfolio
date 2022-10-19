import { ethers } from "hardhat";

async function main() {
  const Projects = await ethers.getContractFactory("Projects");
  const projects = await Projects.deploy();

  await projects.deployed();

  console.log(`Deployed: ${projects.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
