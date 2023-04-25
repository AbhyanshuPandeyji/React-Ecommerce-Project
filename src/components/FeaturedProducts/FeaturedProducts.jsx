import React from "react";
import Card from "../Card/Card";
import "./FeaturedProducts.css";
// import useFetch from "../../hooks/useFetch";

const data = [
  {
    id: 1,
    img: "https://i.ibb.co/vkqWxvB/mh1.jpg",
    title: "Hoodie",
    isNew: true,
    oldPrice: 19,
    price: 12,
  },
  {
    id: 2,
    img: "https://i.ibb.co/fCBRFhg/wd1.jpg",
    title: "Dresses",
    isNew: true,
    oldPrice: 19,
    price: 12,
  },
  {
    id: 3,
    img: "https://i.ibb.co/0Gdpj2k/bk7.jpg",
    title: "Jeans",
    oldPrice: 19,
    price: 12,
  },
  {
    id: 4,
    img: "https://i.ibb.co/vjkJzkj/wd8.jpg",
    title: "Sarees",
    oldPrice: 19,
    price: 12,
  },

]



const FeaturedProducts = ({ type }) => {
  // const { data, loading, error } = useFetch(
  //   `/products?populate=*&[filters][type][$eq]=${type}`
  // );

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet
        </p>
      </div>
      
      {/* this gonna be here our different cart here and different categories page here  */}
      {/* in here we will map and show our own component card */}
      <div className="bottom">
        { data.map((item)=>(
          <Card item={item} key={item.id}/>
        ))}
      </div>

      {/* <div className="bottom">
        {error
          ? "Something went wrong!"
          : loading
          ? "loading"
          : data?.map((item) => <Card item={item} key={item.id} />)}
      </div> */}
    </div>
  );
};

export default FeaturedProducts;
