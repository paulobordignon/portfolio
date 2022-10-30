import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Button } from "@src/components";

export function ButtonWallet() {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && authenticationStatus !== "loading";
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === "authenticated");
        return (
          <div
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <Button title="Connect Wallet" onClick={openConnectModal} />
                );
              }
              if (chain.unsupported) {
                return (
                  <Button
                    title="Wrong Network"
                    onClick={openChainModal}
                    type="error"
                  />
                );
              }
              return (
                <Button
                  title={account.displayName}
                  onClick={openAccountModal}
                />
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
}
