import {Box, Button, Link, Typography} from "@mui/material";
import {Link as RouterLink} from "react-router-dom";

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
                <Button component={RouterLink}
                        to="/"
                        variant="contained"
                        color="primary"
                       >
                    View all
                </Button>
                <Button component={RouterLink}
                        to="/signup"
                        variant="contained"
                        color="primary">
                        Start For Free
                </Button>
            </Box>
        </Box>
    </Box>
);

export default IntegrationSection;
