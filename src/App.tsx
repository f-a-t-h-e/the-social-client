import React, { useMemo } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "theme";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "scenes/homePage";
import LoginPage from "scenes/loginPage";
import ProfilePage from "scenes/profilePage";
import { selectAppearance } from "./features/appearance/appearance.Slice";
import { useAppSelector } from "./hooks/useStore";

function App() {
  const { themeMode } = useAppSelector((state) => selectAppearance(state));
  const theme = useMemo(
    () => createTheme(themeSettings(themeMode)),
    [themeMode]
  );
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          {/* NOTE : This is to reset the css */}
          <CssBaseline />
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/profile/:userId" element={<ProfilePage />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
