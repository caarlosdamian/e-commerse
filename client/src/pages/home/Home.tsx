import React from "react";
import { Categories } from "../../components/categories/Categories";
import { Contact } from "../../components/contact/Contact";
import { FeaturedProducts } from "../../components/featuredProducts/FeaturedProducts";
import { Slider } from "../../components/slider/Slider";
import "./Home.scss";

export const Home = () => {
 return (
  <div className="home">
   <Slider />
   <FeaturedProducts type='trending' />
   <Categories/>
   <FeaturedProducts type='featured' />
   <Contact/>
  </div>
 );
};
