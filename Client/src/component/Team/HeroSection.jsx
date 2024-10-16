import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import Team_1 from '../../assets/Team_1.webp';
import {Link} from "react-router-dom";

const HeroSection = () => {
    return (
        <Grid container spacing={2} sx={{ minHeight: '80vh', width: '90%', margin: 'auto', marginBottom: '40px' }}>
            <Grid item xs={12} md={6} display="flex" alignItems="center" justifyContent="center">
                <Stack spacing={3}>
                    <Typography variant="h5" color="primary">CALENDLY FOR TEAMS</Typography>
                    <Typography variant="h3" color="primary.dark">Smarter scheduling for teams</Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ width: '85%' }}>
                        Whether your team’s performance is measured by sales revenue, recruiting pipeline, or customer retention,
                        scheduling automation enables your team to hit goals faster.
                    </Typography>
                    <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} sx={{ alignItems: 'center' }}>
                        <Button component={Link} to="/signup" variant="contained" color="primary" sx={{ borderRadius: "8px", fontSize: '0.875rem', width: '170px', height: '60px' }}>
                            Start for free
                        </Button>

                    </Stack>
                </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
                <Box component="img" alt="Team 1" src={Team_1} sx={{ width: '100%', objectFit: 'cover' }} />
            </Grid>
        </Grid>
    );
};

export default HeroSection;
