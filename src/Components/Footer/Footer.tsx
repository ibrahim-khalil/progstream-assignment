import React from 'react';
import logo from '../../media/logo0.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTwitter, faWhatsapp, faFacebookF, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-main">
                <div className="footer-logo-div">
                    <img src={logo} alt="Logo" />
                    <div className="social-media">
                        <div className="social-media-icon">
                            <FontAwesomeIcon icon={faWhatsapp} />
                        </div>
                        <div className="social-media-icon">
                            <FontAwesomeIcon icon={faTwitter} />
                        </div>
                        <div className="social-media-icon">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </div>
                        <div className="social-media-icon">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </div>
                    </div>
                </div>
                <div className="contact" id="contact">
                    <h6>Contact info</h6>
                    <p>labore et dolore magna aliquyamerat,</p>
                    <p>+513 313 135 2522</p>
                    <a href="mailto:contact@Logo.io">contact@Logo.io</a>
                </div>
                <div className="navigation">
                    <h6>Index</h6>
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
            </div>
            <div className="logo-2020">
                <span>Logo &copy; 2020</span>
            </div>
        </div>
    );
};

export default Footer;
