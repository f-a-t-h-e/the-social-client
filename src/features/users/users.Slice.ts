import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "store";
import { IUser } from "utils/types";

// Define a type for the slice state
interface IUsersState {
  users: { [key: string]: IUser };
}

// Define the initial state using that type
const initialState: IUsersState = {
  users: {},
};

export const usersSlice = createSlice({
  name: "users",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
});

// export const {} = usersSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectUsers = (state: RootState) => state.users;

export default usersSlice.reducer;
