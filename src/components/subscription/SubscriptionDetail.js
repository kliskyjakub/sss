import yume from "./yume.png";
import styles from "./SubscriptionDetail.module.css";
import Button from "../button/Button";

const SubscriptionDetail = () => {
  const random = Boolean(Math.round(Math.random()));

  return (
    <div className={styles["detail_wrapper"]}>
      <img src={yume} width={200} height={200} />
      <div className={styles["detail_right"]}>
        <h2 className={styles["detail_title"]}>Spotify Family Plan</h2>
        <div className={styles["detail_info"]}>
          <p>Mint date:</p>
          <p>xx/xx/xxx</p>
          <p>Flow rate:</p>
          <p>
            <p>xxx.xx DAIx/second</p>
            <p>xxx.xx DAIx/hour</p>
            <p>xxx.xx DAIx/day</p>
            <p>xxx.xx DAIx/month</p>
          </p>
        </div>
        <p>Minimum Amount: </p>
        <p>TokenID: </p>
        {random ? (
          <Button filled={random}>Buy Subscription</Button>
        ) : (
          <Button filled={!random}>Bought</Button>
        )}
      </div>
    </div>
  );
};

export default SubscriptionDetail;
