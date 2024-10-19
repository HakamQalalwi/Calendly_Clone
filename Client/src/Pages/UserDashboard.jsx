import { Box, Button, Stack, Typography, IconButton } from '@mui/material';
import { useUser } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import LogOutButton from "../component/LogOutButton.jsx";
import { useData } from "../context/EventContext.jsx";
import SettingsIcon from '@mui/icons-material/Settings';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { useState } from 'react';

const DemoPaper = styled(Paper)(({ theme }) => ({
    width: '300px',
    height: '250px',
    padding: theme.spacing(4),
    borderRadius: '8px',
    borderTop: '4px solid #006bff',
    ...theme.typography.body2,
    textAlign: 'center',
    marginBottom: theme.spacing(2),
}));

function UserDashboard() {
    const { user } = useUser();
    const { userEvents } = useData();
    const navigate = useNavigate();
    const [copyEventLink, setCopyEventLink] = useState(null);

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

    return (
        <Box textAlign="center" marginTop="20px" position="relative">
            <Typography variant="h4" fontWeight="bold" marginBottom={3}>
                Welcome, <span style={{ color: "#006bff" }}>{user?.displayName || 'User'}</span>👋 Create your event.
            </Typography>
            <LogOutButton />
            <Button
                variant="contained"
                color="secondary"
                onClick={() => navigate("/create-event")}
                sx={{ marginTop: 2, marginBottom: 4 }}
            >
                Create New Event Type
            </Button>

            <Box marginBottom={4}>
                <Typography
                    variant="h5"
                    color="textPrimary"
                    sx={{ fontWeight: 'bold', fontSize: '1.5rem' }}
                >
                    {userEvents.length} {userEvents.length === 1 ? 'Event' : 'Events'}
                </Typography>
                {userEvents.length === 0 && (
                    <Typography variant="body1" color="textSecondary" sx={{ marginTop: 2 }}>
                        No events created yet.
                    </Typography>
                )}
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: 2,
                }}
            >
                {userEvents.length > 0 && userEvents.map((event, index) => (
                    <DemoPaper key={index} elevation={3}>
                        <Stack
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="center"
                            marginBottom={1}
                            spacing={1}
                        >
                            <IconButton size="small" sx={{ marginRight: 1 }}>
                                <SettingsIcon />
                            </IconButton>
                            <Typography variant="h6" fontWeight="bold">
                                {event.name || 'Event Name'}
                            </Typography>
                        </Stack>

                        <Typography variant="body2" color="textSecondary">
                            {event.duration || '30 mins'}, {event.location || 'One-on-One'}
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{ color: '#006bff', cursor: 'pointer', textDecoration: 'underline', marginTop: '8px' }}
                            onClick={() => handleCopy(event.link, event.id)}
                        >
                            {copyEventLink === event.id ? 'Copied!' : 'Share Link'}
                        </Typography>
                    </DemoPaper>
                ))}
            </Box>
        </Box>
    );
}

export default UserDashboard;
