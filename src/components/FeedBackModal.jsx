import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useTheme } from '@emotion/react';
import { Input } from '@mui/material';
import { BorderRight } from '@mui/icons-material';
import bulbIcon from "../assets/bulb.svg";
import TextField from '@mui/material/TextField';
import { useState } from 'react';

export default function FeedBackModal({ open, setOpen, msgId }) {
    const [feedback, setFeedback] = useState();
    const handleSubmit = () => {
        let arr = JSON.parse(localStorage.getItem("messages"));
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].id === msgId) {
                arr[i].feedback = feedback;
            }
        }
        localStorage.setItem("messages", JSON.stringify(arr));
        setFeedback("");
        setOpen(false);
    }
    const theme = useTheme();
    return (
        <div>
            <Modal
                open={open}
                onClose={() => setOpen(false)}
            >
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: { xs: '23rem', sm: '45rem', md: '60rem' },
                    boxShadow: 24,
                    p: 4,
                    borderRadius: '10px',
                    backgroundColor: theme.palette.lightPurple.main,
                }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                            <Box sx={{ width: { xs: "25px" } }}>
                                <img src={bulbIcon} alt="" width={"100%"} />
                            </Box>
                            <Typography sx={{ fontSize: { xs: '14px', sm: '22px' }, fontWeight: 400, lineHeight: '30px' }}>Provide Additional Feedback</Typography>
                        </Box>
                        <Button onClick={() => setOpen(false)} sx={{ fontWeight: 700, fontSize: '28px', color: 'black' }}>X</Button>
                    </Box>
                    <TextField
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        multiline
                        minRows={6}
                        sx={{ borderRadius: "8px", width: '99%', backgroundColor: 'white', marginTop: '1rem' }}
                    />
                    <Box onClick={handleSubmit} sx={{ display: 'flex', justifyContent: { xs: 'center', sm: 'right' }, marginTop: '10px' }}>
                        <Button sx={{
                            color: 'black', backgroundColor: theme.palette.darkPurple.main, minWidth: '10rem', textTransform: 'none', height: '3rem', fontSize: '18px', '&:hover': {
                                backgroundColor: theme.palette.vdarkPurple.main,
                            },
                        }}>Submit</Button>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}