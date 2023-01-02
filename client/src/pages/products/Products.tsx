import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { List } from "../../components/list/List";
import { useFetch } from "../../hooks/useFetch";
import "./Products.scss";

export const Products = () => {
  const catId = parseInt(useParams().id || "");
  const [maxPrice, setMaxPrice] = useState(1000);
  const [selectedSubCats, setSelectedSubCats] = useState<string[] | never[]>(
    []
  );
  const [sort, setSort] = useState<string | null>(null);

  const { data } = useFetch(
    `/sub-categories?[filters][categories][id][$eq]=${catId}`
  );

  const handlechange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.checked);
    const value = e.target.value;
    const isChecked = e.target.checked;
    setSelectedSubCats(
      isChecked
        ? [...selectedSubCats, value]
        : selectedSubCats.filter((item) => item !== value)
    );
  };

  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          {data.map((item: any) => (
            <div className="inputItem" key={item.id}>
              <input
                type="checkbox"
                name=""
                id={item.id}
                value={item.id}
                onChange={handlechange}
              />
              <label htmlFor={item.id}>{item.attributes.title}</label>
            </div>
          ))}
        </div>
        <div className="filterItem">
          <h2>Filter by price</h2>
          <div className="inputItem">
            <span>0</span>
            <input
              type="range"
              name=""
              id=""
              min={0}
              max={1000}
              onChange={(e: any) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort by </h2>
          <div className="inputItem">
            <input
              type="radio"
              name="price"
              id="asc"
              value="asc"
              onChange={(e: any) => setSort(e.target.value)}
            />
            <label htmlFor="asc">Price (lowest First)</label>
          </div>
          <div className="inputItem">
            <input
              type="radio"
              name="price"
              id="desc"
              value="desc"
              onChange={(e: any) => setSort(e.target.value)}
            />
            <label htmlFor="asc">Price (highest First)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img
          className="catImg"
          src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
        <List
          catId={catId}
          maxPrice={maxPrice}
          sort={sort}
          subCats={selectedSubCats}
        />
      </div>
    </div>
  );
};
