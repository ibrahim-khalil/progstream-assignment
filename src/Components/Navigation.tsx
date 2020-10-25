import React, {useState} from 'react';

export const Navigation = () => {
    const [navClick, setNavClick] = useState('home');

    const homeClick = () => {
        setNavClick('home');
    };
    const aboutClick = () => {
        setNavClick('about');
    };
    const featuresClick = () => {
        setNavClick('features');
    };
    const productsClick = () => {
        setNavClick('products');
    };
    const contactClick = () => {
        setNavClick('contact');
    };

    interface border {
        borderBottom: string;
        color: string;
    }

    const borderWhite: border = {
        borderBottom: '1px solid white',
        color: 'white',
    };
    const borderNone: border = {
        borderBottom: 'none',
        color: '#8C8C8C',
    };
    return (
        <div className="navigation header-nav">
            <div>
                <a href="#home" onClick={homeClick} style={navClick === 'home' ? borderWhite : borderNone}>
                    Home
                </a>
            </div>
            <div>
                <a href="#about" onClick={aboutClick} style={navClick === 'about' ? borderWhite : borderNone}>
                    About us
                </a>
            </div>
            <div>
                <a href="#features" onClick={featuresClick} style={navClick === 'features' ? borderWhite : borderNone}>
                    Features
                </a>
            </div>
            <div>
                <a href="#products" onClick={productsClick} style={navClick === 'products' ? borderWhite : borderNone}>
                    Products
                </a>
            </div>
            <div className="contact-link">
                <a
                    href="#contact"
                    onClick={contactClick}
                    style={navClick === 'contact' ? borderWhite : {borderBottom: 'none', color: 'white'}}
                >
                    Contact Us
                </a>
            </div>
        </div>
    );
};

interface sideMenuProps {
    sideMenu: boolean;
}
export const SideMenu = ({sideMenu}: sideMenuProps) => {
    return (
        <div className="navigation side-menu" style={sideMenu ? {display: 'flex'} : {display: 'none'}}>
            <div>
                <a href="#home">Home</a>
            </div>
            <div>
                <a href="#about">About us</a>
            </div>
            <div>
                <a href="#features">Features</a>
            </div>
            <div>
                <a href="#products">Products</a>
            </div>
            <div>
                <a href="#contact">Contact Us</a>
            </div>
        </div>
    );
};
