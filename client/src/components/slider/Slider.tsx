import { EastOutlined, WestOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import "./Slider.scss";

export const Slider = () => {
 const [currentSlide, setCurrentSlide] = useState(0);

 const data = [
  "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
 ];

 const prevSlide = () => {
  setCurrentSlide(currentSlide === 0 ? data.length - 1 : currentSlide - 1);
 };

 const nextSlide = () => {
  setCurrentSlide(currentSlide === data.length - 1 ? 0 : currentSlide + 1);
 };
 console.log(currentSlide);
 return (
  <div className="slider">
   <div
    className="container"
    style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
   >
    <img src={data[0]} alt="" />
    <img src={data[1]} alt="" />
    <img src={data[2]} alt="" />
   </div>
   <div className="icons">
    <div className="icon" onClick={prevSlide}>
     <WestOutlined />
    </div>
    <div className="icon" onClick={nextSlide}>
     <EastOutlined />
    </div>
   </div>
  </div>
 );
};
