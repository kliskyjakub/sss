import styles from "./Check.module.css";
import React, { useContext, useEffect, useState } from "react";
import { WalletContext } from "../../store/WalletContext";
import { ethers } from "ethers";
import SubscriptionService from "./SubscriptionService.json";

const Check = () => {
  const [isChecked, setIsChecked] = useState(false);
  const { currentAccount, setCurrentAccount } = useContext(WalletContext);

  const checkSubscription = async () => {
    const { ethereum } = window;
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const connectedContract = new ethers.Contract(
      "0xC12D8D0324Ec2D72aD4edA864cDe735a5d7D9e30",
      SubscriptionService.abi,
      signer
    );

    let nftTxn = await connectedContract.validateSubscription(currentAccount);
    setIsChecked(nftTxn);
  };

  useEffect(() => {
    checkSubscription();
  }, []);

  return (
    <div className={styles["main_left_wrapper"]}>
      <div
        style={{
          display: "flex",
          flexFlow: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "2rem",
        }}
      >
        {isChecked ? (
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/dE1P4zDhhqw"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <p>Please buy a subscription to view exclusive content!</p>
        )}
      </div>
    </div>
  );
};

export default Check;
