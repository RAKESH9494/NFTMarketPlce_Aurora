require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-ethers");
require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */
const { AURORA_TESTNET_PRIVATE_KEY } = process.env;
module.exports = {
  solidity: "0.8.1",
 networks: {
   hardhat: {},
   aurora_testnet: {
    url: 'https://aurora-testnet.infura.io/v3/API_KEY',
    accounts: [`YOUR_PRIVATE_KEY`],
    chainId: 1313161555
  }
 },
};
