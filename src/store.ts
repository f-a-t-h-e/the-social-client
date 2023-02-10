import { configureStore } from "@reduxjs/toolkit";
import appearanceReducer from "./features/appearance/appearance.Slice";
import postsReducer from "./features/posts/posts.Slice";
import usersReducer from "./features/users/users.Slice";
import commentsReducer from "./features/comments/comments.Slice";
import authReducer from "./features/auth/auth.Slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    appearance: appearanceReducer,
    posts: postsReducer,
    comments: commentsReducer,
    users: usersReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
