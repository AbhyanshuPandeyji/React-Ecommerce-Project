// this is card component

import React from 'react'
import './Cart.css'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'

const Cart = () => {

    const data = [
        {
            id: 1,
            img: "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
            img2: "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Long Sleeve Graphic T-shirt",
            desc:   `Lorem ipsum dolor sit amet consectetur, 
                    adipisicing elit. Nesciunt incidunt commodi architecto,
                    iusto ad alias vitae magnam sapiente perspiciatis mollitia, 
                    maiores fugiat reprehenderit voluptatibus dolores laboriosam 
                    fugit aperiam nulla inventore!`,
            isNew: true,
            oldPrice: 19,
            price: 12
        }, {
            id: 2,
            img: "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
            img2: "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Coat",
            desc:   `Lorem ipsum dolor sit amet consectetur, 
                    adipisicing elit. Nesciunt incidunt commodi architecto,
                    iusto ad alias vitae magnam sapiente perspiciatis mollitia, 
                    maiores fugiat reprehenderit voluptatibus dolores laboriosam 
                    fugit aperiam nulla inventore!`,
            isNew: true,
            oldPrice: 19,
            price: 12
        }, {
            id: 3,
            img: "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
            img2: "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Jeans",
            desc:   `Lorem ipsum dolor sit amet consectetur, 
                    adipisicing elit. Nesciunt incidunt commodi architecto,
                    iusto ad alias vitae magnam sapiente perspiciatis mollitia, 
                    maiores fugiat reprehenderit voluptatibus dolores laboriosam 
                    fugit aperiam nulla inventore!`,
            oldPrice: 19,
            price: 12
        }, {
            id: 4,
            img: "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
            img2: "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Skirts",
            desc:   `Lorem ipsum dolor sit amet consectetur, 
                    adipisicing elit. Nesciunt incidunt commodi architecto,
                    iusto ad alias vitae magnam sapiente perspiciatis mollitia, 
                    maiores fugiat reprehenderit voluptatibus dolores laboriosam 
                    fugit aperiam nulla inventore!`,
            oldPrice: 19,
            price: 12
        },

    ];


    return (
        <div className='cart'>
            <h1>Products in your Cart</h1>
            {data?.map((item)=>(
                <div className="item" key={item.id}>
                    <img src={item.img} alt="" />
                    <div className='details'>
                        <h1>{item.title}</h1>
                        <p>{item.desc?.substring(0,100)}</p>
                        <div className="price">1 X ${item.price}</div>
                    </div>
                    <DeleteOutlinedIcon className='delete'/>
                </div>
            ))}
        <div className="total">
            <span>SUBTOTAL</span>
            <span>$100</span>
        </div>
            <button className='reset'>PROCEED TO CHECKOUT</button>
            <span className='reset'>Reset Cart</span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className='btn btn-danger'>close cart</span>
        </div>

    )
}

export default Cart;
