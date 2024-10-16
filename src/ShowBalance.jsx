import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { useEffect, useState } from "react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

export function ShowBalance() {
    const { connection } = useConnection();
    const wallet = useWallet();
    const [bal, setBal]  = useState()
    async function getUserBalance() {
        const balance = await connection.getBalance(wallet.publicKey);
        setBal(balance / LAMPORTS_PER_SOL);

    }
    useEffect(() => {
        getUserBalance()
    }, [])

    return <div>
        Balance : {bal} SOL
    </div>
}