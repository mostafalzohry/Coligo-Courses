const initialState = {
  loading: false,
  announcements: [],
  error: "",
};

// Action Types

const FETCH_ANNOUNCEMENTS_SUCCESS = "FETCH_ANNOUNCEMENTS_SUCCESS";
const FETCH_ANNOUNCEMENTS_FAILURE = "FETCH_ANNOUNCEMENTS_FAILURE";

// Reducer
const announcementsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ANNOUNCEMENTS_SUCCESS:
      return {
        loading: false,
        announcements: action.payload,
        error: "",
      };
    case FETCH_ANNOUNCEMENTS_FAILURE:
      return {
        loading: false,
        announcements: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default announcementsReducer;

export const fetchAnnouncementsSuccess = (announcements) => {
  return {
    type: FETCH_ANNOUNCEMENTS_SUCCESS,
    payload: announcements,
  };
};

export const fetchAnnouncementsFailure = (error) => {
  return {
    type: FETCH_ANNOUNCEMENTS_FAILURE,
    payload: error,
  };
};
