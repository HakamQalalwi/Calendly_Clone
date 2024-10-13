import { Box, Button, Typography, Grid } from "@mui/material";
import NavBar from "../component/NavBar.jsx";
import individual_1 from "../assets/Individual-1.jpeg";
import individual_2 from "../assets/Individual-2.jpeg";
import individual_3 from "../assets/individual_3.jpeg";
import individual_4 from "../assets/individual_4.jpeg";
import individual_5 from "../assets/individual_5.jpeg";
import individual_6 from "../assets/individual_6.jpeg";
import Footer from "../component/Footer.jsx";

function IndividualsPage() {
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

    return (
        <>
            <Box><NavBar/></Box>
            <Box width="100%" margin="auto" marginTop="10%">
                <Box width="80%" display="flex" justifyContent="space-between" margin='auto' marginBottom="7%" >
                    {/* Left Section */}
                    <Box width="40%" marginTop="10%">
                        <Typography variant="h3" component="h3" fontWeight="bold" color="#0b3558">
                            The genius way to work
                        </Typography>
                        <Typography variant="h3" component="h3" fontWeight="bold" color="#0b3558">
                            <span style={{ color: "#006bff" }}>better</span>
                        </Typography>
                        <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.5, marginTop: 4 }}>
                            Calendly makes it easy to work smarter when you’re working solo. Meetings, sessions, and appointments become more efficient ways to achieve success and accomplish goals.
                        </Typography>
                        <Box display="flex" width="100%" textAlign="left" mt={4} alignItems="center">
                            <Button variant="contained" color="primary" sx={{ padding: '10px 20px', fontSize: '1rem', textTransform: 'none', width: '180px', height: '50px' }}>
                                Sign up for free
                            </Button>
                        </Box>
                    </Box>

                    {/* Right Section with Image */}
                    <Box width="50%">
                        <img width="100%" src={individual_1} alt="image_1" style={{ borderRadius: "8px" }} />
                    </Box>
                </Box>
                    {/* Second Box */}
                <Box width="80%" display="flex" justifyContent="space-between" margin='auto' marginBottom="7%">
                    <Box width="45%">
                        <img src={individual_2} alt="image_2" width="100%" style={{ borderRadius: "8px" }} />
                    </Box>
                    <Box width="35%">
                        <Typography variant="h6" color="primary">
                            THE CALENDLY BOOKING LINK
                        </Typography>
                        <Typography variant="h5" fontWeight="bold">
                            Save time with your own personalized booking links
                        </Typography>
                        <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.5, marginTop: 2 }}>
                            Time is a precious commodity. Calendly is the courteous way to
                            book meetings and other appointments, because scheduling with
                            just a few clicks makes the most of everyone’s time.
                        </Typography>
                        <Box display="flex" width="100%" textAlign="left" mt={4} alignItems="center">
                            <Button variant="contained" color="primary" size="large">
                                Get Your Link
                            </Button>
                        </Box>
                    </Box>
                </Box>

                </Box>

                {/* Integration Section */}
            <Box width="100%" margin="auto" marginTop="6%">
                <Box width="80%" margin="auto" display="flex" flexDirection="column" alignItems="center" marginBottom="7%">
                    <Typography variant="h2" fontWeight="bold" gutterBottom>
                        Do more with our integrations
                    </Typography>
                    <Typography variant="body1" color="text.secondary" align="center" sx={{ lineHeight: 1.5, marginBottom: 4 }}>
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
                {/* Footer Section */}
            <Box width='80%' margin="auto" textAlign="center" marginBottom="9%" color='#0b3558'>
                <Typography variant="h5" color="#1d344b">The right Calendly for the work you do</Typography>
                <Box display="flex" justifyContent="center" gap={8} marginTop="5%">
                    {solutionBox.map((item, index) => (
                        <Box key={index} width="250px" textAlign="left">
                            <img src={item.imageUrl} alt={item.imageAlt} style={{ width: "100%", borderRadius: "8px" }} />
                            <Typography variant="h6" marginTop={2}>{item.title}</Typography>
                            <Typography variant="body2" color="textSecondary">{item.description}</Typography>
                        </Box>
                    ))}
                </Box>
            </Box>
            <Footer />
        </>

    );
}

export default IndividualsPage;
