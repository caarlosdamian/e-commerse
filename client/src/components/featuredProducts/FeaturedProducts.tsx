import React from "react";
import { Card } from "../card/Card";
import "./featuredProducts.scss";

interface featuredProductsI {
 type: string;
}

export const FeaturedProducts = ({ type }: featuredProductsI) => {
 const data = [
  {
   id: 1,
   img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
   img2:
    "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
   title: "Product 1",
   isNew: true,
   oldPrice: 19,
   price: 12,
  },
  {
   id: 2,
   img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
   img2:
    "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
   title: "Product 1",
   isNew: true,
   oldPrice: 19,
   price: 12,
  },
  {
   id: 3,
   img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
   img2:
    "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
   title: "Product 1",
   isNew: false,
   oldPrice: 19,
   price: 12,
  },
  {
   id: 4,
   img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
   img2:
    "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
   title: "Product 1",
   isNew: false,
   oldPrice: 19,
   price: 12,
  },
 ];

 return (
  <div className="featuredProducts">
   <div className="top">
    <h1>{type} products</h1>
    <p>
     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque ex,
     quae molestias, ipsa nostrum est autem molestiae laboriosam minima quod,
     vitae et assumenda! Illo dolor sint odio reprehenderit. Expedita, ullam!
    </p>
   </div>
   <div className="bottom">
    {data.map((item) => (
     <Card key={item.id} item={item} />
    ))}
   </div>
  </div>
 );
};
