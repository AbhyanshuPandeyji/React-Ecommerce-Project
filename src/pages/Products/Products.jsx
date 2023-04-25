import React, { useState } from 'react'
import './Products.css'
import List from '../../components/List/List';
import {useParams} from 'react-router-dom';

const Products = () => {

    // the category id to find the product
    const catId = parseInt(useParams().id);// to take the id as an integer not as string

    // set the maximum price of the product range to be found
    const [maxPrice , setMaxPrice] = useState(1000);
    // to change the sort on the basis of ascending and descending
    const [sort,setSort] = useState(null);

    return (
        <div className='products'>
            {/* This is our filter div to filter items in our page */}
            <div className='left'>
                <div className="filterItem">
                    <h2>Product Categories</h2>
                    <div className='inputItem'>
                        <input type="checkbox" id="1"
                            value={1}/>
                        <label htmlFor="1">Shoes</label>
                    </div>
                    <div className='inputItem'>
                        <input type="checkbox" id="2"
                            value={2}/>
                        <label htmlFor="2">Shirts</label>
                    </div>
                    <div className='inputItem'>
                        <input type="checkbox" id="3"
                            value={3}/>
                        <label htmlFor="3">Coats</label>
                    </div>
                </div>
                <div className="filterItem">
                    <h2>Filter by Price</h2>
                    <div className="inputItem">
                        <span>0</span>
                        <input type="range"
                            min={0}
                            max={1000}
                            onChange={(e)=>setMaxPrice(e.target.value)}
                            />
                        <span>{maxPrice}</span> 
                    </div>
                </div>
                <div className="filterItem">
                    <h2>Sort By</h2>
                    <div className="inputItem">
                        <input type="radio" name="price" id="asc" value="asc" onChange={(e)=>setSort("asc")}/>
                        <label htmlFor="asc">Price (Lowest First)</label>
                    </div>
                    <div className="inputItem">
                        <input type="radio" name="price" id="desc" value="desc" onChange={(e)=>setSort("asc")} />
                        <label htmlFor="desc">Price (highest First)</label>
                    </div>
                </div>
            </div>

            {/* this will be our main div containing the content of the products */}
            <div className="right">
                <img 
                    className='catImg' 
                    src="https://i.ibb.co/92mHS7h/shopping.jpg" alt="main-bg" 
                />
                {/* this is for list of components - or the content different product according our filters */}
                {/* passing filters to show data according to the category id */}
                <List catId={catId} maxPrice={maxPrice} sort={sort} />
            
            </div>

        </div>
    )
}

export default Products;
