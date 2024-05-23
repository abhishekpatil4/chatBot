import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import userImage from "../assets/userImage.png";
import icon from "../assets/icon.png";
import up from "../assets/thumbUp.svg";
import down from "../assets/thumbDown.svg";

const Message = ({ type, message }) => {
    return <Box sx={{margin:'20px 0px', backgroundColor: '#D7C7F421', width: {xs:'80vw', sm:'60vw', lg:'80vw'}, height: "6rem", borderRadius: "20px", boxShadow: 1, display: 'flex', justifyContent: 'flex-start', alignItems: 'center', padding: '1.5rem' }}>
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
                10:33 AM
                {type !== "user" &&
                    <>
                        <img src={up} alt="thumbs up icon" />
                        <img src={down} alt="thumbs down icon" />
                    </>
                }
            </Typography>
        </Box>
    </Box>
}

export default Message;