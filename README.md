## Concave NFT Project (∞)

We need to generate the custom concave nft based on THE COLOR primitive. So you should have the THE COLOR primitive in the wallet to generate concave nft. The primitive will change the concave nft color.

### Bakend Hardhat

Testing on localhost:

```
npx hardhat node
npx hardhat run scripts/deploy_colors.js --network localhost
npx hardhat console --network localhost
```

See https://docs.openzeppelin.com/learn/deploying-and-interacting
and https://hardhat.org/getting-started/

Testing on ropsten:

```
npx hardhat run scripts/deploy_colors.js --network ropsten
npx hardhat run scripts/mint_the_colors.js --network ropsten
```

### Frontend React

See instructions in frontend folder. Update next.config.js adn comment out base path and asset prefix.

### Todo

 - [x] Upload THE COLOR contract
 - [x] Make a web site to mint THE COLOR primitive
 - [ ] Make a fancy landing page
 - [x] Create basic concave related SVG
 - [ ] Create fancy svg with animation
 - [x] Create basic contract that will generate svg
 - [ ] Create nft contract that will generate concave nft based on the primitive in the wallet
 - [ ] Upload to rinkeby
 - [ ] View on OpenSea
 - [ ] Upload to ETH and mint on original THE COLOR primitive
