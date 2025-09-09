// FileName - Navbar.js

import React, { useState } from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    List,
    ListItem,
    ListItemText,
    Collapse,
    IconButton,
    Box,
    useMediaQuery,
} from "@mui/material";
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

    return (
        // <Box sx={{ flexGrow: 1, }}>
        <AppBar position="static" color="transparent">
            <Toolbar variant="dense">
                {/* Small Screen Navbar */}
                {small && (
                    <List sx={{ flex: 1 }}>
                        <ListItem>
                            <IconButton color="inherit" onClick={handleClick}>
                                <MenuIcon />
                                {open ? <ExpandLess /> : <ExpandMore />}
                            </IconButton>
                            {/* <Typography
                  variant="h6"
                  color="inherit"
                  sx={{ ml: 2, cursor: "pointer" }}
                  onClick={() => {
                    console.log("logo clicked");
                    setOpen(false);
                  }}
                >
                  Geeks for Geeks
                </Typography> */}
                            <img
                                src={"img/didx-logo.png"}
                                alt="DIDX Logo"
                                style={{ height: "60px" }}
                            />
                        </ListItem>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItem button>
                                    <ListItemText primary="Home" />
                                </ListItem>
                                <ListItem button>
                                    <ListItemText primary="About" />
                                </ListItem>
                                <ListItem button>
                                    <ListItemText primary="Contact" />
                                </ListItem>
                                <ListItem button>
                                    <ListItemText primary="Home" />
                                </ListItem>
                                <ListItem button>
                                    <ListItemText primary="About" />
                                </ListItem>
                                <ListItem button>
                                    <ListItemText primary="Contact" />
                                </ListItem>
                            </List>
                        </Collapse>
                    </List>
                )}

                {/* Full Screen Navbar */}
                {full && (
                    <>
                        {/* <Typography
                            variant="h6"
                            color="inherit"
                            sx={{ flexGrow: 1, cursor: "pointer" }}
                        >
                            DIDX
                        </Typography> */}
                        <div style={{ flexGrow: 1, cursor: "pointer" }}>
                        <img
                            src={"img/didx-logo.png"}
                            alt="DIDX Logo"
                            style={{height: "60px" }}
                        />
                        </div>
                        <Button color="inherit">Home</Button>
                        <Button color="inherit">About</Button>
                        <Button color="inherit">Contact</Button>
                        <Button color="inherit">Home</Button>
                        <Button color="inherit">About</Button>
                        <Button color="inherit">Contact</Button>
                        <Button color="inherit">Home</Button>
                        <Button color="inherit">About</Button>
                        <Button color="inherit">Contact</Button>
                    </>
                )}
            </Toolbar>
        </AppBar>
        // </Box>
    );
}
