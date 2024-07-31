import React from "react";
import { Avatar, Link, Toolbar , AppBar, Typography, IconButton} from "@mui/material";
import { Menu } from "@mui/icons-material";

const Appbar = ({drawerWidth, showDrawer}) => {
  return (
    <AppBar
      sx={{ width: {sm: `calc(100% - ${drawerWidth}px)`}, ml: {xs: 0, sm: `${drawerWidth}px`} }}
      position="static"
    >
      <Toolbar>
        <IconButton onClick={() => { 
          showDrawer()
        }} sx={{mr: "9px" ,display: {sm: "none"}}}>
          <Menu />
        </IconButton>
        <Link
          underline="none"
          href="/"
          color="inherit"
          sx={{
            flexGrow: 1,
            transition: ".3s",
            "&:hover": { fontSize: "16.5px" },
          }}
        >
          My Expenses
        </Link>
        <Typography variant="subtitle2" mr={2}>
          Mohab Khaled
        </Typography>
        <Avatar
          alt="Remy Sharp"
        >M</Avatar>
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;
