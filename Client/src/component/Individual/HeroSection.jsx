import { Box, Button, Typography } from "@mui/material";
import individual_1 from "../../assets/Individual-1.jpeg";

const HeroSection = () => (
    <Box display="flex" justifyContent="space-between" width="80%" margin="auto" marginTop="10%" marginBottom="7%">
        <Box width="40%" marginTop="10%">
            <Typography variant="h3" fontWeight="bold" color="#0b3558">
                The genius way to work
                <span style={{ color: "#006bff" }}> better</span>
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.5, marginTop: 4 }}>
                Calendly makes it easy to work smarter when you’re working solo. Meetings, sessions, and appointments become more efficient ways to achieve success and accomplish goals.
            </Typography>
            <Box mt={4}>
                <Button variant="contained" color="primary" sx={{ padding: '10px 20px', fontSize: '1rem', textTransform: 'none', width: '180px', height: '50px' }}>
                    Sign up for free
                </Button>
            </Box>
        </Box>
        <Box width="50%">
            <img src={individual_1} alt="Individual working" style={{ width: '100%', borderRadius: '8px' }} />
        </Box>
    </Box>
);

export default HeroSection;
