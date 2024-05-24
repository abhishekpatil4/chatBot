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
import SideBar from '../components/SideBar';
// import { ContextForWelcomeMsg } from "./components/ContextForWelcomeMsg"

const drawerWidth = 240;

function Home({ window }) {
    useViewportHeight();
    // useEffect(() => {
    //     console.log("data: ", data);
    // }, []);
    const theme = useTheme();
    const [showWelcomeMsg, setShowWelcomeMsg] = useState(true);

    // Remove this const when copying and pasting into your project.
    const container = window !== undefined ? () => window().document.body : undefined;

    const handleSave = () => {
        const saveMessage = async () => {
            let messages = await JSON.parse(localStorage.getItem("messages"));
            if (localStorage.getItem("messageHistory")) {
                let arr = await JSON.parse(localStorage.getItem("messageHistory"));
                arr.push(messages);
                localStorage.setItem("messageHistory", JSON.stringify(arr));
            } else {
                let arr = [messages];
                localStorage.setItem("messageHistory", JSON.stringify(arr));
            }
            localStorage.removeItem("messages");
        }
        saveMessage();
    }

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />

            <SideBar window={window} />
            {/* this is the message box */}
            <Box
                component="main"
                sx={{
                    flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` },
                    background: { xs: 'linear-gradient(180deg, #F9FAFA 59%, #EDE4FF 100%)', sm: 'linear-gradient(180deg, rgba(215, 199, 244, 0.2) 0%, rgba(151, 133, 186, 0.2) 100%)' },
                    // height: '100vh',
                    // height:'calc(var(--vh, 1vh) * 100)',
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
                    <Button variant="contained" onClick={handleSave} sx={{
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
