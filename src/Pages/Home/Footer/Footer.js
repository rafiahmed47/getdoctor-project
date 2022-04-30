import React from 'react';
import { Container, Grid, Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Logo from '../../../images/logo.gif';


const Footer = () => {

    const linkStyle = { textDecoration: 'none', color: 'inherit' }

    return (
        <footer>
            <Box px={{ xs: 3, sm: 10 }} py={{ xs: 5, sm: 10 }}>
                <Box textAlign='center'>All Rights reserved to Doctors Portal &reg;{new Date().getFullYear()}</Box>
            </Box>

        </footer>
    );
};

export default Footer;