// Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo.png';

const Header = () => {
    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <nav className="flex items-center justify-between px-6 py-4 max-w-screen-xl mx-auto">
                <div className="flex space-x-6">
                    <Link to="/" className="text-gray-700 hover:text-green-500 font-medium">Home</Link>
                    <Link to="/about" className="text-gray-700 hover:text-green-500 font-medium">About</Link>
                    <Link to="/forums" className="text-gray-700 hover:text-green-500 font-medium">Forums</Link>
                </div>
                <img src={logo} alt="Logo" className="w-32 h-auto" />
                <div className="flex space-x-6">
                    <Link to="/shop" className="text-gray-700 hover:text-green-500 font-medium">Shop</Link>
                    <Link to="/contact" className="text-gray-700 hover:text-green-500 font-medium">Contact</Link>
              
                    <Link to="/SignIn" className="text-gray-700 hover:text-green-500 font-medium">SignIn</Link>                
                </div>
            </nav>
        </header>
    );
};

export default Header;
