async function main() {
  const MyNFT = await ethers.getContractFactory("TheColors")
  // Ropsten
  // TheColors contract address 0x1cAA1167Ff1BD298d71A2E9b19aA5595C1fbC341
  // TheSpirals contract address 0x6F69141C0419B1D94C29bD5972F99213C2CE7b92

  // Start deployment, returning a promise that resolves to a contract object
  const myNFT = await MyNFT.deploy()
  console.log("Contract deployed to address:", myNFT.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })

