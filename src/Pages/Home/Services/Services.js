import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import fluoride from '../../../images/fluoride.png'
import cavity from '../../../images/cavity.png'
import whitening from '../../../images/whitening.png'
import Service from '../../Service/Service';

const services = [
    {
        name: 'Fluoride Treatment',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam earum quae eos voluptate nam assumenda ratione, repudiandae cumque temporibus eveniet distinctio provident vel, ea quibusdam deleniti, illo ipsam! Deserunt, dolores?',
        img: fluoride
    },
    {
        name: 'Cavity Filling',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam earum quae eos voluptate nam assumenda ratione, repudiandae cumque temporibus eveniet distinctio provident vel, ea quibusdam deleniti, illo ipsam! Deserunt, dolores?',
        img: cavity
    },
    {
        name: 'Teeth whitening',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam earum quae eos voluptate nam assumenda ratione, repudiandae cumque temporibus eveniet distinctio provident vel, ea quibusdam deleniti, illo ipsam! Deserunt, dolores?',
        img: whitening
    }
]
const Services = () => {
    return (
        <Box sx={{ flexGrow: 1, mt: 2}}>
            <Container>
                <Typography sx={{ fontWeight: 700, m:5, color: 'rgb(0, 132, 255)'}} variant="h4" component="div">
                Service We Provide
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service =>
                            <Service
                                key={service.name}
                                service={service}
                            >

                            </Service>
                        )}
                </Grid>
            </Container>
        </Box>

    );
};

export default Services;