import { useState } from "react";
import {
    Box,
    Button,
    Typography,
    MenuItem,
    TextField,
    Select,
    FormControl,
    Stack,
    Grid,
    Paper,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function AddOneonOneEventPage() {
    const navigate = useNavigate();
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
            sx={{ backgroundColor: "#f0f4f8" }} // Light background for better contrast
        >
            {/* Header */}
            <Box width="90%" padding="1%" marginBottom="2%">
                <Grid container justifyContent="space-between" alignItems="center">
                    <Grid item>
                        <Button
                            variant="contained"
                            color="primary"
                            sx={{
                                width: "120px",
                                borderRadius: 2,
                                padding: "8px 16px",
                                fontSize: "0.875rem",
                                textTransform: "none",
                                boxShadow: 3,
                                '&:hover': {
                                    backgroundColor: '#0a2c4e',
                                },
                            }}
                            onClick={() => navigate("/create-event")}
                        >
                            Dashboard
                        </Button>
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
                    <Paper elevation={3} sx={{ padding: 3, borderRadius: 2 }}>
                        <form>
                            <Stack spacing={2}>
                                <Box>
                                    <Typography variant="subtitle1" fontWeight="bold">Event Name*</Typography>
                                    <TextField
                                        name="name"
                                        fullWidth
                                        required
                                        onChange={handleChange}
                                        size="small"
                                        variant="outlined"
                                    />
                                </Box>

                                <Box>
                                    <Typography variant="subtitle1" fontWeight="bold">Location</Typography>
                                    <FormControl fullWidth>
                                        <Select
                                            name="location"
                                            value={eventData.location}
                                            onChange={handleChange}
                                            required
                                            size="small"
                                            variant="outlined"
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
                                    <Typography variant="subtitle1" fontWeight="bold">Description/Instructions</Typography>
                                    <TextField
                                        name="description"
                                        placeholder="Write a summary and any details your invitee should know about the event"
                                        fullWidth
                                        multiline
                                        rows={3}
                                        required
                                        onChange={handleChange}
                                        size="small"
                                        variant="outlined"
                                    />
                                </Box>

                                <Box>
                                    <Typography variant="subtitle1" fontWeight="bold">Event Link*</Typography>
                                    <Box display="flex" alignItems="center">
                                        <Typography>calendly.com/</Typography>
                                        <TextField
                                            name="link"
                                            fullWidth
                                            required
                                            onChange={handleChange}
                                            size="small"
                                            variant="outlined"
                                        />
                                    </Box>
                                </Box>

                                <Box>
                                    <Typography variant="subtitle1" fontWeight="bold">Date Range</Typography>
                                    <Grid container gap={1}>
                                        <TextField
                                            label="Start Date"
                                            type="date"
                                            name="startDate"
                                            required
                                            onChange={handleChange}
                                            size="small"
                                            variant="outlined"
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
                                            variant="outlined"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </Grid>
                                </Box>

                                <Box>
                                    <Typography variant="subtitle1" fontWeight="bold">Duration</Typography>
                                    <FormControl fullWidth>
                                        <Select
                                            name="duration"
                                            value={eventData.duration}
                                            onChange={handleChange}
                                            required
                                            size="small"
                                            variant="outlined"
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
                                            fontSize: "0.875rem",
                                            width: "100px",
                                            height: "40px",
                                            fontStyle: "normal",
                                            marginTop: "4px",
                                        }}
                                    >
                                        Cancel
                                    </Button>

                                    <Button
                                        href="/"
                                        variant="contained"
                                        color="primary"
                                        sx={{
                                            borderRadius: 1,
                                            fontSize: "0.875rem",
                                            width: "140px",
                                            height: "40px",
                                            marginTop: "4px",
                                        }}
                                    >
                                        Next
                                    </Button>
                                </Stack>
                            </Stack>
                        </form>
                    </Paper>
                </Grid>
                <Grid item xs={8} display="flex" justifyContent="center" alignItems="center">
                    <Paper
                        elevation={3}
                        sx={{
                            padding: 3,
                            borderRadius: 2,
                            width: "100%",
                            height: "100%",
                            overflow: "auto",
                            backgroundColor: "#ffffff",
                        }}
                    >
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            sx={{
                                borderBottom: "1px solid #e0e0e0",
                                paddingBottom: "8px",
                                marginBottom: "16px",
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
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
}

export default AddOneonOneEventPage;
