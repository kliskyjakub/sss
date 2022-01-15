import styles from "./Create.module.css";
import { useState, useContext } from "react";
import Button from "../button/Button";

const Create = () => {
  const [flowRate, setFlowRate] = useState(null);
  const [description, setDescription] = useState("");
  // const { currentAccount } = useContext(WalletContext);

  const onFlowChangeHandler = (event) => {
    setFlowRate(event.target.value);
  };

  // //where the Superfluid logic takes place
  // async function createFlow(recipient, flowRate) {
  //   const sf = await Framework.create({
  //     networkName: "kovan",
  //     provider: customHttpProvider,
  //   });

  //   const provider = new ethers.providers.Web3Provider(ethereum);
  //   const signer = provider.getSigner();

  //   const DAIx = "0xe3cb950cb164a31c66e32c320a800d477019dcff";

  //   try {
  //     const createFlowOperation = sf.cfaV1.createFlow({
  //       sender: currentAccount,
  //       receiver: recipient,
  //       flowRate: flowRate,
  //       superToken: DAIx,
  //       // userData?: string
  //     });

  //     console.log("Creating your stream...");

  //     const result = await createFlowOperation.exec(signer);
  //     console.log(result);

  //     console.log(
  //       `Congrats - you've just created a money stream!
  //   View Your Stream At: https://app.superfluid.finance/dashboard/${recipient}
  //   Network: Kovan
  //   Super Token: DAIx
  //   Sender: 0xDCB45e4f6762C3D7C61a00e96Fb94ADb7Cf27721
  //   Receiver: ${recipient},
  //   FlowRate: ${flowRate}
  //   `
  //     );
  //   } catch (error) {
  //     console.log(
  //       "Hmmm, your transaction threw an error. Make sure that this stream does not already exist, and that you've entered a valid Ethereum address!"
  //     );
  //     console.error(error);
  //   }
  // }

  return (
    <div className={styles["create_wrapper"]}>
      <h2>Create a Subscription</h2>
      <div className={styles["create_form"]}>
        <p>Flow rate:</p>
        <div className={styles["create_numbers"]}>
          <div className={styles["create_input_wrapper"]}>
            <input
              placeholder="xxx.xx"
              type="number"
              onChange={onFlowChangeHandler}
              step="0.01"
              value={flowRate}
              className={styles["create_input"]}
            />
          </div>
          <p>DAIx/second</p>
          <p>{parseFloat(flowRate * 60 * 60).toFixed(2)}</p>
          <p>DAIx/hour</p>
          <p>{parseFloat(flowRate * 60 * 60 * 24).toFixed(2)}</p>
          <p>DAIx/day</p>
          <p>{parseFloat(flowRate * 60 * 60 * 24 * 30).toFixed(2)}</p>
          <p>DAIx/month</p>
        </div>
        <p>Description:</p>
        <textarea
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        ></textarea>
        <p>No. of subscriptions:</p>
        <p>42535</p>
      </div>
      <Button>Create Subscription</Button>
    </div>
  );
};

export default Create;
