import type { AppProps } from "next/app";
import Script from "next/script";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import "@src/styles/main.css";
import { RouteGuardProvider } from "@src/providers";

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

import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

const { chains, provider } = configureChains(
  [chain.goerli],
  [
    alchemyProvider({
      apiKey: process.env.NEXT_PUBLIC_GOERLI_PROVIDER,
    }),
    publicProvider(),
  ]
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
    <WagmiConfig client={wagmiClient}>
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
            <RouteGuardProvider>
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
                <Component {...pageProps} />
              </>
            </RouteGuardProvider>
          </RainbowKitProvider>
        </RainbowKitSiweNextAuthProvider>
      </SessionProvider>
    </WagmiConfig>
  );
}

export default MyApp;
