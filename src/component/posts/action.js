import axios from "axios";
import { FETCH_USER_POSTS, FETCH_USER_POSTS_ERROR } from "./types";

export const fetchUserPosts = (posts) => ({
  type: FETCH_USER_POSTS,
  payload: posts,
});
export const fetchPostsError = (errMsg) => ({
  type: FETCH_USER_POSTS_ERROR,
  payload: errMsg,
});

const fetchPosts = () => {
  return (dispatch) => {
    axios
      .get(
        "https://api.airtable.com/v0/appub3y7rG18vRxIm/posts?fields%5B%5D=id&fields%5B%5D=imageurl",
        {
          headers: {
            Authorization: "Bearer keyvWZ3up4HNQODin",
          },
        }
      )
      .then((response) => {
        const posts = response.data.records;
        dispatch(fetchUserPosts(posts));
      })
      .catch((error) => {
        const errMsg = error.message;
        dispatch(fetchPostsError(errMsg));
      });
  };
};
export default fetchPosts;
