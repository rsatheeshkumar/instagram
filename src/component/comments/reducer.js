import { GET_COMMENTS } from "./types";
const INITIAL_STATE = {
  comments: [],
};

const commentReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_COMMENTS:
      return {
        ...state,
        comments: action.payload,
      };
    default:
      return state;
  }
};
export default commentReducer;
