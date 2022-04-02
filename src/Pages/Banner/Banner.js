import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import chair from '../../images/chair.png'
import bg from '../../images/bg.png'
import { Button, Typography } from '@mui/material';


const bannerBg = {
    background: `url(${bg})`
}
const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 450
}

const data = [
    {
        heading: "Opening Hours",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae ipsam veniam"
    },
    {
        heading: "Visit Our Location",
        text: "Dhanmondi, Dhaka, Bangladesh"
    },
    {
        heading: "Contact Now",
        text: "+880 199999999"
    }
]
const Banner = () => {
    return (
        <Box sx={{ flexGrow: 1, height: '550px' }} style={bannerBg}>
            <Grid container spacing={2} style={verticalCenter}>
                <Grid item xs={12} md={6} style={{ textAlign: 'left', mt: 20}}>
                    <Typography variant="h2" sx={{mt: 3}}>
                        Your New Smile <br />
                        Starts Here
                    </Typography>
                    <Typography variant="h6" sx={{ fontSize: 14, fontWeight: 300, color: 'gray', my: 5   }}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae ipsam veniam reprehenderit aliquam fugit consequuntur eos, incidunt excepturi repellendus nihil
                    </Typography>
                    <Button variant="contained" sx={{ color: '#5CE7ED' }}>Get Appointment</Button>
                </Grid>
                <Grid item xs={12} md={6} style={verticalCenter}>
                    <img src={chair} alt="" style={{ width: '450px' }} />
                </Grid>
            </Grid>

            {/* <Grid container spacing={8}>


                {
                    data.map(data => (
                        <Grid sx={{ marginTop: '-100px'}} item xs={12} md={4}>
                           <Typography variant="h6">
                               {data.heading}
                           </Typography>
                           <Typography variant="p">
                               {data.text}
                           </Typography>

                        </Grid>
                    ))
                }


            </Grid> */}
        </Box>
    );
};

export default Banner;