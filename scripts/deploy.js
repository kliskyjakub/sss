const hre = require("hardhat");
const {getSigner} = require("@nomiclabs/hardhat-ethers/internal/helpers");
// const {BigNumber} = require("ethers");
const { ethers } = require("ethers");

async function main() {
    // We get the contract to deploy
    const subscriptionContractFactory = await hre.ethers.getContractFactory("SubscriptionService");
    const subscriptionContract = await subscriptionContractFactory.deploy(
        "x",
        "y",
        "0xF2B4E81ba39F5215Db2e05B2F66f482BB8e87FD2",
        "0xaD2F1f7cd663f6a15742675f975CcBD42bb23a88",
        "0x6fC99F5591b51583ba15A8C2572408257A1D2797",
        192900);
    await subscriptionContract.deployed();
    console.log("Contract deployed to:", subscriptionContract.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
