import React, { useEffect } from "react";
import styles from "../../pages/Dashboard/Dashboard.module.scss";
import AnnouncementsService from "../../Services/Announcments-service";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

const Announcements = () => {
  const dispatch = useDispatch();
  const announcementsData = useSelector((state) => state.announceData);

  useEffect(() => {
    dispatch(AnnouncementsService());
  }, [dispatch]);

  return (
    <div className={styles.announcements}>
      <div className={styles.header}>
        <div className={styles.text}>
          <h2>Announcements</h2>
          <p>We educate worriers. Keep updated </p>
        </div>
        <div className={styles.link}>
          <NavLink to="/announcements">All</NavLink>
        </div>
      </div>
      <div className={styles.data}>
        {announcementsData.loading ? (
          <h2>Loading...</h2>
        ) : announcementsData.error ? (
          <h2>{announcementsData.error}</h2>
        ) : (
          announcementsData.announcements.map((item, idx) => (
            <div key={idx} className={styles.instructor_container}>
              <div className={styles.img_container}>
                <img src={item.avatarUrl} alt="" />
              </div>
              <div className={styles.username}>
                <span>{item.name}</span>
              </div>

              <div className={styles.text}>{item.description}</div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
export default Announcements;
