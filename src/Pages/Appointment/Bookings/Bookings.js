import { Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import BookingModal from '../BookingModal/BookingModal'

const Bookings = ({ bookings, date, setSuccess }) => {
    const { name, time, space } = bookings;
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <Paper elevation={3} sx={{ py: 7 }}>
                    <Typography variant="h5" sx={{ color: 'info.main', fontWeight: 600 }} gutterBottom component="div">
                        {name}
                    </Typography>
                    <Typography variant="h6" gutterBottom component="div">
                        {time}
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                        {space} SPACE AVAILABLE
                    </Typography>
                    <Button onClick={handleOpen} variant="contained">BOOK APPOINTMENT</Button>
                </Paper>
            </Grid>
            <BookingModal
                date={date}
                handleClose={handleClose}
                open={open}
                bookings={bookings}
                setSuccess={setSuccess}
            ></BookingModal>
        </>
    );
};

export default Bookings;