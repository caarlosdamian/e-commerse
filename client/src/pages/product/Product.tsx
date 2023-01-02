import React, { useState } from "react";
import { AddShoppingCart, FavoriteBorder, Balance } from "@mui/icons-material";

import "./Product.scss";
import { useFetch } from "../../hooks/useFetch";
import { useParams } from "react-router-dom";

export const Product = () => {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();

  const { data, loading } = useFetch(`/products/${id}?populate=*`);
  const [selectedImg, setSelectedImg] = useState<any>("img");

  return (
    <div className="product">
      {loading ? (
        <span>Loading...</span>
      ) : (
        <>
          <div className="left">
            <div className="images">
              <img
                src={`${process.env.REACT_APP_UPLOAD_URL}${data?.attributes?.img?.data?.attributes?.url}`}
                alt={`${process.env.REACT_APP_UPLOAD_URL}${data?.attributes?.img?.data?.attributes?.url}`}
                onClick={() => setSelectedImg("img")}
              />
              <img
                src={`${process.env.REACT_APP_UPLOAD_URL}${data?.attributes?.img2?.data?.attributes?.url}`}
                alt={data?.attributes?.img2?.data?.attributes?.url}
                onClick={() => setSelectedImg("img2")}
              />
            </div>
            <div className="mainImg">
              <img
                src={`${process.env.REACT_APP_UPLOAD_URL}${data?.attributes?.[selectedImg]?.data?.attributes?.url}`}
                alt={selectedImg}
              />
            </div>
          </div>
          <div className="right">
            <h1>{data?.attributes.title}</h1>
            <span className="price">${data?.attributes.price}</span>
            <p>{data?.attributes.desc}</p>
            <div className="quantity">
              <button
                onClick={() =>
                  setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                }
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
        </>
      )}
    </div>
  );
};
