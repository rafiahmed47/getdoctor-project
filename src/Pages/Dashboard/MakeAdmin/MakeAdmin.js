import React, { useState } from 'react';
import {TextField, Button, Alert} from '@mui/material'

const MakeAdmin = () => {
    const [email, setEmail] = useState('')
    const [success, setSuccess] = useState(false)
    const handleBlur = e =>{
        const adminEmail= e.target.value;
        setEmail(adminEmail)
    }
    const handleSubmit = e => {
        const user = {email}
        fetch('https://vast-shelf-93304.herokuapp.com/user/admin',{
            method: 'PUT',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>{
            if (data.modifiedCount) {
                setSuccess(true)
            }
        })
        e.preventDefault()
    }
    console.log(email)
    return (
        <div>
            <h1>Create Admin</h1>
            <form onSubmit={handleSubmit}>
                <TextField
                    sx={{ width: '40%', m: 1 }}
                    label="email"
                    type="email"
                    onBlur={handleBlur}
                    variant="filled"
                    size="small"
                />
                <br />
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