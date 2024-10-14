import { Box, Typography } from "@mui/material";
import individual_3 from "../../assets/individual_3.jpeg";
import individual_4 from "../../assets/individual_4.jpeg";
import individual_5 from "../../assets/individual_5.jpeg";
import individual_6 from "../../assets/individual_6.jpeg";

const solutionBox = [
    {
        imageUrl: individual_3,
        imageAlt: "Sales",
        title: "Sales",
        description: "Get to your best leads faster",
    },
    {
        imageUrl: individual_4,
        imageAlt: "Recruiting",
        title: "Recruiting",
        description: "Less emailing, more interviews",
    },
    {
        imageUrl: individual_5,
        imageAlt: "Customer Success",
        title: "Customer Success",
        description: "Connect with customers when it matters",
    },
    {
        imageUrl: individual_6,
        imageAlt: "Education",
        title: "Education",
        description: "Boost student success",
    },
];

const SolutionSection = () => (
    <Box width="80%" margin="auto" textAlign="center" marginBottom="9%" color='#0b3558'>
        <Typography variant="h5" color="#1d344b">The right Calendly for the work you do</Typography>
        <Box display="flex" justifyContent="center" gap={8} marginTop="5%">
            {solutionBox.map((item, index) => (
                <Box key={index} width="250px" textAlign="left">
                    <img src={item.imageUrl} alt={item.imageAlt} style={{ width: "100%", borderRadius: "8px" }} />
                    <Typography variant="h6" marginTop={2}>{item.title}</Typography>
                    <Typography variant="body2" color="text.secondary">{item.description}</Typography>
                </Box>
            ))}
        </Box>
    </Box>
);

export default SolutionSection;
