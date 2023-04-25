import React from 'react'
import './List.css'
import Card from '../Card/Card.jsx'







const List = () => {
    // fake data before the implementation if the api
const data = [
    {
        id: 1,
        img: "https://i.ibb.co/vkqWxvB/mh1.jpg",
        title: "Hoodie",
        isNew: true,
        oldPrice: 19,
        price: 12
    }, {
        id: 2,
        img: "https://i.ibb.co/ww5ygX6/mt1.jpg",
        title: "T-shirt",
        isNew: true,
        oldPrice: 19,
        price: 12
    }, {
        id: 3,
        img: "https://i.ibb.co/r4pqMZk/ms2.jpg",
        title: "Shirt",
        oldPrice: 19,
        price: 12
    }, {
        id: 4,
        img: "https://i.ibb.co/8sM9Kzw/mp7.webp",
        title: "Pants",
        oldPrice: 19,
        price: 12
    },
    {
        id: 5,
        img: "https://i.ibb.co/fCBRFhg/wd1.jpg",
        title: "Long Sleeve Graphic T-shirt",
        isNew: true,
        oldPrice: 19,
        price: 12
    }, {
        id: 6,
        img: "https://i.ibb.co/vjkJzkj/wd8.jpg",
        title: "Coat",
        isNew: true,
        oldPrice: 19,
        price: 12
    }, {
        id: 7,
        img: "https://i.ibb.co/z5vHJV7/ws1.webp",
        title: "Jeans",
        oldPrice: 19,
        price: 12
    }, 
    {
        id: 8,
        img: "https://i.ibb.co/SPn7cFt/wp1.webp",
        title: "Skirts",
        oldPrice: 19,
        price: 12
    },
    {
        id: 9,
        img: "https://i.ibb.co/0Gdpj2k/bk7.jpg",
        title: "Skirts",
        oldPrice: 19,
        price: 12
    },
    {
        id: 10,
        img: "https://i.ibb.co/qYgqQ3C/bk6.jpg",
        title: "Skirts",
        oldPrice: 19,
        price: 12
    },
    {
        id: 11,
        img: "https://i.ibb.co/J7mKPMN/gk3.jpg",
        title: "Skirts",
        oldPrice: 19,
        price: 12
    },
    {
        id: 12,
        img: "https://i.ibb.co/3y44VBq/k4.jpg",
        title: "Skirts",
        oldPrice: 19,
        price: 12
    },

];
    return (
        <div className='list'>
            {data?.map((item)=>(
                <Card item={item} key={item.id}/>
            ))}
        </div>
    )
}

export default List;
