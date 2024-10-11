import { AppBar, Button, Container, Stack, Toolbar, Box, Link } from "@mui/material";
function NavBar() {
    return (
        <AppBar elevation={0} sx={{ backgroundColor: 'white', borderBottom: '1px solid #f0f0f0', px: 1, width: '100vw', height: '100px' }}>
            <Container maxWidth="lg" sx={{justifyContent: 'space-between', alignItems: 'center', height: '100%' }}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100%' }}>
                    <Stack direction="row" spacing={1} sx={{ flexGrow: 1, justifyContent: 'center'}}>
                        <Link href="/public" sx={{ display: 'flex', alignItems: 'center' }}>
                            <Box component="img" src='https://mma.prnewswire.com/media/1682590/Calendly__Logo.jpg?w=200' alt="Calendly Logo" sx={{ height: 50 }} />
                        </Link>
                        <Stack direction="row" spacing={1} sx={{ flexGrow: 2, justifyContent: 'center', ml: 0 }}>
                            <Button variant="h6" href="/" sx={{ textDecoration: 'none', color: '#0b3558', fontWeight: 'bold' }}>Individuals</Button>
                            <Button variant="h6" href="/" sx={{ textDecoration: 'none', color: '#0b3558', fontWeight: 'bold' }}>Team</Button>
                            <Button variant="h6" href="/" sx={{ textDecoration: 'none', color: '#0b3558', fontWeight: 'bold' }}>Pricing</Button>
                        </Stack>
                        <Stack direction="row" spacing={1}>
                            <Button
                                href="/"
                                variant="text"
                                sx={{
                                    borderRadius: 1,
                                    fontSize: '0.875rem',
                                    width: '100px',
                                    height: '40px',
                                    fontStyle: 'normal',
                                    marginTop: '4px'
                                }}
                            >
                                LOG IN
                            </Button>

                            <Button href="/" variant="contained" color="primary" sx={{ borderRadius: 1,fontSize: '0.875rem', width: '140px', height: '40px' ,marginTop: '4px'}}>
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



