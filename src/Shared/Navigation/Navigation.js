import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo.gif'
import { GiHamburgerMenu } from 'react-icons/gi'
import { HiMenuAlt1 } from 'react-icons/hi'

const Navigation = () => {
    const { user, logout } = useAuth()
    const [activeMenu, setActiveMenu] = useState(false);
    const [screenSize, setScreenSize] = useState(null);
    const [toogleMenu, setToggleMenu] = useState(false)


    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth)

        window.addEventListener('resize', handleResize)

        handleResize()

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    useEffect(() => {
        if (screenSize < 800) {
            setActiveMenu(false)
        } else {
            setActiveMenu(true)
        }
    }, [screenSize])

    const flex = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
    return (
        <div className='app_navigation'>
            <Button href='/'><img src={logo} className="main_logo" alt="" /></Button>
            <nav>
                {
                    activeMenu ?
                        <ul className='app_navigation-links'>
                            <li><Button variant='text' href="/">Home</Button></li>
                            <li><Button variant='text' href="/appointment">Appointment</Button></li>
                            {
                                user.email ?
                                    <Box style={flex}>
                                        <li><Button variant='text' href="/dashboard">dashboard</Button></li>
                                        <Button onClick={logout} style={{ margin: '0 f20px' }} color="inherit">Logout</Button>
                                    </Box> :
                                    <li><Button variant='text' href="/login">Login</Button></li>
                            }
                        </ul> :
                        <>
                            {
                                toogleMenu ?
                                    <>
                                        <HiMenuAlt1 sx={{mt: 5}} onClick={() => setToggleMenu(false)} />
                                        <ul style={{display: 'inlineGrid'}}>
                                            <li><Button variant='text' href="/">Home</Button></li>
                                            <li><Button variant='text' href="/appointment">Appointment</Button></li>
                                            {
                                                user.email ?
                                                    <Box style={flex}>
                                                        <li><Button variant='text' href="/dashboard">dashboard</Button></li>
                                                        <Button onClick={logout} style={{ margin: '0 f20px' }} color="inherit">Logout</Button>
                                                    </Box> :
                                                    <li><Button variant='text' href="/login">Login</Button></li>
                                            }
                                        </ul>
                                    </>
                                    :
                                    <GiHamburgerMenu onClick={() => setToggleMenu(true)} />
                            }
                        </>
                }

            </nav>
        </div>
    );
};

export default Navigation;