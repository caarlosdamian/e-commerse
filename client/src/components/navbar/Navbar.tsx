import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderOutlined from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import './Navbar.scss'

export const Navbar = () => {
 return (
  <div className="navbar">
   <div className="wrapper">
    <div className="left">
     <div className="item">
      <img src="/img/en.png" alt="en-img" />
      <KeyboardArrowDownIcon />
     </div>
     <div className="item">
      <span>USD</span>
      <KeyboardArrowDownIcon />
     </div>
     <div className="item">
      <Link className="link" to="/products/1">Women</Link>
     </div>
     <div className="item">
      <Link className="link" to="/products/2">Men</Link>
     </div>
     <div className="item">
      <Link className="link" to="/products/1">Children</Link>
     </div>
    </div>
    <div className="center">
     <Link className="link" to="/">TOT STORE</Link>
    </div>
    <div className="right">
     <div className="item">
      <Link className="link" to="/">Homepage</Link>
     </div>
     <div className="item">
      <Link className="link" to="/">About</Link>
     </div>
     <div className="item">
      <Link className="link" to="/">Contact</Link>
     </div>
     <div className="item">
      <Link className="link" to="/">Stores</Link>
     </div>
     <div className="icons">
      <SearchIcon />
      <PersonOutlineIcon />
      <FavoriteBorderOutlined />
      <div className="cartIcon">
       <ShoppingCartOutlined />
       <span>0</span>
      </div>
     </div>
    </div>
   </div>
  </div>
 );
};
