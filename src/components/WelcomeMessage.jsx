import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import icon from "../assets/icon.png";
import ExampleMessageBox from "./ExampleMessageBox";
import Grid from '@mui/material/Grid';
import { useMediaQuery } from '@mui/material';


const exampleMsg = ["Hi, what is the weather", "Hi, what is my location", "Hi, what is the temperature", "Hi, how are you"]

const WelcomeMessage = ({ setShowWelcomeMsg }) => {
    const isXs = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    return <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop: { xs: '8rem', md: '0rem', lg: '8rem' } }}>
        <Typography sx={{ fontWeight: 600, fontSize: { xs: '22px', md: '28px' } }}>
            How Can I Help You Today?
        </Typography>
        <Box sx={{ height: "65px", width: '65px', borderRadius: '100%', overflow: 'hidden', boxShadow: 3, margin: '1rem' }}>
            <img src={icon} alt="logon icon" style={{ objectFit: 'fit', width: '150px' }} />
        </Box>
        <Box sx={{ width: '100%', marginTop: { xs: '2rem', lg: '5rem' } }}>
            <Grid container rowSpacing={{ xs: 1, lg: 4 }} columnSpacing={{ xs: 1, sm: 2, md: 0 }}>
                {
                    exampleMsg.map((message, idx) => {
                        if (isXs && idx === 2) {
                            return null;
                        }
                        return <ExampleMessageBox key={idx} message={message} id={idx} setShowWelcomeMsg={setShowWelcomeMsg} />
                    })
                }
            </Grid>
        </Box>
    </Box>
}

export default WelcomeMessage;