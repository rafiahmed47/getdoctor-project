import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import childPhoto from '../../../images/treatment.png'


const styleDentalCare = {
    display: 'flex',
    alignItem: 'center',
    marginTop: 100,
    padding: 40,
}
const DentalCare = () => {
    return (
        <Grid container spacing={2} style={styleDentalCare}>
            <Grid item xs={12} md={6} >
                <img src={childPhoto} style={{ width: 400 }} alt="" />
            </Grid>
            <Grid item xs={12} md={6} style={{
                margin: 'auto',
                width: '60',
                textAlign: 'left'
                
            }} >
                <Typography variant="h3">
                    Exeptional Dental Care, on Our Team
                </Typography>
                <Typography variant="p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta aliquid amet aut assumenda dolore adipisci repudiandae nam consequatur voluptate maiores a, harum reiciendis magni recusandae eos! Nobis optio aspernatur nemo sed eum. Magni quam facere mollitia eius adipisci temporibus quaerat, ratione, repudiandae asperiores nam quo voluptatibus est cupiditate corporis distinctio.
                </Typography>
                <Typography>
                <Button variant="contained">Contained</Button>
                </Typography>
            </Grid>
        </Grid>
    );
};

export default DentalCare;