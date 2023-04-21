import './Categories.css'

import React from 'react'
import {Link} from 'react-router-dom'

const Categories = () => {

    return(
        // main column 
        <div className='categories'>
            {/* 1st column */}
            <div className='col'>
                {/* 1st row  */}
                <div className="row">
                    <img src="https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600" alt=""/>
                    <button>
                        <Link className="link" to="/Sale">Sale</Link>
                    </button>
                </div>
                {/* 2nd row */}
                <div className="row">
                    <img src="https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600" alt=""/>
                    <button>
                        <Link className="link" to="/products/1">Woman</Link>
                    </button>
                </div>
            </div>
            {/* 2nd column */}
            <div className='col'>
                {/* 1st row  */}
                <div className="row">
                    <img src="https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600" alt=""/>
                    <button>
                        <Link className="link" to="/product/newseason">New Season</Link>
                    </button>
                </div>
            </div>
            {/* 3rd column */}
            <div className='col col-l'>
                {/* 1st row  */}
                <div className="row">
                    {/* column within row within column 1st one */}
                    <div className="col">
                        <div className="row">
                            <img src="https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600" alt=""/>
                            <button>
                                <Link className="link" to="/products/2">Men</Link>
                            </button>
                        </div>
                    </div>
                    {/* column within row within column 2nd one */}
                    <div className="col">
                        <div className="row">
                            <img src="https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600" alt=""/>
                            <button>
                                <Link className="link" to="/product/accessories">Accessories</Link>
                            </button>
                        </div>
                    </div>
                </div>
                {/* 2nd row  */}
                <div className="row">
                    <img src="https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600" alt=""/>
                    <button>
                        <Link className="link" to="/products/3">Children's</Link>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Categories;
