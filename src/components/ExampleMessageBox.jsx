import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";

const ExampleMessageBox = ({ message }) => {
    return <Grid item xs={12} lg={6}>
        <Box sx={{ width: '512px', height: "112px", backgroundColor: 'white', borderRadius: '5px', padding: '0.5rem', boxShadow: 2, margin: 'auto' }}>
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