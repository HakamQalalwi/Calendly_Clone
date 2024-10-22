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
import {DeleteForeverOutlined} from "@mui/icons-material";
import LogOutButton from "../component/LogOutButton.jsx";
import EventIcon from '@mui/icons-material/Event';


const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(3),
    borderRadius: 8,
    borderTop: '4px solid #006bff',
    width: '450px',
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
    const { userEvents, setSelectedEvent, deleteEvent } = useData();
    const navigate = useNavigate();
    const [copyEventLink, setCopyEventLink] = useState(null);
    const { user } = useUser();

    const handleEdit = (event) => {
        setSelectedEvent(event);
        navigate("/add-one-on-one");
    };

    const handleDelete = (event) =>{
        deleteEvent(event);
    }

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
            <LogOutButton/>
            <Typography variant="h4" fontWeight="bold" marginBottom={3}>
                Hi 👋 <span style={{ color: "#006bff" }}>{user?.displayName || 'User'}</span>
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
                <Box textAlign="center" mt={4}>
                    <EventIcon style={{ fontSize: 50, color: '#006bff' }} />
                    <Typography variant="h5" fontWeight="bold" mt={2}>
                        Simplify your scheduling with event types
                    </Typography>
                    <Typography variant="body1" color="textSecondary" mt={1}>
                        Create event types for meetings you'll want to schedule regularly, like product
                        demos, customer calls, office hours, and more.
                    </Typography>
                </Box>
            ) : (
                <Grid container spacing={2} justifyContent="center">
                    {userEvents.map((event) => (
                        <Grid item key={event.id}>
                            <StyledPaper elevation={3}>
                                <Stack direction="row" justifyContent="flex-end">
                                    <IconButton
                                        onClick={() => handleEdit(event)}
                                        size="small"
                                        sx={{ color: '#006bff' }}
                                    >
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton
                                        onClick={() => handleDelete(event)}
                                        size="small"
                                        sx={{ color: '#006bff' }}
                                    >
                                        <DeleteForeverOutlined />
                                    </IconButton>
                                </Stack>
                                <EventName>Event Name: {event.name}</EventName>
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
                                    <span style={{ fontWeight: "bold" }}>Event Type:</span> {event.type}
                                </EventDetails>
                                <EventDetails sx={{ marginTop: 1 }}>
                                    <span style={{ fontWeight: "bold" }}>Event Duration:</span> {event.duration}
                                </EventDetails>
                                <EventDetails sx={{ marginTop: 1 }}>
                                    <span style={{ fontWeight: "bold" }}>Location:</span> {event.location}
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
