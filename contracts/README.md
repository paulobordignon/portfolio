<p align="center">
Contracts
</p>

All contracts in this folder were built using hardhat. There are three folders one for tests, one for contracts, and one for deploy scripts.

Execution Instruction:

1. To execute the tests, run: `npx hardhat test`;

2. To make a local deployment, run: `npx hardhat node` and `npx hardhat run scripts/deploy.ts --network localhost`;

3. To make a deployment on the Goerli network first, fill out your alchemy key and your wallet private key in a .env file, then run: `npx hardhat run scripts/deploy.ts --network goerli`
