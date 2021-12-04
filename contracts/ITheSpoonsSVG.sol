// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

interface ITheSpoonsSVG {
  function generateSVGImage(uint256 tokenId, string memory hexCode, string memory role, string memory opposite,uint32 r,uint32 g, uint32 b) external view returns (string memory);
}
