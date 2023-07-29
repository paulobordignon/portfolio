import type { AppProps } from "next/app";
import Script from "next/script";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import {
  GetSiweMessageOptions,
  RainbowKitSiweNextAuthProvider,
} from "@rainbow-me/rainbowkit-siwe-next-auth";

import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { polygonZkEvm, polygonZkEvmTestnet } from "wagmi/chains";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import { Layout } from "@src/components";
import "@src/styles/main.css";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [polygonZkEvm, polygonZkEvmTestnet],
  [
    jsonRpcProvider({
      rpc: () => ({
        http: process.env.NEXT_PUBLIC_NETWORK_PROVIDER,
      }),
    }),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "Paulo Bordignon's Portfolio",
  projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_ID,
  chains,
});

const config = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

const getSiweMessageOptions: GetSiweMessageOptions = () => ({
  statement: "Sign in to the Paulo Bordignon's Portfolio.",
});

function MyApp({
  Component,
  pageProps,
}: AppProps<{
  session: Session;
}>) {
  return (
    <WagmiConfig config={config}>
      <SessionProvider refetchInterval={0} session={pageProps.session}>
        <RainbowKitSiweNextAuthProvider
          getSiweMessageOptions={getSiweMessageOptions}
        >
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
            <>
              <Script
                strategy="afterInteractive"
                src="https://www.googletagmanager.com/gtag/js?id=G-ZLEY94TQE0"
              />
              <Script id="google-analytics" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
          
                    gtag('config', 'G-ZLEY94TQE0');
                  `}
              </Script>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </>
          </RainbowKitProvider>
        </RainbowKitSiweNextAuthProvider>
      </SessionProvider>
    </WagmiConfig>
  );
}

export default MyApp;
