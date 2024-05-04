require("@nomiclabs/hardhat-waffle");
require('dotenv').config();

module.exports = {
  solidity: "0.8.17",
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${process.env.REACT_APP_ALCHEMY_SEPOLIA}`,
      accounts: [`0x${process.env.REACT_APP_PRIVATE_KEY}`],
    },
  },
};