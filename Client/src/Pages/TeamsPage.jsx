import NavBar from "../component/NavBar.jsx";
import Footer from "../component/Footer.jsx";
import HeroSection from "../component/Team/HeroSection.jsx";
import Section from "../component/Team/Section.jsx";
import FeatureTabs from "../component/Team/FeatureTabs.jsx";
import ImageGallery from "../component/Team/ImageGallery.jsx";
import team_standardization from '../assets/team_standardization.webp';
import Team_2 from '../assets/Team_2.jpg';
import Team_3 from '../assets/Team_3.webp';
import LogoMotion from "../component/LogoMotion.jsx";
import { Box, Typography } from "@mui/material";

export const TeamsPage = () => {
  return (
      <>
        <NavBar />

        <Box sx={{ margin: 'auto', justifyContent: 'center', marginTop: '105px' }}>
          <HeroSection />

          <LogoMotion />

          <Box textAlign="center">
            <Typography variant="h2" color="#1d344b" sx={{ fontWeight: '700' }}>
              The leader in collaborative scheduling
            </Typography>
          </Box>

          {/* Uncomment the Section components */}
          <Section
              title="SPEED OF CONNECTION"
              subtitle="Outperform the competition with faster connections"
              content="You can’t waste time when prospects, clients, and candidates express interest. Avoid missed opportunities by automatically qualifying and routing website visitors to specific team members. You can also pool scheduling availability together to offer more options to connect."
              imgSrc={Team_2}
              imgAlt="Team 2"
          />

          <Section
              title="TIME MANAGEMENT"
              subtitle="Automate scheduling, improve team performance"
              content="Scheduling automation eliminates time-consuming admin tasks so your team can focus on higher priorities. With actionable insights into your team’s scheduling activities and integrations with your team’s favorite tools, you can identify potential process improvements and empower your team to work more efficiently."
              imgSrc={Team_3}
              imgAlt="Team 3"
          />

          <Section
              title="TEAM STANDARDIZATION"
              subtitle="Improve the customer experience with consistent scheduling"
              content="Managed Events let you assign and lock Event Type details — such as meeting descriptions, invitee questions, and notifications — so your team delivers a reliable and professional experience every time."
              imgSrc={team_standardization}
              imgAlt="Team Standardization"
          />

          <FeatureTabs />

          <ImageGallery />
        </Box>

        <Footer />
      </>
  );
};
