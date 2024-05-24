import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useTheme } from '@emotion/react';
import TextField from '@mui/material/TextField';
import { colors } from '@mui/material';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import data from "../assets/sampleData.json"
import { useEffect } from 'react';
import newChatIcon from "../assets/newChatIcon.svg";
import icon from "../assets/icon.png"
import Message from "../components/Message"
import useViewportHeight from '../components/useViewPortHeight';
import WelcomeMessage from "../components/WelcomeMessage";
import { useState } from 'react';
import CurrentMessages from '../components/CurrentMessages';
import { useNavigate } from 'react-router-dom';
// import { ContextForWelcomeMsg } from "./components/ContextForWelcomeMsg"

const drawerWidth = 240;

function Home(props) {
    const navigate = useNavigate();
    useViewportHeight();
    // useEffect(() => {
    //     console.log("data: ", data);
    // }, []);
    const theme = useTheme();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [isClosing, setIsClosing] = React.useState(false);
    const [showWelcomeMsg, setShowWelcomeMsg] = useState(true);

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

    //background: 'linear-gradient(180deg, rgba(215, 199, 244, 0.2) 0%, rgba(151, 133, 186, 0.2) 100%)'

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

    // Remove this const when copying and pasting into your project.
    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />

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

            {/* this is the message box */}
            <Box
                component="main"
                sx={{
                    flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` },
                    background: { xs: 'linear-gradient(180deg, #F9FAFA 59%, #EDE4FF 100%)', sm: 'linear-gradient(180deg, rgba(215, 199, 244, 0.2) 0%, rgba(151, 133, 186, 0.2) 100%)' },
                    height: '100vh',
                    // calc(var(--vh, 1vh) * 100)
                    display: 'flex', flexDirection: 'column', alignItems: 'center'
                }}
            >
                <Toolbar />
                {showWelcomeMsg ?
                    <WelcomeMessage setShowWelcomeMsg={setShowWelcomeMsg} />
                    :
                    <CurrentMessages />
                }

                <Box sx={{
                    display: 'flex', justifyContent: 'center', position: 'fixed',
                    bottom: 0, gap: 2, padding: '1rem 1rem 1rem 1rem',
                }}>
                    <Input disableUnderline placeholder='Message ChatBot'
                        sx={{
                            backgroundColor: 'white', height: "1rem", border: '1px solid gray', borderRadius: '5px', minWidth: { md: '25rem', lg: '40rem' },
                            padding: '1.5rem',
                        }} />
                    <Button variant="contained" sx={{
                        backgroundColor: theme.palette.darkPurple.main, color: 'black', minWidth: { md: '8rem' }, borderRadius: '5px', fontWeight: 600, textTransform: 'none',
                        '&:hover': {
                            backgroundColor: theme.palette.vdarkPurple.main,
                        },
                    }}>Ask</Button>
                    <Button variant="contained" sx={{
                        backgroundColor: theme.palette.darkPurple.main, color: 'black', minWidth: { md: '8rem' }, borderRadius: '5px', fontWeight: 600, textTransform: 'none',
                        '&:hover': {
                            backgroundColor: theme.palette.vdarkPurple.main,
                        },
                    }}>Save</Button>
                </Box>
            </Box>
        </Box >
    );
}
export default Home;
