import React from "react";
import { Link } from "react-router-dom";
import "./Card.scss";

interface CardI {
  item: any;
}
export const Card = ({ item }: CardI) => {
  return (
    <Link className="link" to={`/product/${item.id}`}>
      <div className="card">
        <div className="image">
          {item.isNew && <span>New Season</span>}
          <img
            src={`${process.env.REACT_APP_UPLOAD_URL}${item.img.data.attributes.url}`}
            alt={item.img.data.attributes.url}
            className="mainImg"
          />
          <img
            src={`${process.env.REACT_APP_UPLOAD_URL}${item.img2.data.attributes.url}`}
            alt={item.img2.data.attributes.url}
            className="secondImg"
          />
        </div>
        <h2>{item.title}</h2>
        <div className="prices">
          <h3>${item.oldPrice || item.price + 20}</h3>
          <h3>${item.price}</h3>
        </div>
      </div>
    </Link>
  );
};
