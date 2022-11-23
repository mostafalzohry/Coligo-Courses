import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Sidebar.module.scss";
import { IoMegaphone } from "react-icons/io5";
import {
  FaTimes,
  FaHome,
  FaBook,
  FaGraduationCap,
  FaChartLine,
} from "react-icons/fa";
import { GoCalendar } from "react-icons/go";
import { setSidebar } from "../../redux/store/theme";
import NavUrl from "./Navurl";

function Sidebar() {
  const sidebar = useSelector((state) => state.theme.sidebar);
  const dispatch = useDispatch();

  return (
    <div
      className={`${styles.navbar_container} ${
        sidebar ? styles.navbar_mobile_active : ""
      }`}
    >
      <nav className={sidebar ? "" : styles.nav_small}>
        <div className={styles.logo}>
          <span className={styles.logo_text}>Coligo</span>

          <FaTimes
            className={styles.mobile_cancel_logo}
            onClick={() => dispatch(setSidebar(!sidebar))}
          />
        </div>

        <ul className={styles.menu_container}>
          <NavUrl url="/" icon={<FaHome />} word="Dashboard" />
          <NavUrl url="/schedule" icon={<GoCalendar />} word="Schedule" />
          <NavUrl url="/courses" icon={<FaBook />} word="Courses" />
          <NavUrl
            url="/gradebook"
            icon={<FaGraduationCap />}
            word="Gradebook"
          />
          <NavUrl
            url="/performance"
            icon={<FaChartLine />}
            word="Performance"
          />
          <NavUrl
            url="/announcements"
            icon={<IoMegaphone />}
            word="Announcements"
          />
        </ul>

        <div
          className={sidebar ? styles.mobile_nav_background_active : ""}
          onClick={() => {
            dispatch(setSidebar(!sidebar));
          }}
        ></div>
      </nav>
    </div>
  );
}

export default Sidebar;
