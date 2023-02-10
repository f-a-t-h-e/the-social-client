import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "store";

// Define a type for the slice state
interface AppearanceState {
  mode: "light" | "dark";
}

// Define the initial state using that type
const initialState: AppearanceState = {
  mode: "dark",
};

export const appearanceSlice = createSlice({
  name: "appearance",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    swap: (state) => {
      state.mode = state.mode === "dark" ? "light" : "dark";
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    selectTheme: (state, action: PayloadAction<AppearanceState["mode"]>) => {
      state.mode = action.payload;
    },
  },
});

export const { selectTheme, swap } = appearanceSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectAppearance = (state: RootState) => state.appearance;

export default appearanceSlice.reducer;
