import { Button, Container, TextField, Typography } from '@mui/material';
import React from 'react';
import bg from '../../../images/appointment-bg.png'


const background = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(45, 58, 74, 0.9)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 175
}
const HomeInput = () => {
    return (
        <Container style={background}>
            <Typography variant='h6'>
                Contact Us
            </Typography>
            <Typography variant='h3'>
                Always Connect With Us
            </Typography>

           <form >
            <TextField
              sx={{ width: '90%', m: 1 }}
              id="filled-size-small"
              defaultValue="Email Address*"
              variant="filled"
              size="small"
            />
            <TextField
              sx={{ width: '90%', m: 1 }}
              id="filled-size-small"
              defaultValue="Subject*"
              variant="filled"
              size="small"
            />
            <TextField
              id="outlined-multiline-static"
              sx={{ width: '90%', m: 1 }}
              multiline
              variant="filled"
              rows={4}
              defaultValue="Your Message*"
            />
            <br />
            <Button variant="contained">SUBMIT</Button>
           </form>
        </Container>
    );
};

export default HomeInput;