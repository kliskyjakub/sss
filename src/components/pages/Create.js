import styles from "./Create.module.css";
import { useState } from "react";
import Button from "../button/Button";

const Create = () => {
  const [flowRate, setFlowRate] = useState(null);
  const [description, setDescription] = useState("");

  const onFlowChangeHandler = (event) => {
    setFlowRate(event.target.value);
  };

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
