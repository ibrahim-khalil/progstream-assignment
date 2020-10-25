import React from 'react';
import {Navigation} from '../Navigation';
import logo from '../../media/logo.png';

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="Logo" />
            <Navigation />
        </div>
    );
};

export default Header;
