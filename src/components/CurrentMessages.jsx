import { Box } from "@mui/material"
import { useState, useEffect } from "react";
import Message from "./Message";

const CurrentMessages = () => {
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        const getLocalData = async () => {
            if (localStorage.getItem("messages")) {
                const arr = await JSON.parse(localStorage.getItem("messages"));
                setMessages(arr);
            }
        }
        getLocalData();
    }, []);
    return <Box sx={{marginBottom:"4rem"}}>
        {
            messages.length > 0 ?
                messages.map((msg, idx) =>
                    <Message key={idx} id={msg.id} type={msg.type} message={msg.message} rating={msg.rating} feedback={msg.feedback} />
                )
                :
                <h3>No data available</h3>
        }
    </Box>
}

export default CurrentMessages;