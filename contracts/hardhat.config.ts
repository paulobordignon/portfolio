import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require("dotenv").config({ path: __dirname + "/.env" });

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    zkEVM: {
      url: process.env.ALCHEMY_KEY,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: {
      zkEVM: process.env.ETHERSCAN_KEY,
    },
  },
};

export default config;
