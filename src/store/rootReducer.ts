import { combineReducers } from "@reduxjs/toolkit";

import appearanceReducer from "features/appearance/appearance.Slice";
import postsReducer from "features/posts/posts.Slice";
import usersReducer from "features/users/users.Slice";
import commentsReducer from "features/comments/comments.Slice";
import authReducer from "features/auth/auth.Slice";

const rootReducer = combineReducers({
  auth: authReducer,
  appearance: appearanceReducer,
  posts: postsReducer,
  comments: commentsReducer,
  users: usersReducer,
});

export default rootReducer;
