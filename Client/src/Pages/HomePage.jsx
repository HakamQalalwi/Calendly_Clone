import styles from './Home.module.css';
import capture_1 from '../../../../../JHF/JHF PROJECT/Calendly_Clone/calendly_clone/src/assets/capture_1.png';
import {Box, Button, Input, Link, Typography} from "@mui/material";
import CalendlyNavbar from "./CalendlyNavbar.jsx";

function HomePage(){
    return (
        <>
            <Box width="100%" margin="auto" marginTop="5%">
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
                        <Box display="flex" width="360px" textAlign="left" mt={8}>
                            <Box>
                                <Input fullWidth placeholder='Enter email' />
                            </Box>
                            <Box ml={-2}>
                                <Link  to='/'>
                                    <Button variant="contained" color="primary" height="50px">Sign Up</Button>
                                </Link>
                            </Box>
                        </Box>
                        <Box mt={1} textAlign="left" ml={1}>
                            <Typography variant="body2">Create your free account. No credit card required.</Typography>
                        </Box>
                    </Box>
                    <Box width="45%">
                        <img width="100%" src={capture_1} alt="" />
                    </Box>
                </Box>

                <Box padding="3%" width="100%" bgcolor="#f8f8f8" textAlign="center" marginBottom="8%">
                    <Box padding="2%" marginBottom="3%">
                        <Typography variant="h6" fontWeight="bold" color="#1d344b">
                            Simple scheduling for more than<br />
                            <span style={{ color: "blue" }}>10,000,000</span> users worldwide
                        </Typography>
                    </Box>
                    <Box height="50px" width="70%" margin="auto" display="flex" mt={2} alignItems="center" justifyContent="space-between">
                        {/* Logos */}
                        <Box className={styles.logo1}>
                            <img width="80px" height="100px" src="https://images.ctfassets.net/k0lk9kiuza3o/2hJsUFIbIVEEEKj6R2YwR1/87ce3bb8fb245387aa9c376db473c079/ebay__3_.svg" alt="" />
                        </Box>
                        <Box className={styles.logo2}>
                            <img width="120px" height="100px" src="https://images.ctfassets.net/k0lk9kiuza3o/6aSAknGku3oEB7jL7xEjLs/244ce9c4c65c8425c8695a50ece73a4d/logo-ancestry.svg" alt="" />
                        </Box>
                        <Box className={styles.logo3}>
                            <img width="80px" height="100px" src="https://images.ctfassets.net/k0lk9kiuza3o/5DR8HfsFIbSQZlUXsBqjWN/9d3183fc00336917d96cef59832b5403/Twilio-logo-red.svg" alt="" />
                        </Box>
                        <Box className={styles.logo4}>
                            <img width="50px" height="100px" src="https://images.ctfassets.net/k0lk9kiuza3o/Y595RQBDR1fW5blQZfd9l/f34b8ee5d40aa13af7b0fb015e86e8d3/Vector__19_.svg" alt="" />
                        </Box>
                        <Box className={styles.logo5}>
                            <img width="80px" height="100px" src="https://images.ctfassets.net/k0lk9kiuza3o/42drnxHfXrNOGKnVE9iA3r/7a7cf32f65bd03e0d1d48a6b02bde3d5/Loreal__1_.svg" alt="" />
                        </Box>
                        <Box className={styles.logo6}>
                            <img width="80px" height="100px" src="https://images.ctfassets.net/k0lk9kiuza3o/6PFPRWMRMxRXthyXYcDRiR/6f26aaf48346fb5dfa8318bb4a403e02/Compass__2_.svg" alt="" />
                        </Box>
                        <Box className={styles.logo7}>
                            <img width="80px" height="100px" src="https://images.ctfassets.net/k0lk9kiuza3o/4AUQ47IN6ZBtXtWXt65L3D/0e998b1376e2e3b2fc5489cfa7b3f11c/Zendesk_wordmark__1_.svg" alt="" />
                        </Box>
                        <Box className={styles.logo8}>
                            <img width="50px" height="100px" src="https://images.ctfassets.net/k0lk9kiuza3o/1Q5BQTaWAplnUICA96OWOw/be456a6b21b030de107077f2155ce467/Vector__22_.svg" alt="" />
                        </Box>
                    </Box>
                </Box>

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
                        <Button variant="outlined" color="primary">Get started</Button>
                    </Link>
                    <Link to="/">
                        <Button variant="outlined" color="default">Log in</Button>
                    </Link>
                </Box>
            </Box>
        </>
    );
}
export default HomePage;
