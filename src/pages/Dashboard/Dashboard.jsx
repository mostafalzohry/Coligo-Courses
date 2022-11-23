import React from "react";
import styles from "./Dashboard.module.scss";
import Quiz from "../../components/quiz/Quiz";
import Announcements from "../../components/Announcments/Announcments";
import Welcome from "../../components/Welcome/Welcome";

function Dashboard() {
  return (
    <main className={styles.container}>
      <div className={styles.welcome}>
        <Welcome />
      </div>

      <div className={styles.content_container}>
        <Announcements />

        <Quiz />
      </div>
    </main>
  );
}

export default Dashboard;
