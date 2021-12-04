

const { expect } = require("chai");
const { ethers } = require("hardhat");




async function main() {

const theSpoonsAddress = '0x9fe46736679d2d9a65f0992f2272de9f3c7fa6e0';
const theColorsSpoonsAddress = '0x5fbdb2315678afecb367f032d93f642f64180aa3';
const theSpoonsSvgAddress = '0xe7f1725e7734ce288f8367e1bb143e90bb3f0512'

const TheSpoons = await hre.ethers.getContractFactory("TheSpoons");
const TheColorsSpoons = await hre.ethers.getContractFactory("TheColorsSpoons");
const TheSpoonsSVG = await hre.ethers.getContractFactory("TheSpoonsSVG");


const theSpoons = await TheSpoons.attach(theSpoonsAddress);
const theColorsSpoons = await TheColorsSpoons.attach(theColorsSpoonsAddress);
const theSpoonsSVG = await TheSpoonsSVG.attach(theSpoonsSvgAddress);


await theSpoons.mintSpoon(2);

// console.log('---')

// let meta = await spoons.getTokenMetadata(1);
// console.log(meta)
let svg = await theSpoons.getTokenSVG(1);
console.log(svg)
console.log('---')
// meta = await spoons.getTokenMetadata(2);
// console.log(meta)
svg = await theSpoons.getTokenSVG(2);
console.log(svg)
// await greeter.deployed();
console.log('passed')
// console.log("Greeter deployed to:", greeter.address);
}

main()
.then(() => process.exit(0))
.catch(error => {
  console.error(error);
  process.exit(1);
});

