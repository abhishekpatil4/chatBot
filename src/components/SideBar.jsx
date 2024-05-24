import { Box } from "@mui/material"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import newChatIcon from "../assets/newChatIcon.svg";
import icon from "../assets/icon.png"
import { useState } from 'react';
import { useTheme } from "@emotion/react";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

const SideBar = ({window}) => {
    const theme = useTheme();
    const navigate = useNavigate();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    //this is for sidebar
    const drawer = (
        <Box sx={{ backgroundColor: 'white', height: '100vh' }}>
            <Toolbar sx={{ backgroundColor: theme.palette.darkPurple.main, justifyContent: 'space-between' }}>
                <Box sx={{ height: "32px", width: '32px', borderRadius: '10px', overflow: 'hidden' }}>
                    <img src={icon} alt="logon icon" style={{ objectFit: 'fit', width: '150px' }} />
                </Box>
                <Typography sx={{ fontWeight: 600 }}>New Chat</Typography>
                <img src={newChatIcon} alt="new chat icon" />
            </Toolbar>
            <Divider />
            <List>
                <ListItem>
                    <ListItemButton onClick={() => navigate('/history')} sx={{
                        borderRadius: '10px', backgroundColor: theme.palette.darkPurple.main, '&:hover': {
                            backgroundColor: theme.palette.vdarkPurple.main,
                        },
                    }}>
                        <ListItemText sx={{ textAlign: "center" }}>
                            <span style={{ color: '#414146', fontWeight: 700 }}>Past Conversation</span>
                        </ListItemText>
                    </ListItemButton>
                </ListItem>
            </List>
            {/* <Divider /> */}
        </Box>
    );
    const handleDrawerClose = () => {
        setIsClosing(true);
        setMobileOpen(false);
    };
    const handleDrawerTransitionEnd = () => {
        setIsClosing(false);
    };
    const handleDrawerToggle = () => {
        if (!isClosing) {
            setMobileOpen(!mobileOpen);
        }
    };
    const container = window !== undefined ? () => window().document.body : undefined;

    return <>
        {/* this is for sidebar */}
        <AppBar
            position="fixed"
            sx={{
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                ml: {
                    sm: `${drawerWidth}px`,
                },
                backgroundColor: { xs: 'white', sm: theme.palette.lightPurple.main },
                boxShadow: 'none'
            }}
        >
            <Toolbar>
                {/* this IconButton is for sidebar in mobile view  (menu button) */}
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { sm: 'none' }, color: theme.palette.vdarkPurple.main }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h4" noWrap component="div" sx={{ fontWeight: 600, color: theme.palette.vdarkPurple.main }}>
                    Bot AI
                </Typography>
            </Toolbar>
        </AppBar>

        {/* side bar */}
        <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
            aria-label="mailbox folders"
        >
            {/* this is for mobile view, and can be opened or closed */}
            <Drawer
                container={container}
                variant="temporary"
                open={mobileOpen}
                onTransitionEnd={handleDrawerTransitionEnd}
                onClose={handleDrawerClose}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
            >
                {drawer}
            </Drawer>

            {/* this is for normal view */}
            <Drawer
                variant="permanent"
                sx={{
                    display: { xs: 'none', sm: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },

                }}
                open
            >
                {drawer}
            </Drawer>
        </Box>

    </>
}

export default SideBar;