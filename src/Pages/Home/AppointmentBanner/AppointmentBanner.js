import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png'
import bg from '../../../images/appointment-bg.png'
import { Typography } from '@mui/material';

const appointmentBg = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(45, 58, 74, 0.9)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 175
}

const AppointmentBanner = () => {
    return (
        <Box style={appointmentBg} sx={{ flexGrow: 1, m: '0 50px', borderRadius: '10px' }}>
            <Grid container spacing={2}  >
                <Grid item xs={12} md={6} >
                    <img
                        style={{
                            width: 400,
                            marginTop: '-120px'
                        }}
                        src={doctor} alt=''
                    />
                </Grid>
                <Grid item xs={12} md={6} sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    textAlign: 'left'
                }}>
                    <Box style={{marginBottom: '1rem'}}>
                        <Typography variant='h4' sx={{ mb: 5 }} style={{ color: '#5CE7ED' }}>
                            Make an Appointment today
                        </Typography>
                        <Typography variant='p' style={{ color: 'white', fontSize: '14', fontWeight: '300' }}>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae ipsam veniam reprehenderit aliquam fugit consequuntur eos, incidunt excepturi repellendus nihil?
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AppointmentBanner;