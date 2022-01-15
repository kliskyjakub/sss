import { useContext } from "react";
import { NavLink, Routes, Route, Navigate } from "react-router-dom";
import Manage from "../pages/Manage";
import styles from "./Navigation.module.css";
import { WalletContext } from "../../store/WalletContext";
import SubscriptionDetail from "../subscription/SubscriptionDetail";
import SubscriptionList from "../subscription/SubscriptionList";
import Create from "../pages/Create";

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
        <ul className={styles["nav_list"]}>
          <li>
            <NavLink className={({ isActive }) => isActive && styles["nav_selected"]} to="/create">
              Create
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => isActive && styles["nav_selected"]}
              to="/manage/list"
            >
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
      <div className={styles["section_seperator"]}></div>
      <Routes>
        <Route element={<Create />} path="/create" />
        <Route element={<Manage />} path="/manage">
          <Route path="list" element={<SubscriptionList />} />
          <Route path="detail" element={<SubscriptionDetail />} />
        </Route>
        <Route element={<div>Hi</div>} path="/buy" />
        <Route path="*" element={<Navigate replace to="/manage/list" />}></Route>
      </Routes>
    </div>
  );
};

export default Navigation;
