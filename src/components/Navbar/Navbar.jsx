import styles from "./Navbar.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineMenu } from "react-icons/md";
import { setSidebar } from "../../redux/store/theme";
import { IoIosNotifications } from "react-icons/io";
import { GrMail } from "react-icons/gr";
import UserContext from "../../Context/Usercontext";
import { useContext } from "react";

const Navbar = () => {
  const sidebar = useSelector((state) => state.theme.sidebar);
  const dispatch = useDispatch();
  const ctx = useContext(UserContext);
  let User = ctx.User;

  return (
    <div className={styles.container}>
      <div
        className={styles.Nav_container}
        onClick={() => {
          dispatch(setSidebar(!sidebar));
        }} >
      
        <MdOutlineMenu />
      </div>

      <div className={styles.welcome_text}>
        <h1>Welcome {User.givenName}</h1>
      </div>

      <div className={styles.left_icons}>
        <div className={`${styles.icon_container} ${styles.notifications}`}>
          <IoIosNotifications />
        </div>

        <div className={`${styles.icon_container} ${styles.messages} `}>
          <GrMail />
        </div>
      </div>

      <div className={styles.profile_container}>
        <div className={styles.img_container}>
          <img src={User.imageUrl} alt="" referrerPolicy="no-referrer" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
