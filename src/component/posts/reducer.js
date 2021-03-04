import {
  FETCH_USER_POSTS,
  FETCH_USER_POSTS_ERROR,
  ADD_USER_POSTS,
} from "./types";

const INITIAL_STATE = {
  posts: [],
  error: null,
};

const postReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_USER_POSTS:
      return {
        ...state,
        posts: action.payload,
        error: "",
      };
    case FETCH_USER_POSTS_ERROR:
      return {
        error: action.payload,
      };
    case ADD_USER_POSTS:
      // return [...state, action.payload];
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };

    default:
      return state;
  }
};
export default postReducer;
