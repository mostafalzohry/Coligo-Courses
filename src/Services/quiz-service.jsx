import axios from "axios";
import { fetchQuizSuccess } from "../redux/store/quiz";
import { fetchQuizFailure } from "../redux/store/quiz";

const QuizService = () => {
  return (dispatch) => {
    axios
      .get("https://63594a8438725a1746acdddb.mockapi.io/timeforcourses?p=1&l=2")
      .then((response) => {
        const quiz = response.data;
        dispatch(fetchQuizSuccess(quiz));
        console.log(quiz);
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchQuizFailure(errorMsg));
      });
  };
};

export default QuizService;
