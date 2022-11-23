
import axios from "axios";
import { fetchAnnouncementsSuccess } from "../redux/store/announcements";
import { fetchAnnouncementsFailure } from "../redux/store/announcements";

const AnnouncementsService = () => {
  return (dispatch) => {
    axios
      .get(
        "https://633c3a8474afaef16404d225.mockapi.io/cinema/announcments/?p=1&l=6"
      )
      .then((response) => {
        const announcements = response.data;
        dispatch(fetchAnnouncementsSuccess(announcements));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchAnnouncementsFailure(errorMsg));
      });
  };
};

export default AnnouncementsService;
