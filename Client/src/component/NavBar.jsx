import { AppBar, Button, Container, Stack, Toolbar, Box } from "@mui/material";
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <AppBar elevation={0} sx={{ backgroundColor: 'white', borderBottom: '1px solid #f0f0f0', px: 1, width: '100vw', height: '100px' }}>
            <Container maxWidth="lg" sx={{ justifyContent: 'space-between', alignItems: 'center', height: '100%' }}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100%' }}>
                    <Stack direction="row" spacing={1} sx={{ flexGrow: 1, justifyContent: 'center' }}>
                        <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
                            <Box component="img" src='https://mma.prnewswire.com/media/1682590/Calendly__Logo.jpg?w=200' alt="Calendly Logo" sx={{ height: 50 }} />
                        </Link>
                        <Stack direction="row" spacing={1} sx={{ flexGrow: 2, justifyContent: 'center', ml: 0 }}>
                            <Button component={Link} to="/individuals" variant="h5" sx={{ textDecoration: 'none', color: '#0b3558', fontWeight: 'bold' }}>
                                Individuals
                            </Button>
                            <Button component={Link} to="/teams" variant="h5" sx={{ textDecoration: 'none', color: '#0b3558', fontWeight: 'bold' }}>
                                Team
                            </Button>
                            <Button component={Link} to="/" variant="h5" sx={{ textDecoration: 'none', color: '#0b3558', fontWeight: 'bold' }}>
                                Home
                            </Button>
                        </Stack>
                        <Stack direction="row" spacing={1}>
                            <Button
                                component={Link}
                                to="/login"
                                variant="text"
                                sx={{
                                    borderRadius: 1,
                                    fontSize: '0.875rem',
                                    width: '100px',
                                    height: '40px',
                                    fontStyle: 'normal',
                                    marginTop: '4px',
                                    textDecoration: 'none'
                                }}
                            >
                                LOG IN
                            </Button>

                            <Button
                                component={Link}
                                to="/signup"
                                variant="contained"
                                color="primary"
                                sx={{
                                    borderRadius: 1,
                                    fontSize: '0.875rem',
                                    width: '140px',
                                    height: '40px',
                                    marginTop: '4px',
                                    textDecoration: 'none'
                                }}
                            >
                                GET STARTED
                            </Button>
                        </Stack>
                    </Stack>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default NavBar;
