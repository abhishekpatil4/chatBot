import SideBar from "../components/SideBar";
import { Box } from "@mui/material";

const PastConversation = ({ window }) => {
    return <>
        <SideBar window={window} history={true} />
        <Box sx={{ height: '100vh', background: 'linear-gradient(180deg, rgba(215, 199, 244, 0.2) 0%, rgba(151, 133, 186, 0.2) 100%)' }}>

        </Box >
    </>
}

export default PastConversation;