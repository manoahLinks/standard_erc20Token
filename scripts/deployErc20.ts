import { ethers } from "hardhat";

async function main() {

    const name = "Mano"

    const symbol = "McX"

    const decimal = 18

    const amount = 10000

  const erc20 = await ethers.deployContract("Erc20", [name, symbol, decimal, amount]);

  await erc20.waitForDeployment();

  console.log(
    `Erc20Toke has been successfully deployed to ${erc20.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
