import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require("dotenv").config({ path: __dirname + "/.env" });

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    polygonZKEVMMainnet: {
      url: process.env.ALCHEMY_KEY,
      accounts: [process.env.PRIVATE_KEY],
      chainId: 1101,
    },
    polygonZKEVMTestnet: {
      url: process.env.ALCHEMY_KEY_TESTNET,
      accounts: [process.env.PRIVATE_KEY],
      chainId: 1442,
    },
  },
  etherscan: {
    apiKey: {
      polygonZKEVMMainnet: process.env.ETHERSCAN_KEY,
      polygonZKEVMTestnet: process.env.ETHERSCAN_KEY,
    },
    customChains: [
      {
        network: "polygonZKEVMMainnet",
        chainId: 1101,
        urls: {
          apiURL: "https://api-zkevm.polygonscan.com/api",
          browserURL: "https://explorer.mainnet.zkevm-test.net/",
        },
      },
      {
        network: "polygonZKEVMTestnet",
        chainId: 1442,
        urls: {
          apiURL: "https://api-testnet-zkevm.polygonscan.com/api",
          browserURL: "https://explorer.public.zkevm-test.net/",
        },
      },
    ],
  },
};

export default config;
