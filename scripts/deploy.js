import { network } from "hardhat";

const { viem } = await network.connect({
  network: "localhost"
});

console.log("Deploying contract...");

const [senderClient] = await viem.getWalletClients();
console.log("Deploying from", senderClient.account.address);

// viem.deployContract를 직접 사용 (가장 간단한 방법)
const weth = await viem.deployContract("WrappedETH");

console.log("✅ Contract deployed!");
console.log("📍 Address:", weth.address);