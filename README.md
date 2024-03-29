# Concave Spoons

To be as faithful as possible to the original ***TheColors***, the architecture of ***TheSpoons*** will be the following:

 - We maintain `TheColors` NFT contract as is with the following minor exception: minting cannot be done directly in that contract - but instead minting is done by `TheSpoons` contract. (corollary: upong minting a `TheSpoons` you also get a `TheColors`!)
 - We take `TheSpirals` contract and transform it into `TheSpoons`.

The original `TheColors` contract is in `TheColors`. The original `TheSpirals` contract is in `TheSpirals` contract. Our edited version of `TheColors` contract is `TheColorsSpoons`. Our new implementation of `TheSpirals` is in `TheSpoons`.

The deploy script is in `scripts/deploy.js` (can be deployed with command `yarn deploy`).

In terms of deployed architecture what this means is that we are deploying a new altered version of `TheColors` which we will use as primitive for our `TheSpoons`. We aren't really touching the `TheColors` to be faithful to it and because we want to make it compatible with having a version in the future where `TheSpoons` interacts with the original version of `TheColors`.

***Our Work:***

Our work is almost entirely on the `TheSpoons` contract (`TheSpoons.sol`). In terms of workflow - lets all maintain a single branch and instead of modifying files lets create a new file with your name (for example `TheSpoonsJohny`) so we can compare our work without switching branches.

Important - the following are files we should not touch because they are the originals:

 - `base64.sol`
 - `INFTOwner.sol`
 - `TheColors.sol`
 - `TheSpirals.sol`


Also, we can talk on the discord but lets also log important stuff we have done here - just by adding to this README file.

***Traits***
```json
"spoon": {
  "Diamond": 1,
  "Platinum": 3,
  "Gold": 5,
  "Silver": 10,
  "Bronze": 15,
  "Wooden": 28,
  "Plastic": 38,
},
"role": {
    "Miner": 20,
    "Seismologist": 14,
    "Foreman": 12,
    "Genesis": 10,
    "Hentai": 8,
    "Spelunkers": 7,
    "Explorer": 6,
    "Documentators": 5,
    "Witness": 4,
    "Engineer":3.5,
    "Cave Troll": 3,
    "Operators": 2.5,
    "Inspector": 2,
    "MOTW": 1.5,
    "Super Mod": 1,
    "Core": 0.5,

    "Surveyors": 0,






},
```


**Metric**

Did in TheSpoonsM a first approach for traits rarity, I used tokende plus add of r g b to generate a uint8 which is ranges between 0 to 255. This is done in "generateSpoonTraits"
Then in "getMaterial" I mapped those 255 to ranges that reflect probabilit, so only 0, 1 and 2 will give you Diamond, then 3 to 7 will give you Platinum and so.


# Basic Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js
npx hardhat help
```
