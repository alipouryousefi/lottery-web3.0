import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-ethers";
import "dotenv/config";
import "hardhat-gas-reporter";
import "hardhat-contract-sizer";


const SEPOLIA_RPC_URL =
    process.env.SEPOLIA_RPC_URL || "https://eth-sepolia.g.alchemy.com/v2/BNSWOFRj6wsSoRWWKUQgT3IEMOs9uI69"

const PRIVATE_KEY = process.env.PRIVATE_KEY || "f0cb2fa1830ef712eec48105ba406bdbe076cc4102d0f6a19b341199d5b21ee7"



const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks:{
    sepolia: {
      url: SEPOLIA_RPC_URL,
      accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
      //   accounts: {
      //     mnemonic: MNEMONIC,
      //   },
      chainId: 11155111,
  },
  }
};

export default config;
