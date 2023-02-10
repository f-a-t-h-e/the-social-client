import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "store";
import { IComment } from "../comments/comments.Slice";

interface IPost {
  title: string;
  content: string;
  author: string;
  images: string[];
  reacts: Map<string, string>;
  comments?: IComment[];
  privacy: string;
  group: string;
  userReact?: "like" | "love" | "laugh" | "support";
}

// Define a type for the slice state
interface IPostsState {
  posts: Map<string, IPost>;
}

// Define the initial state using that type
const initialState: IPostsState = {
  posts: new Map(),
};

export const postsSlice = createSlice({
  name: "posts",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
});

export const {} = postsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectPosts = (state: RootState) => state.posts;

export default postsSlice.reducer;
