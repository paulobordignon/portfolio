Contracts

All contracts in this folder were built using hardhat. There are three folders one for tests, one for contracts, and one for deploy scripts.

To execute the tests, run: `npx hardhat test`;

To make a local deployment, run: `npx hardhat node` and `npx hardhat run scripts/deploy.ts --network localhost`;

To make a deployment the Goerli network first, fill out your alchemy key and your wallet private key in hardhat.config.js, then run: `npx hardhat run scripts/deploy.ts --network goerli`
