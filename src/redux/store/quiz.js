// Initial State
const initialState = {
  loading: false,
  quizzes: [],
};

// Action Types

const FETCH_QUIZ_SUCCESS = "FETCH_QUIZ_SUCCESS";
const FETCH_QUIZ_FAILURE = "FETCH_QUIZ_FAILURE";

// Reducer
const quizReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QUIZ_SUCCESS:
      return {
        loading: false,
        quiz: action.payload,
      };
    case FETCH_QUIZ_FAILURE:
      return {
        loading: false,
        quiz: [],
      };
    default:
      return state;
  }
};

export default quizReducer;

export const fetchQuizSuccess = (quiz) => {
  return {
    type: FETCH_QUIZ_SUCCESS,
    payload: quiz,
  };
};

export const fetchQuizFailure = (error) => {
  return {
    type: FETCH_QUIZ_FAILURE,
    payload: error,
  };
};
