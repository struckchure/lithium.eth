import { createThirdwebClient } from "thirdweb";
import { ConnectButton } from "thirdweb/react";
import { createWallet, inAppWallet } from "thirdweb/wallets";

import { THIRD_WEB_CLIENT_ID } from "../constants/env";

const wallets = [
  inAppWallet(),
  createWallet("io.metamask"),
  createWallet("com.coinbase.wallet"),
  createWallet("me.rainbow"),
];

const client = createThirdwebClient({
  clientId: THIRD_WEB_CLIENT_ID,
});

export function AuthProviders() {
  return (
    <ConnectButton
      connectButton={{
        label: "Connect Wallet",
        className: "icon",
      }}
      autoConnect={true}
      client={client}
      wallets={wallets}
    />
  );
}
