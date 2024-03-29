// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const TheSpoons = await hre.ethers.getContractFactory("TheSpoons");
  const TheColorsSpoons = await hre.ethers.getContractFactory("TheColorsSpoons");
  const TheSpoonsSVG = await hre.ethers.getContractFactory("TheSpoonsSVG");

  const colors = await TheColorsSpoons.deploy();
  const spoonssvg = await TheSpoonsSVG.deploy();
  const spoons = await TheSpoons.deploy(colors.address,spoonssvg.address);


  await colors.setSpoonsAddress(spoons.address);
  await spoons.mintSpoon(2);

  // console.log('---')

  // let meta = await spoons.getTokenMetadata(1);
  // console.log(meta)
  // let svg = await spoons.getTokenSVG(1);
  // console.log(svg)
  // console.log('---')
  // // meta = await spoons.getTokenMetadata(2);
  // // console.log(meta)
  // svg = await spoons.getTokenSVG(2);
  // console.log(svg)
  // svg = await spoons.getTokenSVG(2);
  // console.log(svg)
  // // await greeter.deployed();
  // console.log('passed')
  for (var i = 0; i < 5; i++) {
    await spoons.mintSpoon(1);
    // await spoons.getTokenMetadata(i);
    let svg = await spoons.getTokenSVG(i);
    console.log(svg)
  }
  // console.log("Greeter deployed to:", greeter.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
