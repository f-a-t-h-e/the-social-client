import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "store";
import { IComment } from "utils/types";

// Define a type for the slice state
interface ICommentsState {
  comments: { [key: string]: IComment };
}

// Define the initial state using that type
const initialState: ICommentsState = {
  comments: {},
};

export const commentsSlice = createSlice({
  name: "comments",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
});

// export const {} = commentsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectComments = (state: RootState) => state.comments;

export default commentsSlice.reducer;
