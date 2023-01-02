import { useFetch } from "../../hooks/useFetch";
import { Card } from "../card/Card";
import "./featuredProducts.scss";

interface featuredProductsI {
  type: string;
}

export const FeaturedProducts = ({ type }: featuredProductsI) => {
  const { data, error, loading } = useFetch(
    `/products?populate=*&filters[type][$eq]=${type}`
  );
  console.log();

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque
          ex, quae molestias, ipsa nostrum est autem molestiae laboriosam minima
          quod, vitae et assumenda! Illo dolor sint odio reprehenderit.
          Expedita, ullam!
        </p>
      </div>
      <div className="bottom">
        {loading && !error ? (
          <span>Loading...</span>
        ) : (
          data.map(({ attributes, id }: any) => (
            <Card key={id} id={id} item={attributes} />
          ))
        )}
      </div>
    </div>
  );
};
