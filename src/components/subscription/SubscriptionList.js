import SubscriptionItem from "../subscription/SubscriptionItem";
import styles from "./SubscriptionList.module.css";

const SubscriptionList = () => {
  return (
    <div className={styles["list_wrapper"]}>
      <h2 className={styles.title}>My Subscriptions</h2>
      <div className={styles["list"]}>
        <SubscriptionItem />
        <SubscriptionItem />
        <SubscriptionItem />
        <SubscriptionItem />
      </div>
    </div>
  );
};

export default SubscriptionList;
