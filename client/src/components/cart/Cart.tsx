import React from "react";
import { DeleteOutline } from "@mui/icons-material";
import "./Cart.scss";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, resetCart } from "../../redux/cartReducer";

export const Cart = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state: any) => state.cart);
  const total =
    products.length !== 0 &&
    products?.reduce(
      (acc: any, item: any) => (acc += item.quantity * item?.attributes?.price),
      0
    );
  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {products.map((item: any) => (
        <div className="item" key={item.id}>
          <img
            src={`${process.env.REACT_APP_UPLOAD_URL}${item?.attributes.img.data.attributes.url}`}
            alt={item.img}
          />
          <div className="details">
            <h1>{item?.attributes?.title}</h1>
            <p>{item?.attributes?.desc?.substring(0, 50)}</p>
            <div className="price">
              {item.quantity} X {item?.attributes?.price}
            </div>
          </div>

          <DeleteOutline
            className="delete"
            onClick={() => dispatch(removeItem(item.id))}
          />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>$ {total}</span>
      </div>
      <button>PROCEED TO CHECKOUT </button>
      <span className="reset" onClick={() => dispatch(resetCart())}>
        Reset Cart
      </span>
    </div>
  );
};
