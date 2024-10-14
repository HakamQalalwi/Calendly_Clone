import { Box, Button, Grid, Typography, Paper, Link } from '@mui/material';
import { styled } from '@mui/system';

const EventTypeIcon = styled('img')({
    width: '40px',
    height: 'auto',
});

const StyledPaper = styled(Paper)({
    padding: "20px",
    borderRadius: 8,
    width: '80%',
    maxWidth: '400px',
    textAlign: 'center',
    margin: '10px',
});

const StyledTypography = styled(Typography)({
    fontWeight: 'bold',
    fontSize: '1rem',
    lineHeight: '1.5',
});

const DescriptionTypography = styled(Typography)({
    fontSize: '0.875rem', // Slightly larger font size for better visibility
    color: 'textSecondary',
});

export function CreateEventPage () {
    const eventTypes = [
        {
            image: "https://assets.calendly.com/assets/frontend/media/one_on_one-c0ed81ea039b15906953.svg",
            title: "One-on-One",
            description: "One host with one invitee",
            goodFor: "Good for: coffee chats, 1:1 interviews, etc.",
        },
        {
            image: "https://assets.calendly.com/assets/frontend/media/group-eaa808c3bb66b614c714.svg",
            title: "Group",
            description: "One host with group of invitees",
            goodFor: "Good for: webinars, online classes, etc.",
        },
        {
            image: "https://assets.calendly.com/assets/frontend/media/collective-dff7740f53ebd8dd98cc.svg",
            title: "Collective",
            description: "More than one host with one invitee",
            goodFor: "Good for: panel interviews, group sales calls, etc.",
        },
        {
            image: "https://assets.calendly.com/assets/frontend/media/round_robin-02aa170a63b896ec56e3.svg",
            title: "Round Robin",
            description: "One rotating host with one invitee",
            goodFor: "Good for: distributing incoming sales leads",
        },
    ];

    return (
        <Box width="100%" height="100vh" display="flex" flexDirection="column" alignItems="center" padding="20px">
            {/* Header */}
            <Box width="90%" padding="1%" marginBottom="2%">
                <Grid container justifyContent="space-between" alignItems="center">
                    <Grid item>
                        <Link to="/">
                            <Button
                                variant="contained"
                                color="primary"
                                sx={{
                                    width: '120px',
                                    borderRadius: 2,
                                    padding: '8px 16px',
                                    fontSize: '0.875rem',
                                    textTransform: 'none',
                                    boxShadow: 2,
                                    '&:hover': {
                                        backgroundColor: '#0a2c4e',
                                    },
                                }}
                            >
                                Dashboard
                            </Button>
                        </Link>
                    </Grid>
                    <Grid item>
                        <Typography variant="h6" fontWeight="bold">
                            Create New Event Type
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
            <Grid container width="90%" spacing={2} sx={{ justifyContent: "center" }}>
                {eventTypes.map((eventType, index) => (
                    <Grid item xs={2} md={5} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <StyledPaper elevation={2}>
                            <EventTypeIcon src={eventType.image} alt={eventType.title} />
                            <StyledTypography variant="h6">{eventType.title}</StyledTypography>
                            <DescriptionTypography variant="body2">{eventType.description}</DescriptionTypography>
                            <DescriptionTypography variant="body2">{eventType.goodFor}</DescriptionTypography>
                        </StyledPaper>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};
