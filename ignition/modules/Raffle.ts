import { buildModule } from "@nomicfoundation/hardhat-ignition/modules"
import { ethers } from "hardhat"

const JAN_1ST_2030 = 1893456000
const ONE_GWEI: bigint = 1_000_000_000n

const RaffleModule = buildModule("RaffleModule", (m) => {
    const raffle = m.contract(
        "Raffle",
        [
            "0x8103B0A8A00be2DDC778e6e7eaa21791Cd364625",
            "588",
            "0x474e34a077df58807dbe9c96d3c009b23b3c6d0cce433e59bbf5b34f823bc56c",
            "30",
            ethers.parseEther("0.01"),
            "500000",
        ],
        {}
    )

    return { raffle }
})

export default RaffleModule
