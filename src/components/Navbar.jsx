// FileName - Navbar.js

import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  List,
  ListItem,
  ListItemText,
  Collapse,
  IconButton,
  useMediaQuery,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

export default function Navbar() {
  const small = useMediaQuery("(max-width:600px)");
  const full = useMediaQuery("(min-width:600px)");
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const menuItems = [
    { text: "Home", link: "/" },
    { text: "About Us", link: "/about" },
    { text: "Buy DID", link: "/buy-did" },
    { text: "Sell DID", link: "/sell-did" },
    { text: "Rates", link: "/rates" },
    { text: "Coverage", link: "/coverage" },
    { text: "Interop", link: "/introp" },
    { text: "Login", link: "/login-page" },
  ];

  return (
    <AppBar
      position="sticky"
      color="default"
      sx={{
        width: "100%",
        top: 0,
        zIndex: (theme) => theme.zIndex.drawer + 1,
          mb:-10
        
      }}
    >
      <Toolbar
        variant="dense"
        sx={{
          width: "100%",
          px: 2,
          minHeight: "70px", // taller navbar
        }}
      >
        {/* Small Screen Navbar */}
        {small && (
          <Box sx={{ flex: 1, width: "100%" }}>
            <List sx={{ p: 0 }}>
              <ListItem
                sx={{ display: "flex", justifyContent: "space-around" }}
              >
                <img
                  src={"img/didx-logo.png"}
                  alt="DIDX Logo"
                  style={{ height: "65px" }} // bigger logo
                />
                <IconButton color="inherit" onClick={handleClick}>
                  <MenuIcon fontSize="large" />
                  {open ? <ExpandLess /> : <ExpandMore />}
                </IconButton>
              </ListItem>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {menuItems.map((item, index) => (
                    <ListItem
                      key={index}
                      button
                      component={Link}
                      to={item.link}
                      onClick={() => setOpen(false)} // close menu on click
                      sx={{
                        "& .MuiListItemText-primary": {
                          fontSize: "1.1rem",
                          fontWeight: 500,
                        },
                      }}
                    >
                      <ListItemText primary={item.text} />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            </List>
          </Box>
        )}

        {/* Full Screen Navbar */}
        {full && (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <img
              src={"img/didx-logo.png"}
              alt="DIDX Logo"
              style={{ height: "70px", cursor: "pointer" }} // bigger logo
            />
            <Box>
              {menuItems.map((item, index) => (
                <Button
                  key={index}
                  component={Link}
                  to={item.link}
                  color="inherit"
                  sx={{
                    fontSize: "1.5rem",
                    fontWeight: 400,
                     fontFamily: "serif",
                    mx: 1, // spacing between buttons
                  }}
                >
                  {item.text}
                </Button>
              ))}
            </Box>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}
