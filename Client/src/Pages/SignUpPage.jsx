import { useState, useEffect } from 'react';
import { Box, Container, Grid, Typography, TextField, Button } from '@mui/material';
import NavBar from '../component/NavBar.jsx';
import Footer from '../component/Footer.jsx';
import {useNavigate, useLocation, Link} from 'react-router-dom';
import { useUser } from '../context/UserContext';

function SignUpPage() {
    const navigate = useNavigate();
    const { signUp } = useUser();
    const location = useLocation();

    const [formData, setFormData] = useState({
        displayName: '',
        email: '',
        password: '',
    });

    useEffect(() => {
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
        navigate('/userdashboard');
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
                        <Typography variant="body2" sx={{ marginTop: 2 }}>
                            You already have account?{" "}
                            <Link to="/login" style={{ color: "#486bff" }}>
                                Login
                            </Link>
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
            <Footer />
        </>
    );
}

export default SignUpPage;
