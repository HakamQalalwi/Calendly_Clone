import { Box, Button, Input, Typography } from "@mui/material";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import capture_1 from '../../assets/capture_1.png';

const HeroSection = () => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleSignUp = () => {
        navigate('/signup', { state: { email } });
    };

    return (
        <Box width="100%" margin="auto" mt={8} marginTop="8%">
            <Box width="80%" display="flex" justifyContent="space-between" margin="auto" mb={8}>
                <Box width="35%">
                    <Typography variant="h2" fontWeight="bold" color="#0b3558" sx={{ lineHeight: 1.2 }}>
                        Easy Scheduling Ahead
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ mt: 3, lineHeight: 1.5 }}>
                        Calendly is your hub for scheduling meetings professionally and efficiently, eliminating the hassle of back-and-forth emails so you can get back to work.
                    </Typography>
                    <Box display="flex" alignItems="center" mt={5}>
                        <Input
                            fullWidth
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            sx={{
                                width: '70%',
                                bgcolor: 'white',
                                borderRadius: 2,
                                mr: 2,
                                borderColor: '#0b3558',
                            }}
                        />
                        <Button variant="contained" color="primary" sx={{ textTransform: 'none', borderRadius: 2 }} onClick={handleSignUp}>
                            Sign Up
                        </Button>
                    </Box>
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                        Create your free account. No credit card required.
                    </Typography>
                </Box>
                <Box width="45%">
                    <img src={capture_1} alt="Hero section image" style={{ width: '100%', borderRadius: '8px' }} />
                </Box>
            </Box>
        </Box>
    );
};

export default HeroSection;
