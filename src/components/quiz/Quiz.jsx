import React, { useEffect } from "react";
import styles from "../../pages/Dashboard/Dashboard.module.scss";
import QuizService from "../../Services/quiz-service";
import { useSelector, useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
const Quiz = () => {
  const dispatch = useDispatch();
  const quizzesData = useSelector((state) => state.quizData);

  useEffect(() => {
    dispatch(QuizService());
  }, [dispatch]);

  return (
    <div className={styles.quiz}>
      <div className={styles.header}>
        <div className={styles.text}>
          <h2>what's due</h2>
          <p>sometimes later become never , so do it now </p>
        </div>
        <div className={styles.link}>
          <NavLink to="/quiz">All</NavLink>
        </div>
      </div>
      <div className={styles.data}>
        {quizzesData.loading ? (
          <h2>Loading...</h2>
        ) : quizzesData.error ? (
          <h2>{quizzesData.error}</h2>
        ) : (
          quizzesData &&
          quizzesData.quiz &&
          quizzesData.quiz.map((item, idx) => (
            <div key={idx} className={styles.quiz_container}>
              <div className={styles.quiz_title}>
                <p>{item.name}</p>
              </div>
              <div className={styles.quiz_details}>
                <li>
                  <span className={styles.quiz_details_head}>Course:</span>{" "}
                  <span>{item.course}</span>
                </li>
                <li>
                  <span className={styles.quiz_details_head}>Topics:</span>{" "}
                  <span>{item.topic}</span>
                </li>
                <li>
                  <span className={styles.quiz_details_head}>Due to:</span>{" "}
                  <span>{item.date}</span>
                </li>
                <div className={styles.quiz_cta}>
                  <Link className={styles.quiz_cta_btn} to={"/"}>
                    Start Quiz
                  </Link>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
export default Quiz;
