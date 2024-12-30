// src/components/PrivateRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const PrivateRoute = ({ children }) => {
    const { user } = useAuth();

    if (!user) {
        // If the user is not logged in, redirect to the sign-in page
        return <Navigate to="/signin" replace />;
    }

    return children; // Render the children if user exists (logged in)
};

export default PrivateRoute;
