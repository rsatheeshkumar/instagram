import { combineReducers } from "redux";
import userReducer from "../component/user/reducer";
import postReducer from "../component/posts/reducer";

const rootReducer = combineReducers({
  users: userReducer,
  posts: postReducer,
});

export default rootReducer;
