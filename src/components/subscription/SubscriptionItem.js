import yume from "./yume.png";
import styles from "./SubscriptionItem.module.css";
import { useNavigate } from "react-router-dom";

const SubscriptionItem = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        navigate(`/manage/detail`);
      }}
      className={styles["item_wrapper"]}
    >
      <img src={yume} width={200} height={200} />
      <h3 className={styles["item_title"]}>Jakob's Art</h3>
    </button>
  );
};

export default SubscriptionItem;
