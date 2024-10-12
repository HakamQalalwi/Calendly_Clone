import NavBar from "../component/NavBar.jsx";
import {
  Box,
  Button,
  Grid,
  Typography,
  Tabs,
  Tab,
  Stack,
} from '@mui/material';
import team_standardization from '../assets/team_standardization.webp';
import Team_1 from '../assets/Team_1.webp';
import Team_2 from '../assets/Team_2.jpg';
import Team_3 from '../assets/Team_3.webp';
import smartSchedule from '../assets/smartSchedule.png';
import plans from '../assets/plans.png';

import LogoMotion from "../component/LogoMotion.jsx";


export const TeamsPage = () => {
  return (
      <>
        <Box>
          <NavBar />
        </Box>

        <Box sx={{ margin: 'auto', justifyContent: 'center', marginTop: '105px' }}>
          {/* Section 1 */}
          <Grid container spacing={2} sx={{ minHeight: '80vh', width: '90%', margin: 'auto', marginBottom: '40px' }}>
            <Grid item xs={12} md={6} display="flex" alignItems="center" justifyContent="center">
              <Stack spacing={3}>
                <Typography variant="h5" color="primary">
                  CALENDLY FOR TEAMS
                </Typography>
                <Typography variant="h3" color="primary.dark">
                  Smarter scheduling for teams
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ width: '85%' }}>
                  Whether your team’s performance is measured by sales revenue, recruiting pipeline, or customer retention,
                  scheduling automation enables your team to hit goals faster.
                </Typography>
                <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} sx={{ alignItems: 'center' }}>
                  <Button variant="contained" color="primary" sx={{ borderRadius: "8px",fontSize: '0.875rem', width: '170px', height: '60px' }}>
                    Start for free
                  </Button>
                  <Button
                      variant="outlined"
                      color="primary"
                      sx={{
                        borderRadius: "8px",
                        width: '170px',
                        height: '60px',
                        fontSize: '0.875rem',
                        padding: '8px 16px'
                      }}
                  >
                    Get A DEMO
                  </Button>
                </Stack>
              </Stack>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box component="img" alt="Team 1" src={Team_1} sx={{ width: '100%', objectFit: 'cover' }} />
            </Grid>
          </Grid>

          <LogoMotion />

          <Box textAlign="center">
            <Typography variant="h2" color="#1d344b" sx={{ fontWeight: '700' }}>
              The leader in collaborative scheduling
            </Typography>
          </Box>


          {/* Section 2: Speed of Connection */}
          <Grid container spacing={2} sx={{ minHeight: '40vh', width: '80%', marginLeft: '60px', marginBottom: '40px' }}>
            <Grid item xs={12} md={6} display="flex" alignItems="center" justifyContent="center">
              <Stack spacing={3}>
                <Typography variant="h5" color="primary">
                  SPEED OF CONNECTION
                </Typography>
                <Typography variant="h4" color="primary.dark">
                  Outperform the competition with faster connections
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  You can’t waste time when prospects, clients, and candidates express interest. Avoid missed opportunities by
                  automatically qualifying and routing website visitors to specific team members. You can also pool scheduling
                  availability together to offer more options to connect.
                </Typography>
              </Stack>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box component="img" alt="Team 2" src={Team_2} sx={{ height: '500px', objectFit: 'cover' }} />
            </Grid>
          </Grid>


          {/* Section 3: Time Management */}
          <Grid container spacing={2} sx={{ minHeight: '40vh', width: '80%', marginLeft: '120px', marginBottom: '40px' }}>
            <Grid item xs={12} md={6}>
              <Box component="img" alt="Team 3" src={Team_3} sx={{ height: '400px', objectFit: 'cover' }} />
            </Grid>

            <Grid item xs={12} md={6} display="flex" alignItems="center" justifyContent="center">
              <Stack spacing={3}>
                <Typography variant="h5" color="primary">
                  TIME MANAGEMENT
                </Typography>
                <Typography variant="h4" color="primary.dark">
                  Automate scheduling, improve team performance
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Scheduling automation eliminates time-consuming admin tasks so your team can focus on higher priorities. With
                  actionable insights into your team’s scheduling activities and integrations with your team’s favorite tools,
                  you can identify potential process improvements and empower your team to work more efficiently.
                </Typography>
              </Stack>
            </Grid>
          </Grid>

          {/* Section 4: Team Standardization */}
          <Grid container spacing={2} sx={{ minHeight: '40vh', width: '80%', marginLeft: '60px', marginBottom: '40px' }}>
            <Grid item xs={12} md={6} display="flex" alignItems="center" justifyContent="center">
              <Stack spacing={3}>
                <Typography variant="h5" color="primary">
                  TEAM STANDARDIZATION
                </Typography>
                <Typography variant="h4" color="primary.dark">
                  Improve the customer experience with consistent scheduling
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Managed Events let you assign and lock Event Type details — such as meeting descriptions, invitee questions, and notifications — so your team delivers a reliable and professional experience every time.
                </Typography>
              </Stack>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box component="img" alt="Team Standardization" src={team_standardization} sx={{ height: '500px', objectFit: 'cover' }} />
            </Grid>
          </Grid>

          {/* Tab Section */}
          <Box sx={{ width: '90%', margin: 'auto', marginBottom: '40px' }}>
            <Box sx={{ textAlign: 'center', marginTop: '10vh' }}>
              <Typography variant="h6" color="primary.main">
                FEATURES
              </Typography>
            </Box>
            <Typography variant="h3" align="center" sx={{ marginBottom: '10vh', marginTop: '5vh' }}>
              Favorite Team Features
            </Typography>

            <Tabs centered>
              <Tab label="Team Scheduling Pages" />
              <Tab label="Automated Workflow" />
              <Tab label="Round Robin Events" />
              <Tab label="Salesforce Integration" />
            </Tabs>
          </Box>

          {/* Image sections at the bottom */}
          <Box component="img" src={plans} sx={{ width: '90%', margin: 'auto', marginBottom: '40px' }} />
          <Box component="img" src={smartSchedule} sx={{ width: '100%' }} />
        </Box>
      </>
  );
};
