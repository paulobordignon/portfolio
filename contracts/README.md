<p align="center">
Contracts
</p>

All contracts in this folder were built using Hardhat and validated with Mocha.

There are three folders one for tests, one for contracts, and one for deploy scripts.

Execution Instruction:

1. To execute the tests, run: `npx hardhat test`;

2. To make a local deployment, run: `npx hardhat node` and `npx hardhat run scripts/deploy.ts --network localhost`;

3. To make a deployment on the Goerli network first, fill out your alchemy key and your wallet private key in the .env file, then run: `npx hardhat run scripts/deploy.ts --network goerli`

4. To verify the contract, fill out your etherscan key in the .env file, then run: `npx hardhat verify --network goerli CONTRACT_ADDRESS`
