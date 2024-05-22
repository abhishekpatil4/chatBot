import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useTheme } from '@emotion/react';
import TextField from '@mui/material/TextField';
import { colors } from '@mui/material';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import data from "../../assets/sampleData.json"
import { useEffect } from 'react';
import newChatIcon from "../../assets/newChatIcon.svg";
import icon from "../../assets/icon.png"



const drawerWidth = 240;

function Home(props) {
    useEffect(() => {
        console.log("data: ", data);
    }, []);
    const theme = useTheme();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [isClosing, setIsClosing] = React.useState(false);

    const handleDrawerClose = () => {
        setIsClosing(true);
        setMobileOpen(false);
    };

    const handleDrawerTransitionEnd = () => {
        setIsClosing(false);
    };

    const handleDrawerToggle = () => {
        if (!isClosing) {
            setMobileOpen(!mobileOpen);
        }
    };

    //background: 'linear-gradient(180deg, rgba(215, 199, 244, 0.2) 0%, rgba(151, 133, 186, 0.2) 100%)'


    const drawer = (
        <Box sx={{ backgroundColor: 'white', height: '100vh' }}>
            <Toolbar sx={{ backgroundColor: theme.palette.darkPurple.main, justifyContent: 'space-between' }}>
                <Box sx={{ height: "32px", width: '32px', borderRadius: '10px', overflow: 'hidden' }}>
                    <img src={icon} alt="logon icon" style={{ objectFit: 'fit', width: '150px' }} />
                </Box>
                <Typography sx={{ fontWeight: 600 }}>New Chat</Typography>
                <img src={newChatIcon} alt="new chat icon" />
            </Toolbar>
            <Divider />
            <List sx={{ color: theme.palette.lightWhite.main }}>
                {['Drafts'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon sx={{ color: theme.palette.lightWhite.main }} /> : <MailIcon sx={{ color: theme.palette.lightWhite.main }} />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            {/* <Divider />
            <List sx={{ color: theme.palette.lightWhite.main }} >
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon sx={{ color: theme.palette.lightWhite.main }} /> : <MailIcon sx={{ color: theme.palette.lightWhite.main }} />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List> */}
        </Box>
    );

    // Remove this const when copying and pasting into your project.
    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: {
                        sm: `${drawerWidth}px`,
                    },
                    backgroundColor: theme.palette.lightPurple.main,
                    boxShadow: 'none'
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h4" noWrap component="div" sx={{ fontWeight: 600, color: theme.palette.vdarkPurple.main }}>
                        Bot AI
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onTransitionEnd={handleDrawerTransitionEnd}
                    onClose={handleDrawerClose}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },

                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` }, backgroundColor: theme.palette.lightPurple.main, height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            >
                <Toolbar />
                <Typography paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
                    enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
                    imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
                    Convallis convallis tellus id interdum velit laoreet id donec ultrices.
                    Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                    adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
                    nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
                    leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
                    feugiat vivamus at augue. At augue eget arcu dictum varius duis at
                    consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
                    sapien faucibus et molestie ac.
                </Typography>
                <Typography paragraph>
                    Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
                    eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
                    neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
                    tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
                    sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
                    tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
                    gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
                    et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
                    tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
                    eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
                    posuere sollicitudin aliquam ultrices sagittis orci a.
                </Typography>
                <Box sx={{
                    display: 'flex', justifyContent: 'center', position: 'fixed',
                    bottom: 30,
                    gap: 2
                }}>
                    <Input disableUnderline placeholder='Message ChatBot'
                        sx={{
                            backgroundColor: 'white', height: "1rem", border: '1px solid gray', borderRadius: '5px', minWidth: '50rem',
                            padding: '1.5rem',
                        }} />
                    <Button variant="contained" sx={{
                        backgroundColor: theme.palette.darkPurple.main, color: 'black', minWidth: '8rem', borderRadius: '5px', fontWeight: 600, textTransform: 'none',
                        '&:hover': {
                            backgroundColor: '#adacac', // Change to your desired hover color
                        },
                    }}>Ask</Button>
                    <Button variant="contained" sx={{
                        backgroundColor: theme.palette.darkPurple.main, color: 'black', minWidth: '8rem', borderRadius: '5px', fontWeight: 600, textTransform: 'none',
                        '&:hover': {
                            backgroundColor: '#adacac', // Change to your desired hover color
                        },
                    }}>Save</Button>
                </Box>
            </Box>
        </Box >
    );
}
export default Home;
