import { Box, Typography } from "@mui/material";
import FeatureCard from "./FeatureCard";

const features = [
    {
        title: "Create simple rules",
        description: "Let Calendly know your availability preferences and it'll do the work for you.",
        icon: "https://images.ctfassets.net/k0lk9kiuza3o/2lyAPMRxz8pdvkah5K6NFp/14203e7358e18e312b30c9674d8e72f1/icon-checkmark.svg"
    },
    {
        title: "Share your link",
        description: "Send guests your Calendly link or embed it on your website.",
        icon: "https://images.ctfassets.net/k0lk9kiuza3o/2lyAPMRxz8pdvkah5K6NFp/14203e7358e18e312b30c9674d8e72f1/icon-checkmark.svg"
    },
    {
        title: "Get booked",
        description: "They pick a time and the event is added to your calendar.",
        icon: "https://images.ctfassets.net/k0lk9kiuza3o/2lyAPMRxz8pdvkah5K6NFp/14203e7358e18e312b30c9674d8e72f1/icon-checkmark.svg"
    },
];

const FeaturesSection = () => (
    <Box width="80%" margin="auto" textAlign="center" my={8} color="#0b3558">
        <Typography variant="h5" color="#1d344b" mb={5}>
            We make it easy to get started
        </Typography>
        <Box display="flex" justifyContent="center" gap={8}>
            {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
            ))}
        </Box>
    </Box>
);

export default FeaturesSection;
