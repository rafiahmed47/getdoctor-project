import React from 'react';
import { Container, Grid, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import Logo from '../../../images/logo.png';


const Footer = () => {

    const linkStyle = { textDecoration: 'none', color: 'inherit' }

    return (
        <footer>
            {/* <Box>
                <img src={Logo} alt="" />
            </Box> */}
            <Box px={{ xs: 3, sm: 10 }} py={{ xs: 5, sm: 10 }}>
                <Container maxWidth="lg">
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>Help</Box>
                            <Box sx={{ mt: 2 }}>
                                <Link to='/' style={linkStyle}>Contact</Link>
                            </Box>
                            <Box sx={{ mt: 2 }}>
                                <Link to='/' style={linkStyle}>Support</Link>
                            </Box>
                            <Box sx={{ mt: 2 }}>
                                <Link to='/' style={linkStyle}>Privacy</Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>Account</Box>
                            <Box sx={{ mt: 2 }}>
                                <Link to='/' style={linkStyle}>Profile</Link>
                            </Box>
                            <Box sx={{ mt: 2 }}>
                                <Link to='/' style={linkStyle}>Login</Link>
                            </Box>
                            <Box sx={{ mt: 2 }}>
                                <Link to='/' style={linkStyle}>Register</Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>Product</Box>
                            <Box sx={{ mt: 2 }}>
                                <Link to='/' style={linkStyle}>Appointment</Link>
                            </Box>
                            <Box sx={{ mt: 2 }}>
                                <Link to='/' style={linkStyle}>Dashboard</Link>
                            </Box>
                            <Box sx={{ mt: 2 }}>
                                <Link to='/' style={linkStyle}>Doctors</Link>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
                <Box textAlign='center' pt={{xs: 3, sm: 7}} pb={{xs: 5, sm: 0}}>All Rights reserved to Doctors Portal &reg;{ new Date().getFullYear()}</Box>
            </Box>

        </footer>
    );
};

export default Footer;