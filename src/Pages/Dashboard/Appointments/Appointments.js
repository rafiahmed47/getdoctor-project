import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



const Appointments = ({ date }) => {
    const [userAppointments, setUserAppointments] = useState([])
    const { user } = useAuth()
    useEffect(() => {
        const url = `https://vast-shelf-93304.herokuapp.com/appointment?email=${user.email}&date=${date}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setUserAppointments(data)
            })
    }, [date])
    return (
        <div>
            <h1>appointments</h1>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="center">Time</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {userAppointments.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.patientName}
                                </TableCell>
                                <TableCell align="center">{row.time}</TableCell>
                                <TableCell align="right">{row.fat}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default Appointments;