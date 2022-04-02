import { CircularProgress } from '@mui/material';
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'

const PrivateRoute = ({ children }) => {
    const { user, isLoading } = useAuth()
    let location = useLocation();

    if (isLoading) { return <CircularProgress /> }
    
    if (!user.email) {
        return <Navigate to="/login" state={{ from: location }} />;
    }
    
  return children;
};

export default PrivateRoute;