const hre = require("hardhat");

async function main() {

  // We get the contract to deploy
  const subscriptionContractFactory = await hre.ethers.getContractFactory("SubscriptionService");
  const subscriptionContract = await subscriptionContractFactory.deploy("x","y");
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
