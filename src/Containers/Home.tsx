import React, {useState} from 'react';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import cover from '../media/cover.png';
import progressive_structure from '../media/progressive_structure.png';
import technical_practices from '../media/technical_practices.png';
import devOps from '../media/devOps.png';
import product1 from '../media/product1.png';
import product2 from '../media/product2.png';
import product3 from '../media/product3.png';
import product4 from '../media/product4.png';
import product6 from '../media/product6.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {SideMenu} from '../Components/Navigation';

const Home = () => {
    const [sideMenu, setSideMenu] = useState(false);
    return (
        <>
            <div
                className="menu-toggler"
                onClick={() => {
                    setSideMenu((prev: boolean) => !prev);
                }}
            >
                <FontAwesomeIcon icon={faBars} />
            </div>
            <SideMenu sideMenu={sideMenu} />
            <div className="main-grid" id="home" onClick={() => setSideMenu(false)}>
                <Header />
                <div className="grid-red">
                    <p className="innov">Innov</p>
                </div>
                <div className="grid-welcome">
                    <h3>Welcome to the world of</h3>
                    <h2>INNOVATION</h2>
                    <p className="welcome-description">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                        ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                        dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
                        sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                        invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
                        justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
                        ipsum dolor sit amet.{' '}
                    </p>
                    <p className="ation">ation</p>
                </div>
                <div className="grid-skyBlue"></div>
                <div
                    className="grid-about"
                    id="about"
                    style={{
                        backgroundImage:
                            `url(${cover})`,
                    }}
                >
                    <div className='about-shade'>
                        <div className="about-us">
                            <p className='about-heading'>About us</p>
                            <p>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                                invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
                                accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                                sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
                                sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                                aliquyam erat, sed diam voluptua.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="grid-features" id="features">
                    <h6>Features</h6>
                    <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                        ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et jus
                    </p>
                </div>
                <div className="features-container">
                    <div className="progressive-structure">
                        <img src={progressive_structure} alt="Prgressive Str" />
                        <h6>Progressive Structure</h6>
                        <p>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                            invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
                            et jus
                        </p>
                    </div>
                    <div className="technical-practices">
                        <img src={technical_practices} alt="Technical Practices" />
                        <h6>Technical Practices</h6>
                        <p>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                            invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
                            et jus
                        </p>
                    </div>
                    <div className="DevOps-Teams">
                        <img src={devOps} alt="DevOps Teams" />
                        <h6>DevOps Teams</h6>
                        <p>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                            invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
                            et jus
                        </p>
                    </div>
                </div>
                <div className="grid-products" id="products">
                    <h6>Products</h6>
                    <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                        ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et jus
                    </p>
                </div>
                <div className="grid-productIcons">
                    <img className="corner-img" src={product6} alt="Product 6 logo" />
                    <img className="adjacent-to-center-img" src={product3} alt="Product 3 logo" />
                    <img className="center-img" src={product1} alt="Product 1 logo" />
                    <img className="adjacent-to-center-img product2" src={product2} alt="Product 2 logo" />
                    <img className="corner-img" src={product4} alt="Product 4 logo" />
                </div>
                <div className="grid-getQuote">
                    <button>Get Quote</button>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default Home;
