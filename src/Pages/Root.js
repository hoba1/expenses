import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Appbar from "../Components/Appbar";
import Drawerr from "../Components/Drawerr";
import { Box, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { grey } from "@mui/material/colors";

const drawerWidth = 240;

const Root = () => {
  const [mode, setMode] = useState(
    localStorage.getItem("currentMode") === null
      ? "dark"
      : localStorage.getItem("currentMode") === "light"
      ? "light"
      : "dark"
  );
  const darkTheme = createTheme({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            // palette values for light mode
            favBg: {
              listItemBg: grey[300],
            },
          }
        : {
            // palette values for dark mode
            favBg: {
              listItemBg: grey[800],
            },
          }),
    },
  });

  const [noneOrBlock, setnoneOrBlock] = useState("none");
  const [variantDrawer, setvariantDrawer] = useState("permanent");

  const showDrawer = () => {
    setvariantDrawer("temporary");
    setnoneOrBlock("block");
  };

  const closeDrawer = () => {
    setvariantDrawer("permanent");
    setnoneOrBlock("none");
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div>
        <Appbar {...{ drawerWidth, showDrawer }} />
        <Drawerr
          {...{ drawerWidth, setMode, noneOrBlock, variantDrawer, closeDrawer }}
        />

        <Box
          sx={{
            ml: { sm: `${drawerWidth}px` },
            mt: "66px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Outlet />
        </Box>
      </div>
    </ThemeProvider>
  );
};

export default Root;
