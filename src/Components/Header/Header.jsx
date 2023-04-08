import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-cyan-600 text-center p-4'>

            <Link className='p-5  hover:text-white' to="/">Home</Link>
            <Link className='p-5  hover:text-white' to="/about">About</Link>
            <Link className='p-5  hover:text-white' to="">Service</Link>
            <Link className='p-5  hover:text-white' to="">Login</Link>

            
        </div>
    );
};

export default Header;