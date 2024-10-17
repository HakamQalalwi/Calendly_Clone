import { Box, Grid, Typography, Paper, styled } from '@mui/material';
import { useUser } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import LogOutButton from "../component/LogOutButton.jsx";

const EventTypeIcon = styled('img')({
    width: '50px',
    height: 'auto',
    marginBottom: '10px',
});

const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: "20px",
    borderRadius: 8,
    width: '100%',
    maxWidth: '350px',
    textAlign: 'center',
    margin: '10px',
    transition: 'transform 0.3s, box-shadow 0.3s',
    '&:hover': {
        transform: 'scale(1.05)',
        boxShadow: theme.shadows[6],
        cursor: 'pointer',
    },
}));

const StyledTypography = styled(Typography)(() => ({
    fontWeight: 'bold',
    fontSize: '1.2rem',
    lineHeight: '1.5',
    marginBottom: '8px',
}));

const DescriptionTypography = styled(Typography)(() => ({
    fontSize: '0.9rem',
    color: '#555',
    marginBottom: '4px',
}));

export function CreateEventPage() {
    const eventTypes = [
        {
            image: "https://assets.calendly.com/assets/frontend/media/one_on_one-c0ed81ea039b15906953.svg",
            title: "One-on-One",
            description: "One host with one invitee",
            goodFor: "Good for: coffee chats, 1:1 interviews, etc.",
            route: "/add-one-on-one"
        },
        {
            image: "https://assets.calendly.com/assets/frontend/media/group-eaa808c3bb66b614c714.svg",
            title: "Group",
            description: "One host with group of invitees",
            goodFor: "Good for: webinars, online classes, etc.",
            route: "/add-group-event"
        },
        {
            image: "https://assets.calendly.com/assets/frontend/media/collective-dff7740f53ebd8dd98cc.svg",
            title: "Collective",
            description: "More than one host with one invitee",
            goodFor: "Good for: panel interviews, group sales calls, etc.",
            route: "/add-collective-event"
        },
        {
            image: "https://assets.calendly.com/assets/frontend/media/round_robin-02aa170a63b896ec56e3.svg",
            title: "Round Robin",
            description: "One rotating host with one invitee",
            goodFor: "Good for: distributing incoming sales leads",
            route: "/add-round-robin-event"
        },
    ];

    const { user } = useUser();
    const navigate = useNavigate();
    const handleEventClick = (route) => {
        navigate(route);
    };

    return (
        <Box textAlign="center" marginTop="20px" position="relative">
            <Typography variant="h4" fontWeight="bold" marginBottom={3}>
                Welcome, <span style={{ color: "#006bff" }}>{user?.displayName || 'User'}</span>👋 Choose your
                event type to procced.
            </Typography>
            <LogOutButton/>
            <Box width="100%" height="100vh" display="flex" flexDirection="column" alignItems="center" padding="20px">
                <Grid container width="90%" spacing={2} sx={{ justifyContent: "center" }}>
                    {eventTypes.map((eventType, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <StyledPaper elevation={2} onClick={() => handleEventClick(eventType.route)}>
                                <EventTypeIcon src={eventType.image} alt={eventType.title} />
                                <StyledTypography variant="h6">{eventType.title}</StyledTypography>
                                <DescriptionTypography variant="body2">{eventType.description}</DescriptionTypography>
                                <DescriptionTypography variant="body2">{eventType.goodFor}</DescriptionTypography>
                            </StyledPaper>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
}
