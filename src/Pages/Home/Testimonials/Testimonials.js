import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import { Grid } from '@mui/material';




const Testimonials = ({ testimony }) => {
    const { text, name, place } = testimony;
    return (

        
            <Grid item xs={12} md={4}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                R
                            </Avatar>
                        }
                        title={name}
                        subheader={place}
                    />

                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            {text}
                        </Typography>
                    </CardContent>
                </Card>

            </Grid>

    );
};

export default Testimonials;