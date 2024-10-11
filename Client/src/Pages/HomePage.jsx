
import capture_1 from '../assets/capture_1.png';
import {Box, Button, Input, Link, Typography} from "@mui/material";


import NavBar from "../component/NavBar.jsx";
import LogoMotion from "../component/LogoMotion.jsx";

function HomePage(){
    return (
        <>
            <Box><NavBar /></Box>
            <Box width="100%" margin="auto" marginTop="6%">
                <Box width="80%" display="flex" justifyContent="space-between" margin='auto' marginBottom="7%" >
                    <Box width="35%">
                        <Box width="350px" textAlign="left">
                            <Typography variant="h2" component="h2" fontWeight="bold" sx={{ lineHeight: 1.2 }}>
                                <span style={{ color: "#0b3558" }}>Easy Scheduling ahead</span>
                            </Typography>
                        </Box>
                        <Box width="360px" textAlign="left" mt={8}>
                            <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.5 }}>
                                Calendly is your hub for scheduling meetings professionally and efficiently, eliminating the hassle of back-and-forth emails so you can get back to work.
                            </Typography>
                        </Box>
                        <Box display="flex" width="360px" textAlign="left" mt={8} alignItems="center">
                            <Box width="70%">
                                <Input
                                    fullWidth
                                    placeholder='Enter your email'
                                    variant="outlined"
                                    sx={{
                                        borderRadius: 2,
                                        bgcolor: 'white',
                                        '& .MuiOutlinedInput-root': {
                                            '& fieldset': {
                                                borderColor: '#0b3558',
                                            },
                                            '&:hover fieldset': {
                                                borderColor: '#0b3558',
                                            },
                                            '&.Mui-focused fieldset': {
                                                borderColor: '#0b3558',
                                            },
                                        },
                                        padding: '10px',
                                    }}
                                />
                            </Box>
                            <Box ml={2}>
                                <Link to='/'>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        height="40px"
                                        sx={{
                                            width: '140px',
                                            borderRadius: 2,
                                            padding: '10px 20px',
                                            fontSize: '1rem',
                                            textTransform: 'none',
                                            boxShadow: 2,
                                            '&:hover': {
                                                backgroundColor: '#0a2c4e',
                                            },
                                        }}
                                    >
                                        Sign Up
                                    </Button>
                                </Link>
                            </Box>
                        </Box>
                        <Box mt={1} textAlign="left" ml={1}>
                            <Typography variant="body2" color="text.secondary">
                                Create your free account. No credit card required.
                            </Typography>
                        </Box>

                    </Box>
                    <Box width="45%">
                        <img width="100%" src={capture_1} alt="" />
                    </Box>
                </Box>

               <LogoMotion />

                <Box width='80%' margin="auto" textAlign="center" marginBottom="9%" color='#0b3558'>
                    <Typography color="#1d344b" variant="h5">We make it easy to get started</Typography>
                    <Box marginTop="5%" display="flex" justifyContent='center' gap={8}>
                        <Box boxShadow="2xl" width="350px" height="200px" p={5} textAlign="left">
                            <img src='https://images.ctfassets.net/k0lk9kiuza3o/2lyAPMRxz8pdvkah5K6NFp/14203e7358e18e312b30c9674d8e72f1/icon-checkmark.svg' alt="" />
                            <Typography mt={4} variant="h6">Create simple rules</Typography>
                            <Typography mt={3} variant="body2">
                                Let Calendly know your availability<br />preferences and it'll do the work for<br /> you.
                            </Typography>
                        </Box>
                        <Box boxShadow="2xl" width="350px" p={5} textAlign="left">
                            <img src='https://images.ctfassets.net/k0lk9kiuza3o/2lyAPMRxz8pdvkah5K6NFp/14203e7358e18e312b30c9674d8e72f1/icon-checkmark.svg' alt="" />
                            <Typography mt={4} variant="h6">Share your link</Typography>
                            <Typography mt={3} variant="body2">
                                Send guests your Calendly link or<br />embed it on your website.
                            </Typography>
                        </Box>
                        <Box boxShadow="2xl" width="350px" p={5} textAlign="left">
                            <img src='https://images.ctfassets.net/k0lk9kiuza3o/2lyAPMRxz8pdvkah5K6NFp/14203e7358e18e312b30c9674d8e72f1/icon-checkmark.svg' alt="" />
                            <Typography mt={4} variant="h6">Get booked</Typography>
                            <Typography mt={3} variant="body2">
                                They pick a time and the event is<br />added to your calendar.
                            </Typography>
                        </Box>
                    </Box>
                </Box>

                <Box width="80%" margin='auto' textAlign="center" marginBottom="8%" color='#0b3558'>
                    <Typography marginBottom="3%" color="#1d344b" variant="h5">Scheduling for any meeting type</Typography>
                    <Box display="flex" flexDirection="row" gap={10} justifyContent="center">
                        <Box width="25%">
                            <img width="120px" src="https://images.ctfassets.net/k0lk9kiuza3o/7p8aTHV9Fk5t1gZHgtyv73/8cd7d44156e09b20c1b02f123865515c/Vector__7_.svg" alt="" />
                            <Typography variant="h6" marginTop="2%">One-on-One</Typography>
                            <Typography variant="body2">Meet with others individually.</Typography>
                        </Box>
                        <Box width="25%">
                            <img width="120px" src="https://images.ctfassets.net/k0lk9kiuza3o/4SlygaV7s40dcT5Ek66W4E/2ae48c73395fd1a0ecbbd58f5d1b673/Vector__8_.svg" alt="" />
                            <Typography variant="h6" marginTop="2%">Group</Typography>
                            <Typography variant="body2">Host many attendees in one meeting.</Typography>
                        </Box>
                        <Box width="25%">
                            <img width="120px" src="https://images.ctfassets.net/k0lk9kiuza3o/4mj9bnOSAbT3p69RmFOFMB/6c926589e06e9eb10c46401ea74ae1b4/Vector__9_.svg" alt="" />
                            <Typography variant="h6" marginTop="2%">Collective</Typography>
                            <Typography variant="body2">Allow your team to choose a time.</Typography>
                        </Box>
                        <Box width="25%">
                            <img width="120px" src="https://images.ctfassets.net/k0lk9kiuza3o/1ZKrsdmQ5ZZ2TkReP1Z5z9/7cc5d99f87e02bdac85d4c4f0e97f65c/Vector__10_.svg" alt="" />
                            <Typography variant="h6" marginTop="2%">Round Robin</Typography>
                            <Typography variant="body2">Let your guests choose a team member.</Typography>
                        </Box>
                    </Box>
                </Box>

                <Box display="flex" justifyContent="center" gap={4} marginBottom="8%" color='#0b3558'>
                    <Link to="/">
                        <Button href="/" variant="contained" color="primary" sx={{ borderRadius: 1,fontSize: '1rem', width: '160px', height: '60px' }}>
                            GET STARTED
                        </Button>
                    </Link>
                    <Link to="/">
                        <Button href="/" variant="contained" color="primary" sx={{ borderRadius: 1,fontSize: '1rem', width: '160px', height: '60px' }}>
                            LOG IN
                        </Button>
                    </Link>
                </Box>
            </Box>
        </>
    );
}
export default HomePage;
