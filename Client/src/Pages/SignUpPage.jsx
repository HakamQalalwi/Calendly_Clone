import { useState, useEffect } from 'react';
import { Box, Container, Grid, Typography, TextField, Button } from '@mui/material';
import NavBar from '../component/NavBar.jsx';
import Footer from '../component/Footer.jsx';
import { useNavigate, useLocation } from 'react-router-dom';
import { useUser } from '../context/UserContext';

function SignUpPage() {
    const navigate = useNavigate();
    const { signUp } = useUser(); // Use signUp from context
    const location = useLocation();

    const [formData, setFormData] = useState({
        displayName: '',
        email: '',
        password: '',
    });

    useEffect(() => {
        // Set the email from the location state if it exists
        if (location.state?.email) {
            setFormData((prev) => ({
                ...prev,
                email: location.state.email
            }));
        }
    }, [location.state]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        signUp(formData);
        navigate('/create-event');
    };

    return (
        <>
            <Box><NavBar /></Box>
            <Container maxWidth="lg" sx={{ marginTop: '200px', marginBottom: '7%' }}>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h4" fontWeight="bold" gutterBottom>
                            Sign Up
                        </Typography>
                        <form onSubmit={handleSubmit}>
                            <TextField
                                fullWidth
                                label="User Name"
                                name="displayName"
                                value={formData.displayName}
                                onChange={handleChange}
                                required
                                sx={{ marginBottom: 2 }}
                            />
                            <TextField
                                fullWidth
                                label="Email Address"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                sx={{ marginBottom: 2 }}
                            />
                            <TextField
                                fullWidth
                                label="Password"
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                sx={{ marginBottom: 2 }}
                            />
                            <Button type="submit" variant="contained" color="primary" sx={{ width: '100%' }}>
                                Sign Up
                            </Button>
                        </form>
                    </Grid>
                </Grid>
            </Container>
            <Footer />
        </>
    );
}

export default SignUpPage;
