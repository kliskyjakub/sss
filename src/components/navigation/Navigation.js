import { useContext } from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import Manage from "../pages/Manage";
import styles from "./Navigation.module.css";
import { WalletContext } from "../../store/WalletContext";

const Navigation = () => {
  const { currentAccount, setCurrentAccount } = useContext(WalletContext);
  console.log(currentAccount);
  return (
    <div className={styles["navigation_wrapper"]}>
      <div className={styles["nav_account_wrapper"]}>
        <div className={styles["nav_account_actions"]}>
          <div className={styles["account_text"]}>{currentAccount}</div>
          <button className={styles["account_button"]} onClick={() => setCurrentAccount("")}>
            Log Out
          </button>
        </div>
      </div>
      <h1 className={styles["nav_title"]}>SUPERFLUID SUBSCRIPTION SERVICE</h1>
      <nav className={styles["nav_wrapper"]}>
        <ul className={styles["nav_list"]}>
          <li>
            <NavLink className={({ isActive }) => isActive && styles["nav_selected"]} to="/create">
              Create
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => isActive && styles["nav_selected"]} to="/manage">
              Manage
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => isActive && styles["nav_selected"]} to="/buy">
              Buy
            </NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route element={<div>Hi</div>} path="/create" />
        <Route element={<Manage />} path="/manage" />
        <Route element={<div>Hi</div>} path="/buy" />
      </Routes>
    </div>
  );
};

export default Navigation;
