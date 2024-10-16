import React, { FC, useMemo } from "react";
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton
} from "@solana/wallet-adapter-react-ui"
import "@solana/wallet-adapter-react-ui/styles.css"

import './App.css'
import { clusterApiUrl } from "@solana/web3.js";
import { RequestAirdrop } from "./RequestAirdrop";
import { ShowBalance } from "./ShowBalance";
import { SendTokens } from "./SendTokens";
import { SignMessage } from "./SignMessage";



function App() {
  const network = WalletAdapterNetwork.Devnet;
  const endpoint = useMemo(() => clusterApiUrl(network), [network])


  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <div style={{display: "flex"}}>
            <WalletMultiButton />
            <WalletDisconnectButton />
    
          </div>
          {/* <RequestAirdrop />
          <ShowBalance /> */}
          <SendTokens />
          {/* <SignMessage /> */}
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}

export default App
