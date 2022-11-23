const initialState = {
  loggedIn: false,
};

// Action Types
const LOG_IN = "LOG_IN";

// Reducer
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return {
        loggedIn: true,
      };

    default:
      return state;
  }
};

export default authReducer;

// Action Creator

export const logIn = () => {
  return {
    type: LOG_IN,
  };
};
