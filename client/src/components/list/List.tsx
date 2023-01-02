import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { Card } from "../card/Card";
import "./List.scss";

interface ListProps {
  catId: number;
  maxPrice: number;
  sort: string | null;
  subCats: never[] | string[];
}

export const List = ({ catId, maxPrice, sort, subCats }: ListProps) => {
  const { data } = useFetch(
    `/products?populate=*&[filters][categories][id][$eq]=${catId}${subCats
      .map((item) => `&[filters][sub_categories][id]=${item}`)
      .join("")}&[filters][price][$lte]=${maxPrice}${sort !== null ? `&sort=price:${sort}`:''}  `
  );
  return (
    <div className="list">
      {data?.map((item: any) => (
        <Card id={item.id} item={item.attributes} key={item.id} />
      ))}
    </div>
  );
};
