import { useState } from 'react';
import { Typography, TextField, Button, Grid, Container, Box, FormControl, FormHelperText } from '@mui/material';
import NavBar from '../component/NavBar.jsx';
import Footer from '../component/Footer.jsx';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';

export function LogInPage() {
    const navigate = useNavigate();
    const { logIn, user, error } = useUser(); // Extract error from context
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        logIn({ email, password });

        if (user) {
            navigate('/userdashboard');
        }
    };

    return (
        <>
            <Box><NavBar /></Box>
            <Container maxWidth="lg" sx={{ textAlign: 'left', marginTop: '8%', marginBottom: '7%' }}>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h2" fontWeight="bold">
                            Welcome back
                        </Typography>
                        <FormControl fullWidth margin="normal">
                            <TextField
                                fullWidth
                                label="Email Address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                sx={{ marginTop: 2 }}
                                error={!!error}
                            />
                            <TextField
                                fullWidth
                                label="Password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                sx={{ marginTop: 2 }}
                                error={!!error}
                            />
                            {error && <Typography variant="body2" sx={{ color: 'red', marginTop: 1 }}>{error}</Typography>}
                            <Button
                                variant="contained"
                                color="primary"
                                sx={{ width: '100%', marginTop: 2 }}
                                onClick={handleLogin} // Handle login on button click
                            >
                                Log In
                            </Button>
                            <FormHelperText>
                                Don’t have an account?{" "}
                                <Link to="/signup" style={{ color: "#486bff" }}>
                                    Sign Up
                                </Link>
                            </FormHelperText>
                        </FormControl>
                    </Grid>
                </Grid>
            </Container>
            <Footer />
        </>
    );
}
