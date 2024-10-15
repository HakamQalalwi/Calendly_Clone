import { useState } from "react";
import {Box, Typography, TextField, Button, Container, Grid, Link,} from "@mui/material";
import NavBar from "../component/NavBar.jsx";
import Footer from "../component/Footer.jsx";

function LogInPage(){
    const [state, setState] = useState({
        email: "",
        password: "",
    });

    const { email, password } = state;

    return (
        <>
            <Box><NavBar /></Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', overflow: 'hidden' }}>
                <Box sx={{ display: 'flex', flex: '1', justifyContent: 'center', alignItems: 'center' }}>
                    <Container maxWidth="sm">
                        <Box textAlign="center" mb={6}>
                            <Typography variant="h2" fontWeight="bold" color="#0b3558">
                                Welcome back
                            </Typography>
                            <Typography variant="h2" fontWeight="bold" color="#0b3558">
                                to <span style={{ color: "#006bff" }}>Calendly</span>
                            </Typography>
                            <Typography variant="body1" color="text.secondary" sx={{ mt: 4 }}>
                                Log in to your account to get back to your hub for scheduling meetings.
                            </Typography>
                        </Box>

                        <form>
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <Typography variant="body2" mb={1}>Email Address</Typography>
                                    <TextField fullWidth type="email" name="email" value={email} placeholder="Enter your email" required/>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="body2" mb={1}>Password</Typography>
                                    <TextField fullWidth type="password" name="password" value={password} placeholder="Enter your password" required/>
                                </Grid>
                                <Grid item xs={12}>
                                    <Button type="submit" fullWidth variant="contained" sx={{ backgroundColor: "#486bff", color: "white", height: "50px", marginLeft:"7px"}}>
                                        Log In
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>

                        <Box textAlign="center" mt={4}>
                            <Typography variant="body2">
                                Don’t have an account?{" "}
                                <Link to="/signup" style={{ color: "#486bff", textDecoration: "none" }}>
                                    Sign Up
                                </Link>
                            </Typography>
                        </Box>
                    </Container>
                </Box>
                <Footer />
            </Box>
        </>
    );
};

export default LogInPage;
