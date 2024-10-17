import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { styled } from "@mui/system";
import ScarecrowImage from "../assets/Scarecrow.png";

// Styled components using styled API
const DisplayContainer = styled(Box)({
    marginTop: "10rem",
    marginLeft: "5rem",
    marginRight: "5rem",
    marginBottom: "5rem",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(32.5rem, 1fr))",
});

const ContentBox = styled(Box)({
    marginLeft: "5rem",
    "@media (max-width: 600px)": {
        marginLeft: "0",
    },
});

const InfoText = styled(Typography)({
    fontSize: "6rem",
    fontFamily: "'Space Mono', monospace",
    fontWeight: "bold",
    lineHeight: 1.2,
    "@media (max-width: 600px)": {
        fontSize: "4.8rem",
    },
});

const DescriptionText = styled(Typography)({
    marginTop: "1.5rem",
    fontFamily: "'Space Mono', monospace",
    fontSize: "2rem",
    fontWeight: 400,
    lineHeight: 1.7,
    width: "40rem",
    "@media (max-width: 600px)": {
        fontSize: "1.5rem",
    },
});

// Styled button component
const StyledButton = styled(Button)(({ theme }) => ({
    marginTop: "5rem",
    fontFamily: "Space Mono, monospace",
    color: "#fff",
    backgroundColor: "#333333",
    border: "none",
    outline: "none",
    padding: "2rem 4rem",
    fontSize: "1.4rem",
    textTransform: "uppercase",
    cursor: "pointer",
    '&:active, &:hover, &:focus': {
        backgroundColor: "#444444", // Slightly lighter color on active/hover/focus
    },
}));

// Styled heading for navigation
const NavHeading = styled(Typography)({
    fontFamily: "Inconsolata, monospace",
    marginLeft: "7.7rem",
    textTransform: "uppercase",
    fontSize: "3rem", // Adjust size as needed
});

const NotFoundPage = () => (
    <DisplayContainer>
        <Box
            component="img"
            src={ScarecrowImage}
            alt="404-Scarecrow"
            sx={{ width: "100%", borderRadius: 2 }}
        />
        <ContentBox>
            <NavHeading variant="h1">404 Not found</NavHeading>
            <InfoText variant="h2">I have bad news for you</InfoText>
            <DescriptionText variant="body1">
                The page you are looking for might be removed or is temporarily unavailable.
            </DescriptionText>
            <StyledButton
                component={Link}
                to="/"
                variant="contained"
            >
                Back to homepage
            </StyledButton>
        </ContentBox>
    </DisplayContainer>
);

export default NotFoundPage;
