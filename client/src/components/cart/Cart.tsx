import React from "react";
import { DeleteOutline } from "@mui/icons-material";
import "./Cart.scss";

export const Cart = () => {
  const data = [
    {
      id: 1,
      img2: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Product 1",
      isNew: true,
      oldPrice: 19,
      price: 12,
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem praesentium eaque perspiciatis aliquam quae est quis unde quod possimus, sint laudantium perferendis numquam iusto hic, amet dolorum officia eius architecto.",
    },
  ];
  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {data.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt={item.img} />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 50)}</p>
            <div className="price">1 X {item.price}</div>
          </div>
          <DeleteOutline className="delete" />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>$ 2900</span>
      </div>
      <button>PROCEED TO CHECKOUT </button>
      <span className="reset">Reset Cart</span>
    </div>
  );
};
