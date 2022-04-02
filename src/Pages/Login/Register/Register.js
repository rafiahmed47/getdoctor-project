import { Button, Container, Grid, TextField, Typography, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from "../../../images/login.png"

const Register = () => {
    const [loginData, setLoginData] = useState({})
    const { registerUser, isLoading, user, authError } = useAuth();


    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData)
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match')
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name)
        e.preventDefault()
    }
    return (
        <Container>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6} sx={{ mt: 8 }}>
                    <Typography variant="body1" gutterBottom>Register</Typography>

                    {!isLoading &&
                        <form onSubmit={handleLoginSubmit}>
                            <TextField
                                sx={{ width: '75%', mt: 3, m: 1 }}
                                name="name"
                                onBlur={handleOnBlur}
                                id="standard-basic"
                                label="Your Name"
                                variant="standard" />
                            <TextField
                                sx={{ width: '75%', mt: 3, m: 1 }}
                                name="email"
                                onBlur={handleOnBlur}
                                id="standard-basic"
                                label="Your Email"
                                type="email"
                                variant="standard" />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                name="password"
                                onBlur={handleOnBlur}
                                id="standard-basic"
                                label="Your Password"
                                type="password"
                                variant="standard" />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                name="password2"
                                onBlur={handleOnBlur}
                                id="standard-basic"
                                label="Confirm your Password"
                                type="password"
                                variant="standard" />
                            <br />
                            <Button
                                variant="contained"
                                sx={{ width: '75%', m: 1, mt: 2 }}
                                type="submit"
                            >Register</Button>
                            <br />
                            <NavLink style={{ textDecoration: 'none' }} to="/login">
                                <Button variant="text">Already Registered? Please Login</Button>
                            </NavLink>
                        </form>}
                    {isLoading && <CircularProgress />}
                    {user.email &&
                        <Alert severity="success">
                            Registration success
                        </Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={login} alt='' />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;