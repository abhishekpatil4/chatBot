import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import userImage from "../assets/userImage.png";
import icon from "../assets/icon.png";
import up from "../assets/thumbUp.svg";
import down from "../assets/thumbDown.svg";
import Rating from '@mui/material/Rating';
import { useState } from "react";
import FeedBackModal from "./FeedBackModal";

const Message = ({time, type, message, id, feedback, rating, showThumbs = false }) => {
    const [open, setOpen] = useState(false);

    const [value, setValue] = useState(rating);
    const [showRating, setShowRating] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    return <Box onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} sx={{
        margin: '20px 0px', backgroundColor: '#D7C7F421', width: { xs: '80vw', sm: '60vw', lg: '80vw' }, minHeight: "6rem", borderRadius: "20px", boxShadow: 1, display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', padding: '1.5rem', '&:hover .hover-image': {
            opacity: 1,
        },
    }}>
        {
            type === "user" ?
                <Box sx={{ height: '65px', width: '65px', flexShrink: 0 }}>
                    <img src={userImage} alt="user image" width="100%" height="100%" style={{ borderRadius: '100%' }} />
                </Box>
                :
                <Box sx={{ height: "65px", width: '65px', borderRadius: '100%', overflow: 'hidden', boxShadow: 3, flexShrink: 0 }}>
                    <img src={icon} alt="logon icon" style={{ objectFit: 'fit', width: '150px' }} />
                </Box>

        }
        <Box sx={{ display: 'flex', justifyContent: "space-between", flexDirection: "column", marginLeft: "1rem", gap: 1 }}>
            <Typography sx={{ fontWeight: 700, fontSize: '16px', lineHeight: '18px' }}>
                {type === "user" ? "You" : "Soul AI"}
            </Typography>
            <Typography sx={{
                fontSize: '16px', fontWeight: 400, lineHeight: '22px'
            }}>
                {message}
            </Typography>
            <Typography sx={{ display: "flex", gap: 1.8, fontSize: "12px", fontWeight: 400, lineHeight: '16px', color: "gray" }}>
                {time}
                {type !== "user" && showThumbs &&
                    <>
                        <Box sx={{ cursor: 'pointer', opacity: { xs: 1, md: isHovered ? 1 : 0 } }}>
                            <img onClick={() => setShowRating((prev) => !prev)} className="hover-image" src={up} alt="thumbs up icon" />
                        </Box>
                        <Box sx={{ cursor: 'pointer', opacity: { xs: 1, md: isHovered ? 1 : 0 } }}>
                            <img onClick={() => setOpen(true)} src={down} alt="thumbs down icon" />
                        </Box>
                    </>
                }
            </Typography>
            <FeedBackModal open={open} setOpen={setOpen} msgId={id} />
            {type !== "user" && showRating &&
                <Box sx={{ margin: '1rem 0rem' }}>
                    <Typography component="legend">Rate this response</Typography>
                    <Rating
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                            console.log("id: ", id);
                            let arr = JSON.parse(localStorage.getItem("messages"));
                            for (let i = 0; i < arr.length; i++) {
                                if (arr[i].id === id) {
                                    arr[i].rating = newValue;
                                }
                            }
                            localStorage.setItem("messages", JSON.stringify(arr));
                        }}
                    />
                </Box>
            }
            {
                type !== "user" && feedback !== "" &&
                <Box>
                    <Typography><span style={{ fontWeight: 700 }}>Feedback:</span> {feedback}</Typography>
                </Box>
            }
        </Box>
    </Box>
}

export default Message;