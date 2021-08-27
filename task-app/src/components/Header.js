import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <nav className="navbar navbar-light bg-light">
            <Link to="/" className="navbar-brand">
                Task App
            </Link>
        </nav>
       
    );
};

export default Header;