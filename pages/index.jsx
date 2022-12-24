import { WebBundlr } from "@bundlr-network/client";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useProvider } from "wagmi";

export default function Home() {
  const provider = useProvider();

  const bundlr = new WebBundlr("https://node1.bundlr.network", 'bnb',provider)

  return (
    <>
      <ConnectButton />
    </>
  );
}
