import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { useState } from "react";
import { Connection, LAMPORTS_PER_SOL } from "@solana/web3.js";

export function RequestAirdrop() {
    const wallet = useWallet();
    const { connection } = useConnection();
    const [sol, setSol] = useState();

    function reqAirdrop() {
        // alert("hi there") 
        const publickey = wallet.publicKey;
        connection.requestAirdrop(publickey, sol * LAMPORTS_PER_SOL);

    }
    return <div> 
        <input type="text" placeholder="Amount .." onChange={(e) => setSol(e.target.value)} /><br />
        <button onClick={reqAirdrop}>Airdrop</button><br />
        {/* {wallet.publicKey?.toBase58()} */} 
        {/* {connection.getBalance(wallet.publicKey?.toBase58())} */}
    </div>
}