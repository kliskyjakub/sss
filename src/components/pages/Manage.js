import { Outlet } from "react-router-dom";
import styles from "./Manage.module.css";
const Manage = () => {
  return (
    <div className={styles.wrapper}>
      <Outlet />
    </div>
  );
};

export default Manage;
