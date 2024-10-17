import { Box, Button, Stack, Typography, IconButton } from '@mui/material';
import { useUser } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import LogOutButton from "../component/LogOutButton.jsx";
import { useData } from "../context/EventContext.jsx";
import SettingsIcon from '@mui/icons-material/Settings';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

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

    return (
        <Box textAlign="center" marginTop="20px" position="relative">
            <Typography variant="h4" fontWeight="bold" marginBottom={3}>
                Welcome, <span style={{ color: "#006bff" }}>{user?.displayName || 'User'}</span>👋 Create your
                event.
            </Typography>
            <LogOutButton />
            <Button
                variant="contained"
                color="secondary"
                onClick={() => navigate("/create-event")}
            >
                Create New Event Type
            </Button>
            <Box
                marginTop={4}
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 2,
                }}
            >
                <Typography>{userEvents.length}</Typography>
                {userEvents.length > 0 ? (
                    userEvents.map((event, index) => (
                        <DemoPaper key={index} elevation={3}>
                            <Stack direction="row" justifyContent="space-between" alignItems="center" marginBottom={1}>
                                <IconButton size="small">
                                    <SettingsIcon />
                                </IconButton>
                                <Typography variant="h6" fontWeight="bold">
                                    {event.name || 'Event Name'}
                                </Typography>
                            </Stack>
                            {/*<Typography variant="h6" fontWeight="bold">*/}
                            {/*    {event.type || 'Event Type'}*/}
                            {/*</Typography>*/}
                            <Typography variant="body2" color="textSecondary">
                                {event.duration || '30 mins'}, {event.location || 'One-on-One'}
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{ color: '#006bff', cursor: 'pointer', textDecoration: 'underline', marginTop: '8px' }}
                            >
                                <a
                                    href={`https://calendly.com/${event.link}`}
                                    target="_blank"
                                    style={{ textDecoration: 'none', color: '#006bff' }}
                                >
                                    Share link
                                </a>
                            </Typography>
                        </DemoPaper>
                    ))
                ) : (
                    <Typography variant="body1" color="textSecondary">
                        No events created yet.
                    </Typography>
                )}
            </Box>
        </Box>
    );
}

export default UserDashboard;
