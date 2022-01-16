import { useContext } from "react";
import { NavLink, Routes, Route, Navigate } from "react-router-dom";
import styles from "./Navigation.module.css";
import { WalletContext } from "../../store/WalletContext";
import SubscriptionDetail from "../subscription/SubscriptionDetail";
import Check from "../pages/Check";

const Navigation = () => {
  const { currentAccount, setCurrentAccount } = useContext(WalletContext);
  console.log(currentAccount);
  return (
    <div className={styles["navigation_wrapper"]}>
      <div className={styles["nav_account_wrapper"]}>
        <div className={styles["nav_account_actions"]}>
          <div className={styles["account_text"]}>{currentAccount}</div>
          <button className={styles["account_button"]} onClick={() => setCurrentAccount("")}>
            Disconnect wallet
          </button>
        </div>
      </div>
      <h1 className={styles["nav_title"]}>SUPERFLUID SUBSCRIPTION SERVICE</h1>
      <nav className={styles["nav_wrapper"]}>
          <li>
            <NavLink className={({ isActive }) => isActive && styles["nav_selected"]} to="/check">
              Check
            </NavLink>
          </li>
          <li>
              <NavLink
                  className={({ isActive }) => isActive && styles["nav_selected"]}
                  to="/buy"
              >
                  Buy
              </NavLink>
          </li>
          <ul className={styles["nav_list"]}>
        </ul>
      </nav>
      <div className={styles["section_seperator"]}></div>
      <Routes>
        <Route element={<Check />} path="/check" />
        <Route element={<SubscriptionDetail />} path="/buy"/>
        <Route path="*" element={<Navigate replace to="/buy" />}></Route>
      </Routes>
    </div>
  );
};

export default Navigation;
