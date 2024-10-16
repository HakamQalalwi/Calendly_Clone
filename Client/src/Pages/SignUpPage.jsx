import {Box, Container, Grid, Typography, TextField, Button, Link} from "@mui/material";
import NavBar from "../component/NavBar.jsx";
import Footer from "../component/Footer.jsx";
import {Link as RouterLink, useLocation} from 'react-router-dom';
import { useState } from 'react';

function SignUp() {
    const location = useLocation();
    const [email, setEmail] = useState(location.state?.email || '');

    return (
        <>
            <Box><NavBar /></Box>
            <Container maxWidth="lg" sx={{ marginTop: "200px", marginBottom: "7%" }}>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <Box>
                            <Typography variant="h4" fontWeight="bold" gutterBottom>
                                Sign Up
                            </Typography>
                            <form>
                                <TextField fullWidth label="User Name" variant="outlined" name="displayName" required sx={{ marginBottom: 2 }} />
                                <TextField
                                    fullWidth
                                    label="Email Address"
                                    variant="outlined"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    sx={{ marginBottom: 2 }}
                                />
                                <TextField fullWidth label="Password" type="password" variant="outlined" name="password" required sx={{ marginBottom: 2 }} />
                                <TextField fullWidth label="Confirm Password" type="password" variant="outlined" name="confirmPassword" required sx={{ marginBottom: 2 }} />
                                <Button type="submit" variant="contained" color="primary" sx={{ width: "100%" }}>
                                    Sign Up
                                </Button>
                                <Typography variant="body2" sx={{ marginTop: 2 }}>
                                    Do you have an account?{" "}
                                    <Link component={RouterLink}  to="/login" style={{ color: "#486bff" }}>
                                        Log In
                                    </Link>
                                </Typography>
                            </form>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            <Footer />
        </>
    );
}

export default SignUp;
