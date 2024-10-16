import { Box, Button, Typography } from "@mui/material";
import individual_2 from "../../assets/Individual-2.jpeg";
import {Link as RouterLink} from "react-router-dom";

const BookingLinkSection = () => (
    <Box display="flex" justifyContent="space-between" width="80%" margin="auto" marginBottom="7%">
        <Box width="45%">
            <img src={individual_2} alt="Booking link demonstration" width="100%" style={{ borderRadius: "8px" }} />
        </Box>
        <Box width="35%">
            <Typography variant="h6" color="primary">
                THE CALENDLY BOOKING LINK
            </Typography>
            <Typography variant="h5" fontWeight="bold">
                Save time with your own personalized booking links
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.5, marginTop: 2 }}>
                Time is a precious commodity. Calendly is the courteous way to book meetings and other appointments, because scheduling with just a few clicks makes the most of everyone’s time.
            </Typography>
            <Box mt={4}>
                <Button component={RouterLink}
                        to="/signup"
                        variant="contained"
                        color="primary">
                    Get Your Link
                </Button>
            </Box>
        </Box>
    </Box>
);

export default BookingLinkSection;
