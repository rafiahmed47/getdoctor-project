import React, { useState } from 'react';
import { TextField, Button, Alert } from '@mui/material'
import logo from '../../../images/logo.png'

const MakeAdmin = () => {
    const [email, setEmail] = useState('')
    const [success, setSuccess] = useState(false)
    const handleBlur = e => {
        const adminEmail = e.target.value;
        setEmail(adminEmail)
    }
    const handleSubmit = e => {
        const user = { email }
        fetch('http://localhost:5000/user/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    setSuccess(true)
                    setEmail()
                } else {
                    alert('Email did not match with any user')
                    // window.location.reload()
                    setEmail()
                }
            })
        e.preventDefault()
    }
    return (
        <div>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <img className='main_logo' src={logo} alt="" />
                <h2>Create Admin</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <TextField
                    sx={{ width: '40%', m: 1 }}
                    label="Write Email of admin here"
                    type="email"
                    onBlur={handleBlur}
                    variant="standard"
                    size="small"
                />
                <Button type="submit" variant="contained">Make Admin</Button>
            </form>
            {success &&
                <Alert severity="success">
                    Registration success
                </Alert>}
        </div>
    );
};

export default MakeAdmin;