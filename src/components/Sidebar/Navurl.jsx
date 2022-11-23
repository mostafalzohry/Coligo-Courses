import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSidebar } from "../../redux/store/theme";
import styles from "./Sidebar.module.scss";
import { NavLink } from "react-router-dom";

const NavUrl = ({ url, icon, word }) => {
  const dispatch = useDispatch();
  const sidebar = useSelector((state) => state.theme.sidebar);

  const checkWindowSize = () => {
    if (window.innerWidth < 1024) dispatch(setSidebar(!sidebar));
  };

  return (
    <li className={styles.li_nav_link}>
      <NavLink
        to={`${url}`}
        onClick={() => checkWindowSize()}
        className={({ isActive }) => (isActive ? styles.active : "")}
      >
        {icon}
        <span className={styles.description}>{word}</span>
      </NavLink>
    </li>
  );
};

export default NavUrl;
