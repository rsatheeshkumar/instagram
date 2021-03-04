import axios from "axios";
import { GET_COMMENTS } from "./types";

export const getComments = (comments) => ({
  type: GET_COMMENTS,
  payload: comments,
});

const fetchComments = () => {
  return (dispatch) => {
    axios
      .get(
        "https://api.airtable.com/v0/appub3y7rG18vRxIm/comment?fields%5B%5D=id&fields%5B%5D=comments",
        {
          headers: {
            Authorization: "Bearer keyvWZ3up4HNQODin",
          },
        }
      )
      .then((response) => {
        // console.log(response.data.records);
        const comments = response.data.records;
        dispatch(getComments(comments));
      });
  };
};

export default fetchComments;
