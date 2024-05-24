import SideBar from "../components/SideBar";
import { Box, Typography } from "@mui/material";
import Message from "../components/Message";
import { useEffect } from "react";
import { useState } from "react";
import { useTheme } from "@emotion/react";
import MessageInHistory from "../components/MessageInHistory";

const drawerWidth = 240;

const PastConversation = ({ window }) => {
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
        <SideBar window={window} history={true} />
        <Box component="main"
            sx={{
                flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` },
                background: { xs: 'linear-gradient(180deg, #F9FAFA 59%, #EDE4FF 100%)', sm: 'linear-gradient(180deg, rgba(215, 199, 244, 0.2) 0%, rgba(151, 133, 186, 0.2) 100%)' },
                height: '100vh',
                // calc(var(--vh, 1vh) * 100)
                display: 'flex', flexDirection: 'column', alignItems: 'center'
            }}>
            <Typography sx={{ fontSize: '28px', fontWeight: 400, textAlign: 'center', margin: '2rem 0rem' }}>
                Conversation History
            </Typography>
            {
                messageHistory.length > 0 ? messageHistory.map((msg, idx) => {
                    return <Box key={idx} sx={{margin:'1rem 0rem', background: 'linear-gradient(90deg, #BFACE2 0%, #D7C7F4 100%)'
                        , padding:'1rem', borderRadius:'10px'}}>
                        {
                            msg.map((m, idx) =>
                                <MessageInHistory key={idx} type={m.type} message={m.message} />
                            )
                        }
                    </Box>
                })
                :
                <Box sx={{textAlign:"center"}}>
                    No data
                </Box>
            }
        </Box >
    </Box>
}

export default PastConversation;