import { useState } from "react";
import {Box, Button, Typography, MenuItem, TextField, Select, FormControl, Stack, Grid, Link,} from "@mui/material";

function AddOneonOneEventPage() {
    const [eventData, setEventData] = useState({
        name: "",
        location: "",
        description: "",
        link: "",
        startDate: "",
        endDate: "",
        duration: "",
    });
    const handleChange = (e) => {
        setEventData({
            ...eventData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <Box
            width="100vw"
            height="100vh"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
        >
            {/* Header */}
            <Box width="90%" padding="1%" marginBottom="2%">
                <Grid container justifyContent="space-between" alignItems="center">
                    <Grid item>
                        <Link to="/create_event">
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
                            Add One-on-One Event Type
                        </Typography>
                    </Grid>
                </Grid>
            </Box>

            <Grid container width="90%" height="80vh" spacing={2}>
                <Grid item xs={4} display="flex" flexDirection="column" height="100%">
                    <Box
                        border="2px solid"
                        borderRadius={2}
                        p={2}
                        overflow="auto"
                        height="100%"
                    >
                        <form>
                            <Stack spacing={2}>
                                <Box>
                                    <Typography>Event Name*</Typography>
                                    <TextField
                                        name="name"
                                        fullWidth
                                        required
                                        onChange={handleChange}
                                        size="small"
                                    />
                                </Box>

                                <Box>
                                    <Typography>Location</Typography>
                                    <FormControl fullWidth>
                                        <Select
                                            name="location"
                                            value={eventData.location}
                                            onChange={handleChange}
                                            required
                                            size="small"
                                        >
                                            <MenuItem value="Microsoft Teams">Microsoft Teams</MenuItem>
                                            <MenuItem value="In-person meeting">In-person meeting</MenuItem>
                                            <MenuItem value="Google Meet">Google Meet</MenuItem>
                                            <MenuItem value="Phone call">Phone call</MenuItem>
                                            <MenuItem value="Webex">Webex</MenuItem>
                                            <MenuItem value="Zoom">Zoom</MenuItem>
                                            <MenuItem value="GoTo Meeting">GoTo Meeting</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>

                                <Box>
                                    <Typography>Description/Instructions</Typography>
                                    <TextField
                                        name="description"
                                        placeholder="Write a summary and any details your invitee should know about the event"
                                        fullWidth
                                        multiline
                                        rows={3}
                                        required
                                        onChange={handleChange}
                                        size="small"
                                    />
                                </Box>

                                <Box>
                                    <Typography>Event Link*</Typography>
                                    <Box display="flex" alignItems="center">
                                        <Typography>calendly.com/</Typography>
                                        <TextField
                                            name="link"
                                            fullWidth
                                            required
                                            onChange={handleChange}
                                            size="small"
                                        />
                                    </Box>
                                </Box>

                                <Box>
                                    <Typography fontWeight="bold">Date Range</Typography>
                                    <Grid container gap={1}>
                                        <TextField
                                            label="Start Date"
                                            type="date"
                                            name="startDate"
                                            required
                                            onChange={handleChange}
                                            size="small"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                        <TextField
                                            label="End Date"
                                            type="date"
                                            name="endDate"
                                            required
                                            onChange={handleChange}
                                            size="small"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </Grid>
                                </Box>

                                <Box>
                                    <Typography fontWeight="bold">Duration</Typography>
                                    <FormControl fullWidth>
                                        <Select
                                            name="duration"
                                            value={eventData.duration}
                                            onChange={handleChange}
                                            required
                                            size="small"
                                        >
                                            <MenuItem value="15min">15 min</MenuItem>
                                            <MenuItem value="30min">30 min</MenuItem>
                                            <MenuItem value="45min">45 min</MenuItem>
                                            <MenuItem value="60min">60 min</MenuItem>
                                            <MenuItem value="custom">Custom</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                                <Stack direction="row" spacing={1}>
                                    <Button
                                        href="/"
                                        variant="text"
                                        sx={{
                                            borderRadius: 1,
                                            fontSize: '0.875rem',
                                            width: '100px',
                                            height: '40px',
                                            fontStyle: 'normal',
                                            marginTop: '4px'
                                        }}
                                    >
                                        Cancel
                                    </Button>

                                    <Button href="/" variant="contained" color="primary" sx={{ borderRadius: 1,fontSize: '0.875rem', width: '140px', height: '40px' ,marginTop: '4px'}}>
                                        Next
                                    </Button>
                                </Stack>
                            </Stack>
                        </form>
                    </Box>
                </Grid>
                <Grid
                    item
                    xs={8}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Box
                        border="2px solid"
                        borderRadius={2}
                        p={3}
                        width="100%"
                        height="100%"
                        overflow="auto"
                    >
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            sx={{
                                borderBottom: "1px solid #e0e0e0",
                                paddingBottom: "8px",
                                marginBottom: "16px",
                                backgroundColor: "gray",
                                textAlign: "center",
                                fontWeight: "bold",
                            }}
                        >
                            This is a preview. To book an event.
                        </Typography>


                        <Typography variant="h5" fontWeight="bold">
                            {eventData.name || "Event name here"}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            {eventData.duration || "Set duration"} min
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            {eventData.location
                                ? `Location: ${eventData.location}`
                                : "Add a location for it to show here"}
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            sx={{
                                border: "1px solid #e0e0e0",
                                borderRadius: "8px",
                                padding: "10px",
                                minHeight: "80px",
                                backgroundColor: "#f5f5f5",
                                whiteSpace: "pre-line",
                            }}
                        >
                            {eventData.description || "Event description here"}
                        </Typography>
                    </Box>
                </Grid>

            </Grid>
        </Box>
    );
}

export default AddOneonOneEventPage;
