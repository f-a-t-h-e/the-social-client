import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "store";

interface IUser {
  firstName: string;
  lastName: string;
  photo: string;
  friends?: [];
  location?: string;
  occupation?: string;
  viewedProfile?: number;
  impressions?: number;
  status?: "online" | "offline" | "busy" | "reading" | string;
}

// Define a type for the slice state
interface IUsersState {
  users: Map<string, IUser>;
}

// Define the initial state using that type
const initialState: IUsersState = {
  users: new Map(),
};

export const usersSlice = createSlice({
  name: "users",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
});

export const {} = usersSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectUsers = (state: RootState) => state.users;

export default usersSlice.reducer;
