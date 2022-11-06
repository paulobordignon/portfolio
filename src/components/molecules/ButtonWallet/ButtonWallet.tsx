import { useRef } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Button } from "@src/components";
import { useAlert } from "@src/hooks";

export function ButtonWallet() {
  const isFirstRender = useRef(true);
  const { addError } = useAlert();

  function showAlert() {
    addError(
      "Only owner",
      "You can connect, but nothing new will be displayed."
    );
    isFirstRender.current = false;
  }

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
                  <Button
                    title="Connect Wallet"
                    onClick={
                      isFirstRender.current
                        ? () => showAlert()
                        : openConnectModal
                    }
                  />
                );
              }
              if (chain.unsupported) {
                return (
                  <Button
                    title="Wrong Network"
                    onClick={openChainModal}
                    variant="error"
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
