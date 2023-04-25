import React from 'react'
import './Footer.css'
import {Link} from 'react-router-dom';

const Footer = () => {
    return (
        <div className='Footer-div'>
            {/* <!-- footer for the page  --> */}
            <footer className="section-p1">
                <div className="cols">
                    <Link to="/products/2">
                        <h4>Mens</h4>
                    </Link>
                    <Link to="#">Shirts</Link>
                    <Link to="#">Pants</Link>
                    <Link to="#">Hoodies</Link>
                </div>


                <div className="cols">
                    <Link to="/products/1">
                        <h4>Women</h4>
                    </Link>
                    <Link to="#">Dresses</Link>
                    <Link to="#">Pants</Link>
                    <Link to="#">Skirts</Link>
                </div>

                <div className="cols">
                    <Link to="/products/3">
                        <h4>Kids</h4>
                    </Link>
                </div>

                <div className="cols">
                    <h4>links</h4>
                    <Link to="/">Home</Link>
                    <Link to="/about">About US</Link>
                    <Link to="/contact">Contact Us</Link>
                </div>

                <div className="copyright">
                    <p>&copy; Ecommerce Company  2022-2023</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer;
