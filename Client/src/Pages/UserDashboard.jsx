import {
    Box, Button, Stack, Typography, IconButton, Paper, Grid
} from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import { useNavigate } from 'react-router-dom';
import { useData } from '../context/EventContext.jsx';
import EditIcon from '@mui/icons-material/Edit';
import { styled } from '@mui/material/styles';
import { useUser } from "../context/UserContext.jsx";
import { useState } from "react";


const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(3),
    borderRadius: 8,
    borderTop: '4px solid #006bff',
    transition: 'transform 0.3s, box-shadow 0.3s',
    '&:hover': {
        transform: 'scale(1.05)',
        boxShadow: theme.shadows[6],
        cursor: 'pointer',
    },
}));

const EventName = styled(Typography)(() => ({
    fontWeight: 'bold',
    fontSize: '1.2rem',
}));

const EventDetails = styled(Typography)(() => ({
    color: '#555',
    fontSize: '0.9rem',
}));

function UserDashboard() {
    const { userEvents, setSelectedEvent } = useData();
    const navigate = useNavigate();
    const [copyEventLink, setCopyEventLink] = useState(null);
    const { user } = useUser();

    const handleEdit = (event) => {
        setSelectedEvent(event);
        navigate("/add-one-on-one");
    };

    const handleCopy = (link, eventId) => {
        navigator.clipboard.writeText(link)
            .then(() => {
                setCopyEventLink(eventId);
                setTimeout(() => setCopyEventLink(null), 100);
            })
            .catch(err => {
                console.error('Failed to copy: ', err);
            });
    };

    const handleShareLink = (eventId) => {
        navigate(`/userdashboard/${eventId}`);
    };


    return (
        <Box textAlign="center" marginTop="20px">
            <Typography variant="h4" fontWeight="bold" marginBottom={3}>
                Hi <span style={{ color: "#006bff" }}>{user?.displayName || 'User'}</span>
            </Typography>
            <Typography variant="h4" fontWeight="bold" marginBottom={3}>
                Your Events
            </Typography>
            <Button
                variant="contained"
                color="secondary"
                onClick={() => navigate("/create-event")}
                sx={{ marginBottom: 4 }}
            >
                Create New Event
            </Button>

            {userEvents.length === 0 ? (
                <Typography variant="body1" color="textSecondary">
                    No events created yet.
                </Typography>
            ) : (
                <Grid container spacing={2} justifyContent="center">
                    {userEvents.map((event) => (
                        <Grid item xs={12} sm={6} md={4} key={event.id}>
                            <StyledPaper elevation={3}>
                                <Stack direction="row" justifyContent="space-between" alignItems="center">
                                    <EventName>Event Name: {event.name}</EventName>
                                    <IconButton
                                        onClick={() => handleEdit(event)}
                                        size="small"
                                        sx={{ color: '#006bff' }}
                                    >
                                        <EditIcon />
                                    </IconButton>
                                </Stack>
                                <EventDetails sx={{ marginTop: 1 }}>
                                    <span style={{ fontWeight: "bold" }}>Event Link:</span> {event.link}
                                </EventDetails>


                                <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '8px' }}>
                                    <Stack direction="row" spacing={1} alignItems="center">
                                        <Typography
                                            variant="body2"
                                            sx={{ color: '#006bff', cursor: 'pointer', textDecoration: 'underline' }}
                                            onClick={() => handleCopy(event.link, event.id)}
                                        >
                                            {copyEventLink === event.id ? 'Copied!' : 'Copy Link'}
                                        </Typography>

                                        <Typography
                                            variant="body2"
                                            sx={{ color: '#006bff', cursor: 'pointer', textDecoration: 'underline', display: 'flex', alignItems: 'center' }}
                                            onClick={() => handleShareLink(event.id)}
                                        >
                                            <ShareIcon fontSize="small" sx={{ marginRight: '4px' }} /> Share Event
                                        </Typography>
                                    </Stack>
                                </Box>

                                <EventDetails sx={{ marginTop: 1 }}>
                                    <span style={{ fontWeight: "bold" }}>Event Duration & Location:</span> {event.duration}, {event.location}
                                </EventDetails>
                                <EventDetails sx={{ marginTop: 1 }}>
                                    <span style={{ fontWeight: "bold" }}>Event Start Date: </span> {event.startDate}
                                </EventDetails>
                            </StyledPaper>
                        </Grid>
                    ))}
                </Grid>
            )}
        </Box>
    );
}

export default UserDashboard;
