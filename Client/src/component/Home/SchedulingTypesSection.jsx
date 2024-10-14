import { Box, Typography } from "@mui/material";
import oneToOneIcon from "../../assets/one-To-One-Icon.png";
import groupIcon from "../../assets/groupIcon.png";
import collectiveIcon from "../../assets/collective-icon.png";
import roundRobinIcon from "../../assets/round-robin-icon.png";

const schedulingTypes = [
    { title: "One-on-One", description: "Meet with others individually.", iconSrc: oneToOneIcon },
    { title: "Group", description: "Host many attendees in one meeting.", iconSrc: groupIcon },
    { title: "Collective", description: "Allow your team to choose a time.", iconSrc: collectiveIcon },
    { title: "Round Robin", description: "Let your guests choose a team member.", iconSrc: roundRobinIcon }
];

const SchedulingTypesSection = () => (
    <Box width="80%" margin="auto" textAlign="center" my={8} color="#0b3558">
        <Typography variant="h5" color="#1d344b" mb={5}>
            Scheduling for any meeting type
        </Typography>
        <Box display="flex" justifyContent="center" gap={10}>
            {schedulingTypes.map((type, index) => (
                <Box key={index} width="25%">
                    <img src={type.iconSrc} alt={`${type.title} icon`} width="120px" />
                    <Typography variant="h6" mt={2}>{type.title}</Typography>
                    <Typography variant="body2" color="text.secondary">{type.description}</Typography>
                </Box>
            ))}
        </Box>
    </Box>
);

export default SchedulingTypesSection;
