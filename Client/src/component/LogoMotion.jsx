import {Box, Typography} from "@mui/material";
import logos from "../Data/logos.js";
import styles from "../Style/Home.module.css";
function LogoMotion() {
    return (
        <Box padding="2%" width="100%" bgcolor="#FFFFFF" textAlign="center" marginBottom="5%">
            <Box padding="2%" marginBottom="1%">
                <Typography variant="h6" color="#1d344b" sx={{ fontSize: '1.6rem' }}>
                    Powering scheduling workflows for <span style={{ fontWeight: "bold" }}>millions </span> of teams worldwide
                </Typography>

            </Box>
            <Box className={styles.logoContainer}>
                <Box className={styles.logoWrapper}>
                    {logos.map((logo, index) => (
                        <Box key={index} className={styles.logo}>
                            <img width={logo.width} height={logo.height} src={logo.src} alt={logo.alt} />
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
}

export default LogoMotion;



