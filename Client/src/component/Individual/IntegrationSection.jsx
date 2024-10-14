import { Box, Button, Typography } from "@mui/material";

const IntegrationSection = () => (
    <Box width="100%" margin="auto" marginTop="6%" textAlign="center">
        <Box width="80%" margin="auto" marginBottom="7%">
            <Typography variant="h2" fontWeight="bold" gutterBottom>
                Do more with our integrations
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.5, marginBottom: 4 }}>
                Smart scheduling will change the way you – and your tools – work.
            </Typography>
            <Box display="flex" justifyContent="center" gap={1}>
                <Button variant="contained" color="primary" size="large">
                    View all
                </Button>
                <Button variant="contained" color="primary" size="large">
                    Start for free
                </Button>
            </Box>
        </Box>
    </Box>
);

export default IntegrationSection;
