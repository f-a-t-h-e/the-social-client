import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "store";
import { IPost } from "utils/types";

// Define a type for the slice state
interface IPostsState {
  posts: { [key: string]: IPost };
}

// Define the initial state using that type
const initialState: IPostsState = {
  posts: {},
};

export const postsSlice = createSlice({
  name: "posts",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setPosts: (
      state,
      action: PayloadAction<{ posts: Array<IPost & { _id: string }> }>
    ) => {
      action.payload.posts.forEach((post) => {
        state.posts[post._id] = post;
      });
    },

    updatePost: (
      state,
      action: PayloadAction<{ post: IPost; _id: string }>
    ) => {
      state.posts[action.payload._id] = action.payload.post;
    },
  },
});

export const { setPosts, updatePost } = postsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectPosts = (state: RootState) => state.posts;

export default postsSlice.reducer;
