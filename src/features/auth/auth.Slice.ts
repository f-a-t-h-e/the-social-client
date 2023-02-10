import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "store";
import type { IUser } from "utils/types";

// Define a type for the slice state
interface IAuthState {
  user: IUser | null;
  token: string | null;
}

// Define the initial state using that type
const initialState: IAuthState = {
  user: null,
  token: null,
};

export const authSlice = createSlice({
  name: "auth",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setLogin: (
      state,
      action: PayloadAction<{ user: IUser; token: string }>
    ) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
    },
    setFriends: (state, action: PayloadAction<{ friends: Array<string> }>) => {
      if (state.user) {
        state.user.friends = action.payload.friends;
      } else {
        console.error("🚀 ~ file: users.Slice.ts:34 ~ state.user is null");
      }
    },
  },
});

export const { setLogin, setLogout } = authSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectAuth = (state: RootState) => state.auth;

export default authSlice.reducer;
