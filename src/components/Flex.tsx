import styled from "styled-components";
import { Box } from "@mui/material";

// NOTE : I'm using styled-components instead of @mui/system
// because I have no internet connection at the moment
export const FlexBetween = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});
