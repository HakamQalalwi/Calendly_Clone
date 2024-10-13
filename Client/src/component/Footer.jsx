import { Box, Container, IconButton, Link, Typography, Grid } from "@mui/material";
import { Facebook, Instagram, LinkedIn, YouTube } from '@mui/icons-material';
import { Twitter as XIcon } from '@mui/icons-material';

function Footer() {
    return (
        <Box sx={{ backgroundColor: "#FFFFFF", marginTop: 4 }}>

            <Box
                sx={{
                    width: '70%',
                    height: '1px',
                    backgroundColor: '#E0E0E0',
                    margin: '0 auto'  // Centers the line horizontally
                }}
            />


            <Box sx={{ padding: 4 }}>
                <Container maxWidth="lg">
                    <Grid container justifyContent="space-between" alignItems="center">
                        <Grid item>
                            <IconButton color="primary" href="#" aria-label="X">
                                <XIcon />
                            </IconButton>
                            <IconButton color="primary" href="#" aria-label="Facebook">
                                <Facebook />
                            </IconButton>
                            <IconButton color="primary" href="#" aria-label="Instagram">
                                <Instagram />
                            </IconButton>
                            <IconButton color="primary" href="#" aria-label="LinkedIn">
                                <LinkedIn />
                            </IconButton>
                            <IconButton color="primary" href="#" aria-label="YouTube">
                                <YouTube />
                            </IconButton>
                        </Grid>

                        <Grid item>
                            <Box display="flex" flexWrap="wrap" justifyContent="center">
                                <Link href="#" sx={{ marginRight: 2, color: 'text.secondary', textDecoration: 'none' }}>
                                    Privacy Policy
                                </Link>
                                <Link href="#" sx={{ marginRight: 2, color: 'text.secondary', textDecoration: 'none' }}>
                                    Legal
                                </Link>
                                <Link href="#" sx={{ marginRight: 2, color: 'text.secondary', textDecoration: 'none' }}>
                                    Status
                                </Link>
                                <Link href="#" sx={{ marginRight: 2, color: 'text.secondary', textDecoration: 'none' }}>
                                    Cookie Settings
                                </Link>
                                <Link href="#" sx={{ color: 'text.secondary', textDecoration: 'none' }}>
                                    Your Privacy Choices
                                </Link>
                            </Box>
                        </Grid>

                        <Grid item>
                            <Typography variant="body2" color="text.secondary" align="center">
                                © 2024 Calendly
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
}

export default Footer;
