import React from 'react'
import './Footer.css'
import {Link} from 'react-router-dom';

const Footer = () => {
    return (
        <div className='Footer-div'>
            {/* <!-- footer for the page  --> */}
            <footer className="section-p1">
                <div className="cols">
                    <Link to="/products/men">
                        <h4>Mens</h4>
                    </Link>
                    <Link to="/products">Shirts</Link>
                    <Link to="/products">Pants</Link>
                    <Link to="/products">Hoodies</Link>
                </div>


                <div className="cols">
                    <Link to="/products/woman">
                        <h4>Women</h4>
                    </Link>
                    <Link to="/products">Dresses</Link>
                    <Link to="/products">Pants</Link>
                    <Link to="/products">Skirts</Link>
                </div>

                <div className="cols">
                    <Link to="/products/children">
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
                    <p>&copy; E-commerce Company  2023-2024</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer;
