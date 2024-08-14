import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-ethers";
import "dotenv/config";
import "hardhat-gas-reporter";
import "hardhat-contract-sizer";
const config: HardhatUserConfig = {
  solidity: "0.8.24",
};

export default config;
