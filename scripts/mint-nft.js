require("dotenv").config()

// The colors contract is 0x1caa1167ff1bd298d71a2e9b19aa5595c1fbc341
const contractAddress = "0x1caa1167ff1bd298d71a2e9b19aa5595c1fbc341"

const API_URL = process.env.API_URL;
const PUBLIC_KEY = process.env.PUBLIC_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

const { createAlchemyWeb3 } = require("@alch/alchemy-web3")
const web3 = createAlchemyWeb3(API_URL)

const contract = require("../artifacts/contracts/legacy_colors/TheColors.sol/TheColors.json")
// console.log(JSON.stringify(contract.abi))

const nftContract = new web3.eth.Contract(contract.abi, contractAddress)
mintNFT(1);

async function mintNFT(numberOfTokens) {
   const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, 'latest'); //get latest nonce
 //the transaction
   const tx = {
     'from': PUBLIC_KEY,
     'to': contractAddress,
     'nonce': nonce,
     'gas': 5000000,
     'data': nftContract.methods.mintNextColors(numberOfTokens).encodeABI()
   };
   const signPromise = web3.eth.accounts.signTransaction(tx, PRIVATE_KEY)

  signPromise
    .then((signedTx) => {
      web3.eth.sendSignedTransaction(
        signedTx.rawTransaction,
        function (err, hash) {
          if (!err) {
            console.log(
              "The hash of your transaction is: ",
              hash,
              "\nCheck Alchemy's Mempool to view the status of your transaction!"
            )
          } else {
            console.log(
              "Something went wrong when submitting your transaction:",
              err
            )
          }
        }
      )
    })
    .catch((err) => {
      console.log("Promise failed:", err)
    })
 }
