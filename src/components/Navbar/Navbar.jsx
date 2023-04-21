import React , {useState} from 'react';


import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {Link} from 'react-router-dom';
import Cart from "../Cart/Cart.jsx"

import './Navbar.css'




const Navbar = () => {


    const [open, setOpen] = useState(false);

    return (
        <div className='navbar'>
            <div className='wrapper'>
                <div className='left'>
                    <div className='item'>
                        <img src="/images/indiapng.png" alt="country logo"/>
                        <KeyboardArrowDownIcon/>
                    </div>
                    <div className='item'>
                        <span>India</span>
                    </div>
                    <div className='item'>
                        <Link className='link' to="/products/2">Men</Link>
                    </div>
                    <div className='item'>
                        <Link className='link' to="/products/1">Woman</Link>
                    </div>
                    <div className='item'>
                        <Link className='link' to="/products/3">Children</Link>
                    </div>
                    <div className='item'>
                        <Link className='link' to="/products/4">Accessories</Link>
                    </div>
                </div>
                <div className='center'>
                    <Link className='link' to="/">E-commerce Site</Link>
                </div>
                <div className='right'>
                    <div className='item'>
                        <Link className='link' to="/products/4">Homepage</Link>
                    </div>
                    <div className='item'>
                        <Link className='link' to="/products/4">About</Link>
                    </div>
                    <div className='item'>
                        <Link className='link' to="/products/4">Contact</Link>
                    </div>
                    <div className='item'>
                        <Link className='link' to="/products/4">Stores</Link>
                    </div>
                    <div className='icons'>
                        <SearchIcon/>
                        <PersonOutlineOutlinedIcon/>
                        <FavoriteBorderOutlinedIcon/>
                        <div className='cartIcon' onClick={()=>setOpen(!open)} >
                            <ShoppingCartOutlinedIcon/>
                            <span>0</span>
                        </div>
                    </div>
                </div>

            </div>
            {open && <Cart/>}
        </div>
    )
}

export default Navbar;
