import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("WrappedETHModule", (m) => {
  const weth = m.contract("WrappedETH");

  return { weth };
});