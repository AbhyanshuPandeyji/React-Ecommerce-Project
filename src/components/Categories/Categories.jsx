// category page - the page to show the different cards
import './Categories.css'

import React from 'react'
import {Link} from 'react-router-dom'

const Categories = () => {

    return(
        // main column 
        <div className='categories'>
            {/* 1st column */}
            <div className='cols'>
                {/* 1st row  */}
                <div className="rows">
                    <img  src="https://i.ibb.co/ryYbvYz/sale.jpg" alt="sale"/>
                    <button>
                        <Link className="link" to="/Sale">Sale</Link>
                    </button>
                </div>
                {/* 2nd row */}
                <div className="rows">
                    <img src="https://i.ibb.co/z5vHJV7/ws1.webp" alt=""/>
                    <button>
                        <Link className="link" to="/products/woman">Woman</Link>
                    </button>
                </div>
            </div>
            {/* 2nd column */}
            <div className='cols'>
                {/* 1st row  */}
                <div className="rows">
                    <img src="https://i.ibb.co/K5Z4VSD/new-season.jpg" alt="new-season"/>
                    <button>
                        <Link className="link" to="/product/newseason">New Season</Link>
                    </button>
                </div>
            </div>
            {/* 3rd column */}
            <div className='cols cols-l'>
                {/* 1st row  */}
                <div className="rows">
                    {/* column within row within column 1st one */}
                    <div className="cols">
                        <div className="rows">
                            <img src="https://i.ibb.co/ww5ygX6/mt1.jpg" alt=""/>
                            <button>
                                <Link className="link" to="/products/men">Men</Link>
                            </button>
                        </div>
                    </div>
                    {/* column within row within column 2nd one */}
                    <div className="cols">
                        <div className="rows">
                            <img src="https://i.ibb.co/vsmw88t/accessories.jpg" alt="accessories"/>
                            <button>
                                <Link className="link" to="/product/accessories">Accessories</Link>
                            </button>
                        </div>
                    </div>
                </div>
                {/* 2nd row  */}
                <div className="rows">
                    <img src="https://i.ibb.co/J7mKPMN/gk3.jpg"/>
                    <button>
                        <Link className="link" to="/products/children">Children's</Link>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Categories;
