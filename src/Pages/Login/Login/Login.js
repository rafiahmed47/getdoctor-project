import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from "../../../images/login.png"
import Navigation from '../../../Shared/Navigation/Navigation';

const Login = () => {
    const [loginData, setLoginData] = useState({})
    const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth()

    const location = useLocation()
    const navigate = useNavigate()
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData)
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, navigate)

        e.preventDefault()
    }
    const handleSignIn = () =>{
        signInWithGoogle()
    }
    return (
       <>
       <Navigation/>
        <Container>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6} sx={{ mt: 8 }}>
                    <Typography variant="body1" gutterBottom>Login</Typography>

                    {!isLoading && 
                    <>
                        <form onSubmit={handleLoginSubmit}>
                            <TextField
                                sx={{ width: '75%', mt: 3, m: 1 }}
                                name="email"
                                onChange={handleOnChange}
                                id="standard-basic"
                                label="Your Email"
                                variant="standard" />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                name="password"
                                onChange={handleOnChange}
                                id="standard-basic"
                                label="Your Password"
                                variant="standard" />
                            <br />
                            <Button
                                variant="contained"
                                sx={{ width: '75%', m: 1, mt: 2 }}
                                type="submit"
                            >Login</Button>
                            <br />
                            <NavLink style={{ textDecoration: 'none' }} to="/register">
                                <Button variant="text">New User? Please Register</Button>
                            </NavLink>
                        </form>
                        <p>---------------------------</p>
                        <Button
                                variant="contained"
                                onClick={handleSignIn}
                                sx={{ width: '75%'}}
                                type="submit"
                            >Sign In with Google</Button>
                    </>}

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
       </>
    );
};

export default Login;