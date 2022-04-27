import React, { useEffect, useState } from 'react';
import { Container, Grid } from '@mui/material';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([])

    useEffect(() => {
        fetch('https://getdoctor-project-server.herokuapp.com/doctor')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])



    return (
        <div>
            <h1 style={{color: 'rgb(14, 105, 241)', marginTop: '100px'}}>Our Doctors</h1>
            <Container>
                <Grid container spacing={2} style={{marginTop: '50px'}}>
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