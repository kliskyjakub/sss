import Button from "../button/Button";
import {ethers} from "ethers";
import SubscriptionService from "../pages/SubscriptionService.json";
import {Framework} from "@superfluid-finance/sdk-core";
import React, { useState } from "react";


const createStream = async () => {
    const {ethereum} = window;
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const connectedContract = new ethers.Contract("0xC12D8D0324Ec2D72aD4edA864cDe735a5d7D9e30", SubscriptionService.abi, signer);

    // superfluid thing
    const sf = await Framework.create({
        networkName: "ropsten",
        provider: provider
    });

    const ETHx = "0x6fC99F5591b51583ba15A8C2572408257A1D2797";

    try {
        const createFlowOperation = sf.cfaV1.createFlow({
            sender: signer._address,
            receiver: "0xC12D8D0324Ec2D72aD4edA864cDe735a5d7D9e30",
            flowRate: 1000000,
            superToken: ETHx
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
}

const buySubscription = async () => {
    console.log("buying sub")
    const {ethereum} = window;
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const connectedContract = new ethers.Contract("0xC12D8D0324Ec2D72aD4edA864cDe735a5d7D9e30", SubscriptionService.abi, signer);

    let nftTxn = await connectedContract.buySubscription();
}

const SubscriptionDetail = () => {
    const random = Boolean(Math.round(Math.random()));
    const [isLoading, setIsLoading] = useState(false)

    return (
        <div style={{display: "flex", flexFlow: 'row', justifyContent: 'center', alignItems: "center"}}>
            <Button onClick={async () => {
                setIsLoading(true)
                await createStream()
                await buySubscription()
            }} filled={true}>{isLoading? "Confirm Subscription" : "Buy Subscription" }</Button>
        </div>
    );
};

export default SubscriptionDetail;
