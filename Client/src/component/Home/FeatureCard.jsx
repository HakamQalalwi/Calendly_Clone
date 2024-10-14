import { Box, Typography } from "@mui/material";

const FeatureCard = ({ title, description, icon }) => (
    <Box boxShadow={3} width="350px" p={5} textAlign="left" borderRadius={2}>
        <img src={icon} alt={`${title} icon`} />
        <Typography variant="h6" mt={4}>{title}</Typography>
        <Typography variant="body2" mt={2} color="text.secondary">
            {description}
        </Typography>
    </Box>
);

export default FeatureCard;
