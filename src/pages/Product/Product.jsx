import React, { useState } from 'react'
import './Product.css'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import BalanceIcon from '@mui/icons-material/Balance'
const Product = () => {


    // quantity of the products add to cart
    const [quantity ,  setQuantity] = useState(1)

    const [selectedImg , setSelectedImg] = useState(0)

    const images = [
        "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ]






    return (
        <div className='product'>
            <div className="left">
                <div className="images">
                    <img src={images[0]} alt=""  onClick={(e)=>setSelectedImg(0)}/>
                    <img src={images[1]} alt=""  onClick={(e)=>setSelectedImg(1)}/>
                </div>
                {/* in this div we will take the images by the index which will change by the use state */}
                <div className="mainImg">
                    <img src={images[selectedImg]} alt="" />
                </div>
            </div>
            <div className="right">
                <h1>Title</h1>
                <span>$199</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Perspiciatis nobis accusamus distinctio? Fuga error, 
                    aspernatur labore id ut impedit architecto,
                    pariatur nemo inventore cumque iure a ab amet saepe aut!</p>
            <div className="quantity">
                <button onClick={()=>setQuantity((prev)=>prev === 1 ? 1 : prev-1)} >-</button>
                {quantity}
                <button onClick={()=>setQuantity((prev)=>prev+1)} >+</button>
            </div>
            <button className="add">
                <AddShoppingCartIcon/> 
                ADD TO CART
            </button>
            <div className="links">
                <div className="item">
                    <FavoriteBorderIcon/> 
                    ADD TO WISH LIST
                </div>
                <div className="item">
                    <BalanceIcon/>
                    ADD TO COMPARE
                </div>
            </div>
            <div className="info">
                <span>Vendor : Polo</span>
                <span>Product Type: T-Shirt</span>
                <span>Tag: T-Shirt , Women , Top </span>
            </div>
            <hr/>
            <div className="details">
                <span>DESCRIPTION</span>
                <hr/>
                <span>ADDITIONAL INFORMATION</span>
                <hr/>
                <span>FAQ</span>
            </div>
            </div>
        </div>
    )
}

export default Product;
