import Button from "../button/Button";
import { ethers } from "ethers";
import SubscriptionService from "../pages/SubscriptionService.json";
import { Framework } from "@superfluid-finance/sdk-core";
import React, { useState, useEffect, useContext } from "react";
import { DotLoader } from "react-spinners";
import { WalletContext } from "../../store/WalletContext";

const createStream = async () => {
  const { ethereum } = window;
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const connectedContract = new ethers.Contract(
    "0xE3eb94a3604eDDd3FD9b24fF325D091EC3221892",
    SubscriptionService.abi,
    signer
  );

  // superfluid thing
  const sf = await Framework.create({
    networkName: "ropsten",
    provider: provider,
  });

  const ETHx = "0x6fC99F5591b51583ba15A8C2572408257A1D2797";

  try {
    const createFlowOperation = sf.cfaV1.createFlow({
      sender: signer._address,
      receiver: "0xE3eb94a3604eDDd3FD9b24fF325D091EC3221892",
      flowRate: 1000000,
      superToken: ETHx,
      // userData?: string
    });

    console.log("Creating your stream...");

    const result = await createFlowOperation.exec(signer);
    console.log(result);
  } catch (error) {
    console.log(
      "Hmmm, your transaction threw an error. Make sure that this stream does not already exist, and that you've entered a valid Ethereum address!"
    );
    console.error(error);
  }
};

const buySubscription = async () => {
  console.log("buying sub");
  const { ethereum } = window;
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const connectedContract = new ethers.Contract(
    "0xE3eb94a3604eDDd3FD9b24fF325D091EC3221892",
    SubscriptionService.abi,
    signer
  );

  let nftTxn = await connectedContract.buySubscription();
};

const SubscriptionDetail = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [hasError, setHasError] = useState("");
  const [hasBought, setHasBought] = useState(false);
  const [hasSubscription, setHasSubscription] = useState(false);
  const { currentAccount, setCurrentAccount } = useContext(WalletContext);

  const checkSubscription = async () => {
    const { ethereum } = window;
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const connectedContract = new ethers.Contract(
      "0xE3eb94a3604eDDd3FD9b24fF325D091EC3221892",
      SubscriptionService.abi,
      signer
    );

    let nftTxn = await connectedContract.validateSubscription(currentAccount);
    setHasSubscription(nftTxn);
  };

  useEffect(() => {
    checkSubscription();
  }, []);

  if (hasSubscription) {
    return (
      <div
        style={{
          display: "flex",
          flexFlow: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "2rem",
        }}
      >
        <Button>Already owned subscription</Button>
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        flexFlow: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "2rem",
      }}
    >
      <div style={{ display: "flex", flexFlow: "column", alignItems: "center" }}>
        <Button
          onClick={async () => {
            try {
              if (isLoading) {
                await buySubscription();
                setHasError("");
                setHasBought(true);
                return;
              }
            } catch (error) {
              setHasError(error.message);
              console.error(error);
            }
            try {
              setShowLoader(true);
              await createStream();
              setIsLoading(true);
              setHasError("");
            } catch (error) {
              setShowLoader(false);
              setIsLoading(false);
              setHasError(error.message);
              console.error(error);
            }
          }}
          filled={true}
        >
          {isLoading ? (
            hasBought ? (
              "Bought Successfully!"
            ) : (
              "Confirm Subscription"
            )
          ) : showLoader ? (
            <DotLoader color="white" size={20} />
          ) : (
            "Buy Subscription"
          )}
        </Button>
        {/* {hasError && <p>{hasError}</p>} */}
        {!hasError && isLoading && !hasBought && (
          <p>After transaction has been processed, press confirm subscription.</p>
        )}
      </div>
    </div>
  );
};

export default SubscriptionDetail;
