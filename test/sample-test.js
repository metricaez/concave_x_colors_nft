const { expect } = require("chai");
const { ethers } = require("hardhat");


// SAMPLE TEST of default hardhat project with "Greeter" contract, change to relevant use when needed. 
describe("Test", function () {
  it("Should check mint", async function () {
    const color_contact = await ethers.getContractFactory("TheColors");
    const color = await color_contact.deploy();
    console.log('delpoyed?');
    const depl = await color.deployed();
    console.log('delpoyed');
    const mintTx = await color.mintNextColors(1);
    await mintTx.wait();
    console.log(mintTx);
  });
  /*
  it("Should return the new greeting once it's changed", async function () {
    const Greeter = await ethers.getContractFactory("Greeter");
    const greeter = await Greeter.deploy("Hello, world!");
    await greeter.deployed();

    expect(await greeter.greet()).to.equal("Hello, world!");

    const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

    // wait until the transaction is mined
    await setGreetingTx.wait();

    expect(await greeter.greet()).to.equal("Hola, mundo!");
  });
 */
});
