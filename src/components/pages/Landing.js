import Button from "../button/Button";
import styles from "./Landing.module.css";
import React, { useContext, useEffect, useState } from "react";
import { DotLoader } from "react-spinners";
import { WalletContext } from "../../store/WalletContext";

const Landing = () => {
  const [isConnecting, setIsConnecting] = useState(false);
  const { currentAccount, setCurrentAccount } = useContext(WalletContext);

  const connectWallet = async () => {
    setIsConnecting(true);
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }

      const accounts = await ethereum.request({ method: "eth_requestAccounts" });

      console.log("Connected", accounts[0]);
      setCurrentAccount(accounts[0]);
      setIsConnecting(false);
    } catch (error) {
      setIsConnecting(false);
      console.log(error);
    }
  };

  return (
    <div className={styles["main_left_wrapper"]}>
      <div className={styles.main_title}>
        Superfluid
        <br />
        Subscription
        <br />
        Service
      </div>
      <div className={styles["button_wrapper"]}>
        {!currentAccount && (
          <Button onClick={connectWallet}>
            {isConnecting ? <DotLoader color="white" size={20} /> : "Connect Wallet"}
          </Button>
        )}
        {currentAccount && <Button onClick={null}>Wallet Connected</Button>}
      </div>
    </div>
  );
};

export default Landing;
