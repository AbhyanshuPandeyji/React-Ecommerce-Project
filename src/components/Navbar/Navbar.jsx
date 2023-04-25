// This is navbar component

import React, {useState} from 'react';


import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {Link} from 'react-router-dom';
import Cart from "../Cart/Cart.jsx"

// import './Navbar.css'


const Navbar = () => {


    const [open, setOpen] = useState(false);

    return (

        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className='navbar-brand link' to="/">E-commerce Site</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 container-fluid">
                        <li className="nav-item m-auto">
                            <Link className='nav-link link' to="/">Homepage</Link>
                        </li>
                        <li className="nav-item m-auto">
                            <Link className='link' to="/products/men">Men</Link>
                        </li>
                        <li className="nav-item m-auto">
                            <Link className='link' to="/products/woman">Woman</Link>
                        </li>
                        <li className="nav-item m-auto">
                            <Link className='link' to="/products/children">Children</Link>
                        </li>
                        <li className="nav-item m-auto">
                            <Link className='link' to="/products/accessories">Accessories</Link>
                        </li>
                        <li className="nav-item m-auto">
                            <Link className='link' to="/about">About</Link>
                        </li>
                        <li className="nav-item m-auto">
                            <Link className='link' to="/contact">Contact</Link>
                        </li>
                        <li className="nav-item m-auto">
                            <div className='cartIcon'
                                onClick={
                                    () => setOpen(!open)
                            }>
                                <span>Cart</span>
                                <ShoppingCartOutlinedIcon/>
                                <span>0</span>

                            </div>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
            {
            open && <Cart/>
        } </nav>

    )
}

export default Navbar;
