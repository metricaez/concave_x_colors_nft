// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {

  const ConcaveSpoons = await hre.ethers.getContractFactory("ConcaveSpoons");
  const concaveSpoons = await ConcaveSpoons.deploy("Hello, miners!");

  await concaveSpoons.deployed();

  console.log("Concave Spoons deployed to:", concaveSpoons.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
