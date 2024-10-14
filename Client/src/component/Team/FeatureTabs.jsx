import { Box, Tabs, Tab, Typography } from '@mui/material';

const FeatureTabs = () => (
    <Box sx={{ width: '90%', margin: 'auto', marginBottom: '40px' }}>

        <Box sx={{ textAlign: 'center', marginTop: '10vh' }}>
            <Typography variant="h6" color="primary.main">FEATURES</Typography>
        </Box>

        <Typography variant="h3" align="center" sx={{ marginBottom: '10vh', marginTop: '5vh' }}>
            Favorite Team Features
        </Typography>


        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Tabs centered>
                <Tab label="Team Scheduling Pages" />
                <Tab label="Automated Workflow" />
                <Tab label="Round Robin Events" />
                <Tab label="Salesforce Integration" />
            </Tabs>
        </Box>
    </Box>
);

export default FeatureTabs;
