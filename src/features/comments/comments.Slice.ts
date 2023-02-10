import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "store";

export interface IComment {
  post: string;
  author: string;
  images: string[];
  reacts: Map<string, string>;
  content?: string;
  userReact?: "like" | "love" | "laugh" | "support";
}

// Define a type for the slice state
interface ICommentsState {
  comments: Map<string, IComment>;
}

// Define the initial state using that type
const initialState: ICommentsState = {
  comments: new Map(),
};

export const commentsSlice = createSlice({
  name: "comments",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
});

export const {} = commentsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectComments = (state: RootState) => state.comments;

export default commentsSlice.reducer;
