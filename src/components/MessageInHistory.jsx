import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import userImage from "../assets/userImage.png";
import icon from "../assets/icon.png";
import up from "../assets/thumbUp.svg";
import down from "../assets/thumbDown.svg";
import Rating from '@mui/material/Rating';

const MessageInHistory = ({time, type, message, rating, feedback }) => {
    time = time.split('&')[0];
    return <Box sx={{ margin: '20px 0px', width: { xs: '80vw', sm: '60vw', lg: '75vw' }, minHeight: "6rem", display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', padding: '0rem 0.8rem' }}>
        {
            type === "user" ?
                <Box sx={{ height: '65px', width: '65px' }}>
                    <img src={userImage} alt="user image" width="100%" height="100%" style={{ borderRadius: '100%' }} />
                </Box>
                :
                <Box sx={{ height: "65px", width: '65px', borderRadius: '100%', overflow: 'hidden', boxShadow: 3 }}>
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
            </Typography>
            {type !== "user" && rating > 0 &&
                <Box sx={{ margin: '0.2rem 0rem' }}>
                    <Rating
                        name="simple-controlled"
                        value={rating}
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

export default MessageInHistory;