import React, {useState, useEffect} from 'react';
import Web3 from 'web3';

const contractABI = [
  {
    "constant":true,
    "inputs":[{"name":"_owner","type":"address"}],
    "name":"balanceOf",
    "outputs":[{"name":"balance","type":"uint256"}],
    "type":"function"
  },
  {
    "constant":true,
    "inputs":[],
    "name":"decimals",
    "outputs":[{"name":"","type":"uint8"}],
    "type":"function"
  },
  {
    "constant":true,
    "inputs":[{"name":"tokenId","type":"uint256"}],
    "name":"ownerOf",
    "outputs":[{"name":"owner","type":"address"}],
    "type":"function"
  }
];

export const Minter = () => {

  const COLORS_CONTRACT = '0x9fdb31f8ce3cb8400c7ccb2299492f2a498330a4'
  const [web3, setWeb3] = useState(null)
  const [address, setAddress] = useState(null)
  const [network, setNetwork] = useState(null)
  const [colorsOwned, setColorsOwned] = useState(null)

  useEffect(async () => {
    if (!window.ethereum)   console.log("Please install Metamask")

    const accounts = await ethereum.request({ method: "eth_requestAccounts" })
    setAddress(accounts[0])

    const web3 = new Web3(ethereum)
    setWeb3(web3)

    const networkName = await web3.eth.net.getNetworkType()
    if (networkName === "main")   setNetwork("Mainnet")
    else setNetwork(x)

    const contract = new web3.eth.Contract(contractABI, COLORS_CONTRACT);
    const colorsCount = await contract.methods.balanceOf(accounts[0]).call()
    setColorsOwned(colorsCount)

  }, []);

  if (address) {
    if (colorsOwned == 0){
      return (
        <div>
          <p className={"text-red-600 font-bold"}>{address} owns {colorsOwned} Colors NFT on {network}</p>
          <div className={"content-center flex"}>
            <button className={"bg-blue-500 mx-auto hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"}>
              Mint!
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <p className={"text-red-600 font-bold"}>You must own a Colors NFT to Mint!</p>
      )
    }
  }
  return (
    <p className={"text-red-600 font-bold"}>Please connect to Metamask</p>
  )
}