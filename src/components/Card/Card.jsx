// this is the product card

import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    // to go to selected item
    <Link className="link" to={`/product/${item.id}`}>
      <div className="card" style={{width:"18rem"}}>
        <div className="image">
          {item.isNew && <span>New Season</span>}
          <img src={item.img} alt="" className="mainImg card-img-top" />
        </div>
        <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
          <div className="card-text">
            <h5>${item.oldPrice}</h5>
            <h5>${item.price}</h5>
            <Link to={`/product/${item.id}`} className="btn btn-primary">GO TO Product</Link>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
