<p align="center">
Contracts
</p>

All contracts in this folder were built using Hardhat and validated with Mocha.

There are three folders one for tests, one for contracts, and one for deploy scripts.

Execution Instruction:

1. To install the dependencies, run: `yarn`;

2. To execute the tests: `npx hardhat test`;

3. To make a local deployment: `npx hardhat node` and `npx hardhat run scripts/deploy.ts --network localhost`;

4. To make a deployment on the Goerli network first, fill out your alchemy key and your wallet private key in the .env file, then run: `npx hardhat run scripts/deploy.ts --network polygonZKEVMTestnet`

5. To verify the contract, fill out your etherscan key in the .env file, then run: `npx hardhat verify --network polygonZKEVMTestnet CONTRACT_ADDRESS`
