import { combineReducers } from "redux";
import userReducer from "./userReducer";
import usersReducer from "./usersReducer";
import postReducer from "./postReducer";
import allPostsReducer from "./allPostsReducer";
import trendingReducer from "./trendingReducer";

export default combineReducers({
    userReducer,
    usersReducer,
    postReducer,
    allPostsReducer,
    trendingReducer,
});
