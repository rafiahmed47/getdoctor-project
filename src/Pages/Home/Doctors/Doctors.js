import React, { useEffect, useState } from 'react';
import { Container, Grid } from '@mui/material';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/doctor')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])



    return (
        <div>
            <h1>available doctors {doctors.length}</h1>
            <Container>
                <Grid container spacing={2}>
                    {
                        doctors.map(doctor => <Doctor
                        key={doctor._id}
                        doctor={doctor}
                        ></Doctor>)
                    }
                </Grid>
            </Container>
        </div>
    );
};

export default Doctors;