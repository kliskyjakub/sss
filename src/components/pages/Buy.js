import { Outlet } from "react-router-dom";
import styles from "./Buy.module.css";
const Buy = () => {
  return (
    <div className={styles.wrapper}>
      <Outlet />
    </div>
  );
};

export default Buy;
