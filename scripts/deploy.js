const hre = require("hardhat");

async function main() {
  const upload = await hre.ethers.deployContract("Upload");
  // const upload = await Upload.deployContract();

  await upload.waitForDeployment();

  console.log("Library deployed to:", await upload.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
//: 0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6
