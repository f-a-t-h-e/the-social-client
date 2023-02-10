import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "store";
import { IThemeMode } from "../../utils/types";

// Define a type for the slice state
export interface IAppearanceState {
  themeMode: IThemeMode;
}

// Define the initial state using that type
const initialState: IAppearanceState = {
  themeMode: "dark",
};

export const appearanceSlice = createSlice({
  name: "appearance",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    swap: (state) => {
      state.themeMode = state.themeMode === "dark" ? "light" : "dark";
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    selectTheme: (
      state,
      action: PayloadAction<IAppearanceState["themeMode"]>
    ) => {
      state.themeMode = action.payload;
    },
  },
});

export const { selectTheme, swap } = appearanceSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectAppearance = (state: RootState) => state.appearance;

export default appearanceSlice.reducer;
