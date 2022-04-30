import { Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import logo from '../../../images/logo.gif'

const AddDoctor = () => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [img, setImg] = useState(null)

    const handleSubmit = e =>{
        const formData = new FormData();
        formData.append('name', name)
        formData.append('email', email)
        formData.append('image', img)
        

        
        fetch('https://getdoctor-project-server.herokuapp.com/doctors',{
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(data =>{
           if(data.insertedId){
               alert('user added successfully')
           }
        })
        .catch(error => {
            console.error('Error:', error);
          });
        e.preventDefault()
    }
    return (
        <div>
           <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
           <img className='main_logo' src={logo} alt=""/>
           <h2>Add Doctors</h2>
           </div>
            <form onSubmit={handleSubmit}>
                <TextField
                    require
                    label="Doctors Name"
                    variant="standard"
                    onBlur={e => setName(e.target.value)}
                />
                <br />
                <TextField
                    require
                    onBlur={e => setEmail(e.target.value)}
                    label="Email"
                    variant="standard"
                />
                <br />
                <input style={{marginTop: '20px'}}
                onBlur={e => setImg(e.target.files[0])}
                    type="file"
                />
                <br />
                <Button type='submit' variant="contained" style={{marginTop: '20px'}}>Add Doctor</Button>
            </form>
        </div>
    );
};

export default AddDoctor;