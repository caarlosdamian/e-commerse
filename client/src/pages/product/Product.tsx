import React, { useState } from "react";
import { AddShoppingCart, FavoriteBorder, Balance } from "@mui/icons-material";

import "./Product.scss";

export const Product = () => {
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const images = [
    "https://images.pexels.com/photos/10026491/pexels-photo-10026491.png?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/12179283/pexels-photo-12179283.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];
  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img
            src={images[0]}
            alt={images[0]}
            onClick={() => setSelectedImg(0)}
          />
          <img
            src={images[1]}
            alt={images[1]}
            onClick={() => setSelectedImg(1)}
          />
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt={images[selectedImg]} />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span className="price">$199</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsum
          sint dicta et suscipit cumque iste dignissimos repellendus provident
          excepturi ad aut eum ratione. Dignissimos dolore esse enim nihil
          quibusdam!
        </p>
        <div className="quantity">
          <button
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <button className="add">
          <AddShoppingCart /> ADD TO CART
        </button>
        <div className="links">
          <div className="item">
            <FavoriteBorder />
            ADD TO WISH LIST
          </div>
          <div className="item">
            <Balance /> ADD TO COMPARE
          </div>
        </div>
        <div className="info">
          <span>Vendor: Polo</span>
          <span>Product Type: T-Shirt</span>
          <span>Tag: T-Shirt, Women , Top</span>
        </div>
        <hr />
        <div className="info">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  );
};
