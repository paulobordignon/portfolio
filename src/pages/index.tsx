import type { NextPage } from "next";
import Head from "next/head";

import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

import { About, Footer, Header, Hero, Projects } from "@src/components";

const { chains, provider } = configureChains(
  [chain.goerli],
  [alchemyProvider(), publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "Paulo Bordignon's Portfolio",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

const Home: NextPage = () => {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
        chains={chains}
        theme={darkTheme({
          accentColor: "#64ffda",
          accentColorForeground: "rgba(13, 17, 23, 1)",
          borderRadius: "medium",
          fontStack: "system",
          overlayBlur: "small",
        })}
      >
        <Head>
          <title>Paulo Bordignon</title>
          <link rel="icon" href="/favicon.png" />
        </Head>
        <Header />
        <main className="max-w-7xl mx-auto">
          <Hero />
          <About />
          <Projects />
        </main>
        <Footer />
      </RainbowKitProvider>
    </WagmiConfig>
  );
};

export default Home;
