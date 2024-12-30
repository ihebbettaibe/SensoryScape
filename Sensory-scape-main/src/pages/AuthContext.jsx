import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // Sign In function
    const signIn = async (email, password) => {
        try {
            const response = await axios.post('http://localhost:5000/api/auth/signin', {
                email,
                password,
            });
            const { token } = response.data;

            // Save token to localStorage or cookies
            localStorage.setItem('token', token);

            // Set the user state (if needed)
            setUser({ email });

            console.log('Signed in successfully');
        } catch (error) {
            console.error('Error during sign-in:', error.response?.data || error.message);
            alert('Sign-in failed! Please check your credentials.');
        }
    };

    // Provide context to children components
    return (
        <AuthContext.Provider value={{ user, signIn }}>
            {children}
        </AuthContext.Provider>
    );
};
