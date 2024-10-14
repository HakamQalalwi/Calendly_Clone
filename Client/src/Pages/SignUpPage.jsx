import {Box,Container, Grid, Typography, TextField, Button} from "@mui/material";
import NavBar from "../component/NavBar.jsx";
import Footer from "../component/Footer.jsx";

function SignUp(){
    return (
        <>
            <Box><NavBar /></Box>
            <Container maxWidth="lg" sx={{ marginTop: "200px", marginBottom: "7%" }}>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <Box>
                            <Typography variant="h4" fontWeight="bold" gutterBottom>
                                Sign Up
                            </Typography>
                            <form>
                                <TextField fullWidth label="User Name" variant="outlined" name="displayName" value="" required sx={{ marginBottom: 2 }}/>
                                <TextField fullWidth label="Email Address" variant="outlined" name="email" value="" required sx={{ marginBottom: 2 }}/>
                                <TextField fullWidth label="Password" type="password" variant="outlined" name="password" value="" minLength="6" required sx={{ marginBottom: 2 }}/>
                                <TextField fullWidth label="Confirm Password" type="password" variant="outlined" name="confirmPassword" value="" minLength="6" required sx={{ marginBottom: 2 }}/>
                                <Button type="submit" variant="contained" color="primary" sx={{ width: "100%"}}>
                                    Sign Up
                                </Button>
                            </form>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            <Footer/>
        </>
    );
}

export default SignUp;
