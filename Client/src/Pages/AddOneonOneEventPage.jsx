// AddOneonOneEventPage.jsx
import {
    Box, Button, Typography, MenuItem, TextField, Select,
    FormControl, Stack, Grid, Paper
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useData } from "../context/EventContext.jsx";

function AddOneonOneEventPage() {
    const navigate = useNavigate();
    const { eventData, setEventData, createEvent, updateEvent, selectedEvent, setSelectedEvent } = useData();

    useEffect(() => {
        if (selectedEvent){
            setEventData(selectedEvent)
        }else {
            setEventData({
                name: '',
                type: 'One on One',
                location: '',
                description: '',
                link: '',
                startDate: '',
                duration: '',
                availableSpots: ''
            })
        }
    }, [selectedEvent, setEventData]);
    const handleChange = (e) => {
        setEventData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (selectedEvent) {
            updateEvent(eventData);
            setSelectedEvent(null);
        } else {
            createEvent({ ...eventData, id: Date.now(), availableSpots: undefined });
            setEventData({
                name: '',
                type: 'One on One',
                location: '',
                description: '',
                link: '',
                startDate: '',
                duration: '',
            });
        }
        navigate("/userdashboard");
    };


    return (
        <Box
            width="100vw"
            height="100vh"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            sx={{ backgroundColor: "#f0f4f8", position: "relative" }}

        >
            <Button
                variant="contained"
                sx={{ position: "absolute", top: "20px", left: "20px" }}
                onClick={() => navigate("/userdashboard")}
            >
                Dashboard
            </Button>
            <Paper elevation={3} sx={{ padding: 3, borderRadius: 2, width: "80%" }}>
                <form onSubmit={handleSubmit}>
                    <Stack spacing={2}>
                        <TextField
                            label="Event Name"
                            name="name"
                            value={eventData.name}
                            onChange={handleChange}
                            required
                        />
                        <TextField
                            label="Event Type"
                            name="type"
                            value="One on One"
                            disabled
                        />
                        <FormControl>
                            <Select
                                name="location"
                                value={eventData.location}
                                onChange={handleChange}
                                required
                            >
                                <MenuItem value="Microsoft Teams">Microsoft Teams</MenuItem>
                                <MenuItem value="In-person meeting">In-person meeting</MenuItem>
                                <MenuItem value="Google Meet">Google Meet</MenuItem>
                                <MenuItem value="Phone call">Phone call</MenuItem>
                                <MenuItem value="Webex">Webex</MenuItem>
                                <MenuItem value="Zoom">Zoom</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField
                            label="Description"
                            name="description"
                            value={eventData.description}
                            onChange={handleChange}
                            multiline
                            rows={3}
                            required
                        />
                        <TextField
                            label="Event Link"
                            name="link"
                            value={eventData.link}
                            onChange={handleChange}
                            required
                        />
                        <TextField
                            label="Start Date"
                            type="date"
                            name="startDate"
                            value={eventData.startDate}
                            onChange={handleChange}
                            InputLabelProps={{ shrink: true }}
                            required
                        />
                        <FormControl>
                            <Select
                                name="duration"
                                value={eventData.duration}
                                onChange={handleChange}
                                required
                            >
                                <MenuItem value="15min">15 min</MenuItem>
                                <MenuItem value="30min">30 min</MenuItem>
                                <MenuItem value="45min">45 min</MenuItem>
                                <MenuItem value="60min">60 min</MenuItem>
                            </Select>
                        </FormControl>
                        <Stack direction="row" spacing={2}>
                            <Button
                                variant="contained"
                                color="error"
                                onClick={() => navigate("/userdashboard")}
                            >
                                Cancel
                            </Button>

                            <Button type="submit" variant="contained" color="primary">
                                {selectedEvent ? "Update" : "Create"}
                            </Button>
                        </Stack>
                    </Stack>
                </form>
            </Paper>
        </Box>
    );
}

export default AddOneonOneEventPage;
