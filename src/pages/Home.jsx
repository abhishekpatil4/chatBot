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
import uniqid from 'uniqid';

// import { ContextForWelcomeMsg } from "./components/ContextForWelcomeMsg"

const drawerWidth = 240;

function getCurrentTime() {
    const currentDate = new Date();
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let meridiem = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    const formattedTime = `${hours}:${minutes} ${meridiem}`;
    return formattedTime;
}

const Home = ({ window, showWelcomeMsg, setShowWelcomeMsg }) => {
    const [message, setMessage] = useState("");
    const [currentMessages, setCurrentMessages] = useState();
    useViewportHeight();
    const theme = useTheme();

    const handleAdd = () => {
        let resObj = data?.find((d) => d.question === message.trim());
        if (resObj === undefined) {
            resObj = {
                response: "Error... try a different message."
            }
        }
        const time = getCurrentTime();
        const msgId = uniqid();
        setMessage("");
        if (localStorage.getItem("messages")) {
            let arr = JSON.parse(localStorage.getItem("messages"));
            arr.push({
                id: msgId + '-user',
                type: "user",
                message: message.trim(),
                time: time
            })
            arr.push({
                id: msgId + '-bot',
                type: "bot",
                message: resObj.response,
                time: time,
                rating: 0,
                feedback: ""
            })
            setCurrentMessages(arr);
            localStorage.setItem("messages", JSON.stringify(arr));
        } else {
            let arr = [
                {
                    id: msgId + '-user',
                    type: "user",
                    message: message.trim(),
                    time: time
                },
                {
                    id: msgId + '-bot',
                    type: "bot",
                    message: resObj.response,
                    time: time,
                    rating: 0,
                    feedback: ""
                },
            ];
            setCurrentMessages(arr);
            localStorage.setItem("messages", JSON.stringify(arr));
        }
        setShowWelcomeMsg(false);
    }


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

            <SideBar window={window} setShowWelcomeMsg={setShowWelcomeMsg} />
            {/* this is the message box */}
            <Box
                component="main"
                sx={{
                    flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` },
                    background: { xs: 'linear-gradient(180deg, #F9FAFA 59%, #EDE4FF 100%)', sm: 'linear-gradient(180deg, rgba(215, 199, 244, 0.2) 0%, rgba(151, 133, 186, 0.2) 100%)' },
                    height: '100vh',
                    // height:'calc(var(--vh, 1vh) * 100)',
                    display: 'flex', flexDirection: 'column', alignItems: 'center'
                }}
            >
                <Toolbar />
                {showWelcomeMsg ?
                    <WelcomeMessage setShowWelcomeMsg={setShowWelcomeMsg} />
                    :
                    <CurrentMessages currentMessages={currentMessages} />
                }

                <Box sx={{
                    display: 'flex', justifyContent: 'center', position: 'fixed',
                    bottom: 0, gap: 2, padding: '1rem 1rem 1rem 1rem',
                }}>
                    <Input disableUnderline placeholder='Message ChatBot' value={message} onChange={(e) => setMessage(e.target.value)}
                        sx={{
                            backgroundColor: 'white', height: "1rem", border: '1px solid gray', borderRadius: '5px', minWidth: { md: '25rem', lg: '40rem' },
                            padding: '1.5rem',
                        }} />
                    <Button onClick={handleAdd} variant="contained" sx={{
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
