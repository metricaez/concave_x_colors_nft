import TheSpirals from '../../artifacts/contracts/legacy_spirals/TheSpirals.sol/TheSpirals.json';
import TheColors from '../../artifacts/contracts/legacy_colors/TheColors.sol/TheColors.json';
import React, {useState, useEffect} from 'react';
import Web3 from 'web3';

export const Minter = () => {

  const COLORS_CONTRACT = '0x3C4CfA9540c7aeacBbB81532Eb99D5E870105CA9'
  const [web3, setWeb3] = useState(null)
  const [svgs, setSvgs] = useState(null)
  const [address, setAddress] = useState(null)
  const [network, setNetwork] = useState(null)
  const [colorsOwned, setColorsOwned] = useState(null)

  useEffect(async () => {
    if (!window.ethereum)   console.log("Please install Metamask")

    const accounts = await ethereum.request({ method: "eth_requestAccounts" })
    setAddress(accounts[0])

    setSvgs([]);

    const web3 = new Web3(ethereum)
    setWeb3(web3)

    const networkName = await web3.eth.net.getNetworkType()
    if (networkName === "main")   setNetwork("Mainnet")
    else setNetwork(networkName)

    const contract = new web3.eth.Contract(TheColors.abi, COLORS_CONTRACT);
    const colorsCount = await contract.methods.balanceOf(accounts[0]).call()
    setColorsOwned(colorsCount)

    if (colorsCount > 0) {

      const svgs = [];
      for (const i = 0; i < colorsCount; ++i) {
        const tokenId = await contract.methods.tokenOfOwnerByIndex(accounts[0], web3.eth.abi.encodeParameter('uint256',i)).call()
        const svg = await contract.methods.getTokenSVG(web3.eth.abi.encodeParameter('uint256',tokenId)).call()
        svgs.push(svg.replace(/"690"/g,"75", 'g'))
      }
      setSvgs(svgs)
    }

  }, []);

  async function triggerMint(){

    const nonce = await web3.eth.getTransactionCount(address, 'latest');
    const contract = new web3.eth.Contract(TheColors.abi, COLORS_CONTRACT);
    const tx = {
      'from': address,
      'to': COLORS_CONTRACT,
      'nonce': nonce,
      //"value": web3.utils.toWei('.01','ether'),
      'gas': 500000,
      'data': contract.methods.mintNextColors(web3.eth.abi.encodeParameter('uint256',1)).encodeABI()
    };

    await web3.eth.sendTransaction(tx, address).catch()
  }

  if (address) {
    if (colorsOwned > 0){
      return (
        <div>
          <p className={"text-red-600 font-bold"}>{address} owns {colorsOwned} Colors NFT on {network}</p>
          <div className={"content-center flex"}>
            <button onClick={triggerMint} className={"bg-blue-500 mx-auto hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"}>
              Mint a Colors NFT!
            </button>

            
          </div>
          <div>
            <p>Your Colors:</p>
            <div className={"flex colors"}>
            {svgs && svgs.map(svg => (
              <div className={"mx-5"} dangerouslySetInnerHTML={{ __html: svg }} />
            ))}
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <p className={"text-red-600 font-bold"}>You must own a Colors NFT to Mint!</p>
          <button onClick={triggerMint} className={"bg-blue-500 mx-auto hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"}>
            Mint a Colors NFT!
          </button>
        </div>

      )
    }
  }
  return (
      <button
          className='inline-flex bg-green-500 items-center mr-5 border-b-4
               hover:border-8 border-black py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0'>Connect Wallet
      </button>
  )
}
