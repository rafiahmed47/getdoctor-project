import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { Button, TextField } from '@mui/material';
import useAuth from '../../../hooks/useAuth';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const BookingModal = ({ handleClose, open, bookings, date, setSuccess }) => {
    const { name, time } = bookings;
    const [bookingInfo, setBookingInfo] = useState()
    const {user} = useAuth()

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...bookingInfo }
        newInfo[field] = value;
        setBookingInfo(newInfo)
    }
    const handleSubmit = e => {
        const appointment = {
            ...bookingInfo,
            time,
            serviceName: name, 
            email: user.email,
            date: date.toLocaleDateString()
        }

        fetch('https://vast-shelf-93304.herokuapp.com/appointments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(appointment)
        })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    setSuccess(true)
                    handleClose()
                }
            })


        e.preventDefault()
        
    }
    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Typography variant="h4">
                            {name}
                        </Typography>
                        <form onSubmit={handleSubmit}>
                            <TextField
                                disabled
                                sx={{ width: '90%', m: 1 }}
                                id="filled-size-small"
                                defaultValue={time}
                                variant="filled"
                                size="small"
                            />
                            <TextField
                                sx={{ width: '90%', m: 1 }}
                                required
                                id="filled-size-small"
                                name="patientName"
                                onBlur={handleOnBlur}
                                placeholder="Your Name"
                                variant="filled"
                                size="small"
                            />
                            <TextField
                                sx={{ width: '90%', m: 1 }}
                                disabled
                                id="filled-size-small"
                                name="email"
                                onBlur={handleOnBlur}
                                placeholder="Your Email"
                                defaultValue={user.email}
                                type="email"
                                variant="filled"
                                size="small"
                            />
                            <TextField
                                sx={{ width: '90%', m: 1 }}
                                required
                                id="filled-size-small"
                                name="phoneNumber"
                                onBlur={handleOnBlur}
                                placeholder="Your Number"
                                variant="filled"
                                size="small"
                            />

                            <TextField
                                disabled
                                sx={{ width: '90%', m: 1 }}
                                id="filled-size-small"
                                name="date"
                                onBlur={handleOnBlur}
                                defaultValue={date.toDateString()}
                                variant="filled"
                                size="small"
                            />

                            <br />
                            <Button type="submit" variant="contained">Submit</Button>
                        </form>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
};

export default BookingModal;