import { Button, Container, TextField, Typography } from '@mui/material';
import React from 'react';
import bg from '../../../images/appointment-bg.png'


const background = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(45, 58, 74, 0.9)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 150,
    borderRadius: '20px'
    
}
const HomeInput = () => {
    return (
        <Container style={background}>
            <Typography variant='h5' style={{color: 'white', paddingTop: '3rem'}}>
                Contact Us
            </Typography>
            <Typography variant='h3' style={{ paddingTop: '1rem'}}>
                Always Connect With Us
            </Typography>

           <form  style={{marginTop: '20px'}}>
            <TextField
              sx={{ width: '70%', m: 1 }}
              id="filled-size-small"
              defaultValue="Email Address*"
              variant="filled"
              size="small"
            />
            <TextField
              sx={{ width: '70%', m: 1 }}
              id="filled-size-small"
              defaultValue="Subject*"
              variant="filled"
              size="small"
            />
            <TextField
              id="outlined-multiline-static"
              sx={{ width: '70%', m: 1 }}
              multiline
              variant="filled"
              rows={4}
              defaultValue="Your Message*"
            />
            <br />
            <Button variant="contained" onClick={() => alert('Something Went Wrong')}>SUBMIT</Button>
           </form>
        </Container>
    );
};

export default HomeInput;