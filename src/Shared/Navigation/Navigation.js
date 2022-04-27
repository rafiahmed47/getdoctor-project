import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo.png'

const Navigation = () => {
    const { user, logout } = useAuth()
    const flex = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
    return (
        <div className='app_navigation'>
            <Button href='/'><img src={logo} className="main_logo" alt="" /></Button>
            <nav>
                <ul className='app_navigation-links'>
                    <li><Button variant='text' href="/">Home</Button></li>
                    <li><Button variant='text' href="/appointment">Appointment</Button></li>
                    {
                        user.email ?
                            <Box style={flex}>
                                <li><Button variant='text' href="/dashboard">dashboard</Button></li>
                                <Button onClick={logout} style={{margin: '0 f20px'}} color="inherit">Logout</Button>
                            </Box> :
                            <li><Button variant='text' href="/login">Login</Button></li>

                    }

                </ul>
            </nav>
        </div>


        // <Box sx={{ flexGrow: 1 }}>
        //     <AppBar position="static">
        //         <Toolbar>
        //             <img src={logo} className='main_logo' alt="" />
        //             <Link to="/">
        //                 <Button color="inherit">Home</Button>
        //             </Link>
        //             <Link to="/appointment">
        //                 <Button color="inherit">Appointment</Button>
        //             </Link>
        //             {
        //                 user?.email ?
        //                     <Box>
        //                         <NavLink NavLink style={{ textDecoration: 'none', color: 'white' }}
        //                             to="/dashboard">
        //                             <Button color="inherit">Dashboard</Button>
        //                         </NavLink>
        //                         <Button onClick={logout} color="inherit">Logout</Button>
        //                     </Box>
        //                     :
        //                     <NavLink style={{ textDecoration: 'none', color: 'white' }}
        //                         to="/login">
        //                         
        //                     </NavLink>
        //             }
        //         </Toolbar>
        //     </AppBar>
        // </Box >
    );
};

export default Navigation;