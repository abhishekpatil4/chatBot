import SideBar from "../components/SideBar";
import { Box, Typography } from "@mui/material";
import Message from "../components/Message";
import { useEffect } from "react";
import { useState } from "react";
import { useTheme } from "@emotion/react";
import MessageInHistory from "../components/MessageInHistory";
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const drawerWidth = 240;

const PastConversation = ({ window, showWelcomeMsg, setShowWelcomeMsg }) => {
    const [rating, setRating] = useState("All Ratings");
    const handleRatingChange = (event) => {
        console.log("e: ", event.target.value);
        setRating(event.target.value);
    }
    const theme = useTheme();
    const [messageHistory, setMessageHistory] = useState([]);
    useEffect(() => {
        const getData = async () => {
            if (localStorage.getItem("messageHistory")) {
                const arr = await JSON.parse(localStorage.getItem("messageHistory"));
                setMessageHistory(arr);
            }
        }
        getData();
    }, []);

    return <Box sx={{ display: 'flex' }}>
        <SideBar window={window} history={true} setShowWelcomeMsg={setShowWelcomeMsg} />
        <Box component="main"
            sx={{
                flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` },
                background: { xs: 'linear-gradient(180deg, #F9FAFA 59%, #EDE4FF 100%)', sm: 'linear-gradient(180deg, rgba(215, 199, 244, 0.2) 0%, rgba(151, 133, 186, 0.2) 100%)' },
                height: '100vh',
                // calc(var(--vh, 1vh) * 100)
                display: 'flex', flexDirection: 'column', alignItems: 'center', overflow: 'scroll'
            }}>
            <Typography sx={{ fontSize: '28px', fontWeight: 400, textAlign: 'center', margin: '2rem 0rem' }}>
                Conversation History
            </Typography>
            <Box sx={{ minWidth: 150 }}>
                <FormControl fullWidth size="small">
                    <Select
                        value={rating}
                        onChange={handleRatingChange}
                    >
                        <MenuItem value={"All Ratings"}>All ratings</MenuItem>
                        <MenuItem value={"1"}>1 Star</MenuItem>
                        <MenuItem value={"2"}>2 Star</MenuItem>
                        <MenuItem value={"3"}>3 Star</MenuItem>
                        <MenuItem value={"4"}>4 Star</MenuItem>
                        <MenuItem value={"5"}>5 Star</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            {
                messageHistory.length > 0 ? messageHistory.map((msg, idx) => {
                    if (rating === "All Ratings") {
                        return <Box key={idx} sx={{
                            margin: '1rem 0rem', background: 'linear-gradient(90deg, #BFACE2 0%, #D7C7F4 100%)', borderRadius: '10px'
                        }}>
                            {
                                msg.map((m, idx) =>
                                    <MessageInHistory key={idx} type={m.type} message={m.message} rating={m.rating} feedback={m.feedback} />
                                )
                            }
                        </Box>
                    } else if (msg[msg.length - 1].rating === Number(rating)) {
                        return <Box key={idx} sx={{
                            margin: '1rem 0rem', background: 'linear-gradient(90deg, #BFACE2 0%, #D7C7F4 100%)', borderRadius: '10px'
                        }}>
                            {
                                msg.map((m, idx) =>
                                    <MessageInHistory key={idx} type={m.type} message={m.message} rating={m.rating} feedback={m.feedback} />
                                )
                            }
                        </Box>
                    }
                })
                    :
                    <Box sx={{ textAlign: "center" }}>
                        No data
                    </Box>
            }
        </Box >
    </Box>
}

export default PastConversation;