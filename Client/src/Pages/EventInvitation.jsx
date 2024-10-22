import React from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import { useData } from '../context/EventContext.jsx';
import {Box, Typography, Paper, Button} from '@mui/material';
import { styled } from '@mui/material/styles';
import {useUser} from "../context/UserContext.jsx";

// Styled components
const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(3),
    borderRadius: 8,
    textAlign: 'center',
    maxWidth: 600,
    margin: '0 auto',
    marginTop: theme.spacing(5),
}));

function EventInvitation() {
    const { eventId } = useParams();
    const { userEvents } = useData();
    const { user } = useUser();
    const navigate = useNavigate();


    const event = userEvents.find((ev) => ev.id === Number(eventId));

    if (!event) {
        return <Typography variant="h6" color="error">Event not found.</Typography>;
    }

    return (
        <>
            {/* Container for the Dashboard button */}
            <Box
                width="100%"           // Full width to ensure it stretches across the page
                display="flex"         // Flexbox layout
                justifyContent="flex-start"  // Aligns the button to the left
                padding="20px"         // Adds padding for some space from the top
            >
                <Button
                    variant="contained"
                    onClick={() => navigate("/userdashboard")}
                >
                    Dashboard
                </Button>
            </Box>

            <StyledPaper elevation={3}>
                <Typography variant="h4" fontWeight="bold" gutterBottom>
                    You're Invited!
                </Typography>
                <Typography variant="h6" gutterBottom>
                    <span style={{ fontWeight: "bold" }}>Interviewer Name: </span>{user?.displayName || 'User'}
                </Typography>
                <Typography variant="h6" gutterBottom>
                    <span style={{ fontWeight: "bold" }}>Event Name:</span> {event.name}
                </Typography>
                <Typography variant="body1" color="textSecondary">
                    <span style={{ fontWeight: "bold" }}>Event Description:</span> {event.description}
                </Typography>
                <Typography variant="body1" color="textSecondary" marginTop={2}>
                    <span style={{ fontWeight: "bold" }}>Event Link:</span> {event.link}
                </Typography>
                <Typography variant="body1" color="textSecondary" marginTop={2}>
                    <span style={{ fontWeight: "bold" }}>Event Start Date: </span> {event.startDate}
                </Typography>
                <Typography variant="body1" color="textSecondary" marginTop={2}>
                    <span style={{ fontWeight: "bold" }}>Event Duration:</span> {event.duration}
                </Typography>
                <Typography variant="body1" color="textSecondary" marginTop={2}>
                    <span style={{ fontWeight: "bold" }}>Event Location:</span> {event.location}
                </Typography>
                <Typography
                    variant="body1"
                    sx={{ color: '#006bff', cursor: 'pointer', textDecoration: 'underline', marginTop: '8px' }}
                    onClick={() => window.open(event.link, '_blank')}
                >
                    Join Event
                </Typography>
            </StyledPaper>
        </>
    );
}

export default EventInvitation;
