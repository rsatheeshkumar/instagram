import axios from "axios";
import {
  FETCH_USER_POSTS,
  FETCH_USER_POSTS_ERROR,
  ADD_USER_POSTS,
} from "./types";

export const fetchUserPosts = (posts) => ({
  type: FETCH_USER_POSTS,
  payload: posts,
});
export const fetchPostsError = (errMsg) => ({
  type: FETCH_USER_POSTS_ERROR,
  payload: errMsg,
});
export const addUserPosts = (addpost) => ({
  type: ADD_USER_POSTS,
  payload: addpost,
});

export const fetchPosts = () => {
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

export const addPost = () => {
  return (dispatch) => {
    axios
      .post(
        "https://api.airtable.com/v0/appub3y7rG18vRxIm/posts",
        {
          records: [
            {
              fields: {
                imageurl: [
                  {
                    url:
                      "https://i.pinimg.com/originals/7a/3f/3c/7a3f3c785dfc9966b1be880d6de0d9d3.jpg",
                  },
                ],
              },
            },
          ],
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer keyvWZ3up4HNQODin",
          },
        }
      )
      .then((response) => {
        const addpost = response.data.records[0];
        dispatch(addUserPosts(addpost));
      })
      .catch((error) => {
        const errMsg = error.message;
        dispatch(fetchPostsError(errMsg));
      });
  };
};
