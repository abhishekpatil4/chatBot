import { Box } from "@mui/material"
import { useState, useEffect } from "react";
import Message from "./Message";

const CurrentMessages = ({ currentMessages }) => {
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        const getLocalData = async () => {
            if (localStorage.getItem("messages")) {
                const arr = await JSON.parse(localStorage.getItem("messages"));
                setMessages(arr);
            }
        }
        getLocalData();
    }, [currentMessages]);
    return <Box sx={{ marginBottom: "4rem", overflow: 'scroll' }}>
        {
            messages.length > 0 ?
                messages.map((msg, idx) =>
                    <Message key={idx} id={msg.id} type={msg.type} message={msg.message} rating={msg.rating} feedback={msg.feedback} showThumbs={idx===messages.length-1 && true}/>
                )
                :
                <h3>No data available</h3>
        }
    </Box>
}

export default CurrentMessages;