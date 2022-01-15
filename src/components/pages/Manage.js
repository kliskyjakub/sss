import SubscriptionItem from "../subscription/SubscriptionItem";
import styles from "./Manage.module.css";

const Manage = () => {
  return (
    <div className={styles.wrapper}>
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

export default Manage;
