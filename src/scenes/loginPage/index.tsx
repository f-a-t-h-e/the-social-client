import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";

type Props = {};

const LoginPage = (props: Props) => {
  const theme = useTheme();
  const isNonMobileScreen = useMediaQuery("(min-width: 1000px)");

  // @ts-ignore
  const neutralLight = theme.palette.neutral.light;
  // @ts-ignore
  const dark = theme.palette.neutral.dark;
  const background = theme.palette.background.default;
  const primaryLight = theme.palette.primary.light;
  // @ts-ignore
  const alt = theme.palette.background.alt;

  return (
    <Box>
      <Box width="100%" bgcolor={alt} p="1rem 6%" textAlign="center">
        <Typography fontWeight="bold" fontSize="32px" color="primary">
          The-Social
        </Typography>
      </Box>
    </Box>
  );
};

export default LoginPage;
