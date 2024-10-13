import {Typography, TextField, Button, Grid, Container, Link} from "@mui/material";

export function LogInPage() {
    return (
        <>
            <Container maxWidth="lg" sx={{ marginTop: "6%", marginBottom: "7%" }}>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h2" component="h2" fontWeight="bold" color="#0b3558">
                            Welcome back
                        </Typography>
                        <Typography variant="h2" component="h2" fontWeight="bold" color="#006bff">
                            to Calendly
                        </Typography>
                        <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.5, marginTop: 4 }}>
                            Log in to your account to get back to your hub for scheduling meetings.
                        </Typography>
                        <Typography variant="body2" sx={{ marginTop: 2 }}>
                            Email Address
                        </Typography>
                        <TextField variant="outlined" placeholder="Enter your email" fullWidth sx={{ marginTop: 1 }}/>
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <Button variant="contained" color="primary" sx={{ width: "100%", height: "50px", marginTop: 2 }}>
                                Log In
                            </Button>
                        </Link>
                        <Typography variant="body2" sx={{ marginTop: 2 }}>
                            Don’t have an account?{" "}
                            <Link to="/signup" style={{ color: "#486bff" }}>
                                Sign Up
                            </Link>
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}
