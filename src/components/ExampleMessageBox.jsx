import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import data from "../assets/sampleData.json"

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

const ExampleMessageBox = ({ message, id, setShowWelcomeMsg }) => {
    const handleClick = () => {
        setShowWelcomeMsg(false);
        const time = getCurrentTime();
        if (localStorage.getItem("messages")) {
            let arr = JSON.parse(localStorage.getItem("messages"));
            console.log("arr: ", arr);
            arr.push({
                type: "user",
                message: data[50 + id].question,
                time: time
            })
            arr.push({
                type: "bot",
                message: data[50 + id].response,
                time: time
            })
            console.log("arr: ", arr);
            localStorage.setItem("messages", JSON.stringify(arr));
        } else {
            let arr = [
                {
                    type: "user",
                    message: data[50 + id].question,
                    time: time
                },
                {
                    type: "bot",
                    message: data[50 + id].response,
                    time: time
                },
            ];
            localStorage.setItem("messages", JSON.stringify(arr));
        }
    }
    return <Grid item xs={12} lg={6} onClick={handleClick} sx={{ cursor: 'pointer' }}>
        <Box sx={{ width: { xs: '80vw', sm: '512px' }, height: "112px", backgroundColor: 'white', borderRadius: '5px', padding: '0.5rem', boxShadow: 2, margin: 'auto' }}>
            <Typography sx={{ fontWeight: 700, fontSize: '20px', padding: '0.5rem' }}>
                {message}
            </Typography>
            <Typography sx={{ fontWeight: 400, fontSize: '16px', color: "gray", padding: '0.5rem' }}>
                Get immediate AI generated response
            </Typography>
        </Box>
    </Grid>
}

export default ExampleMessageBox;