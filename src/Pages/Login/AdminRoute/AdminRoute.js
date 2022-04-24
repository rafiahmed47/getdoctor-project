import { CircularProgress } from '@mui/material';
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const AdminRoute = ({ children }) => {
    const { user, isLoading, isAdmin } = useAuth()
    let location = useLocation().pathname;

    if (isLoading) { return <CircularProgress /> }

    if (user.email && !isAdmin) {
        return <Navigate to="/no-route-found" state={{ from: location }} />;
    }
    return children;
};

export default AdminRoute;