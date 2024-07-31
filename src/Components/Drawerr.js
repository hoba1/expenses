import React from "react";
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  useTheme,
} from "@mui/material";
import {
  Brightness4,
  Brightness7,
  Create,
  Home,
  Logout,
  Person2,
  Settings,
} from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";

const myList = [
  { text: "Home", icon: <Home />, path: "/" },
  { text: "Create", icon: <Create />, path: "/create" },
  { text: "Profile", icon: <Person2 />, path: "/profile" },
  { text: "Settings", icon: <Settings />, path: "/settings" },
];

const Drawerr = ({
  drawerWidth,
  setMode,
  noneOrBlock,
  variantDrawer,
  closeDrawer,
}) => {
  const navigate = useNavigate();
  const currentLocation = useLocation();
  const theme = useTheme();
  return (
    <Drawer
      sx={{
        display: { xs: noneOrBlock, sm: "block" },
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant={variantDrawer}
      anchor="left"
      open={true}
      onClose={() => {
        closeDrawer();
      }}
    >
      <List>
        <ListItem
          sx={{ display: "flex", justifyContent: "center", mb: "14px" }}
          disablePadding
        >
          <IconButton
            color="inherit"
            onClick={() => {
              localStorage.setItem(
                "currentMode",
                theme.palette.mode === "dark" ? "light" : "dark"
              );
              setMode(theme.palette.mode === "light" ? "dark" : "light");
            }}
          >
            {theme.palette.mode === "dark" ? (
              <Brightness7 sx={{ color: "orange" }} />
            ) : (
              <Brightness4 />
            )}
          </IconButton>
        </ListItem>
        <Divider />
        {myList.map((item) => {
          return (
            <ListItem
              key={item.text}
              disablePadding
              sx={{
                backgroundColor:
                  currentLocation.pathname === item.path &&
                  theme.palette.favBg.listItemBg,
              }}
            >
              <ListItemButton onClick={() => navigate(item.path)}>
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          );
        })}
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Logout />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Drawerr;
