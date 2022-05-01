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
    const [toggleMenu, setToggleMenu] = useState(false)


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
        <nav className='app_navigation'>
            <Button href='/'><img src={logo} className="main_logo" alt="" /></Button>
            {activeMenu ? <ul className='app_navigation-links'>
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
                <Box>
                    {!toggleMenu ? <GiHamburgerMenu fontSize={27}  onClick={() => setToggleMenu(true)}/> :
                        <Box>
                            <HiMenuAlt1 fontSize={27} onClick={() => setToggleMenu(false)}/>
                            <ul className='app_navigation-links-mobile'>
                                <li><Button color="inherit" href="/">Home</Button></li>
                                <li><Button color="inherit" href="/appointment">Appointment</Button></li>
                                {
                                    user.email ?
                                        <Box>
                                            <li><Button color="inherit" href="/dashboard">dashboard</Button></li>
                                            <Button onClick={logout} color="inherit">Logout</Button>
                                        </Box> :
                                        <li><Button color="inherit" href="/login">Login</Button></li>
                                }
                            </ul>
                        </Box>}
                </Box>
            }

        </nav>
    );
};

export default Navigation;