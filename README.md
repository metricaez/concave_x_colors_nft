# Concave Spoons

To be as faithfull as possible to the original ***TheColors*** the architecture of ***ConcaveSpoons*** will be the following:

 - We maintain `TheColors` NFT contract as is with the following minor exception: minting cannot be done directly in that contract - but instead minting is done by `TheSpoons` contract. (corollary: upong minting a `TheSpoons` you also get a `TheColors`!)
 - The take `TheSpirals` contract and transform it into `TheSpoons`

The original `TheColors` contract is in `TheColors`. The original `TheSpirals` contract is in `TheSpirals` contract. Our edited version of `TheColors` contract is `TheColorsSpoons`. Our new implementation of `TheSpirals` is in `TheSpoons`.

The deploy script is in `scripts/deploy.js` (can be deployed with command `yarn deploy`).


***Traits***
```json
"spoon": {
  "Diamond": 1,
  "Platinum": 3,
  "Gold": 5,
  "Silver": 10,
  "Bronze": 15,
  "Wooden": 8,
  "Plastic": 38,
},
"role": {
    "Operators": 1,
    "Documentators": 2,
    "Spelunkers": 5,
    "Witness": 3,
    "Genesis": 16,
    "Surveyors": 5,
    "Foreman": 10,
    "Hentai": 10,
    "Explorer": 5,
    "Seismologist": 16,
    "Miners": 20,
    "Cave Troll": 5,
    "Core": 1,
    "Inspector": 1
},
```

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
