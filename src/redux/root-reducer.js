import { combineReducers } from "redux";
import userReducer from "../component/user/reducer";
import postReducer from "../component/posts/reducer";
import commentReducer from "../component/comments/reducer";

const rootReducer = combineReducers({
  users: userReducer,
  posts: postReducer,
  comments: commentReducer,
});

export default rootReducer;
