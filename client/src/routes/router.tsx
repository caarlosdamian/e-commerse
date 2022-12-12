import { createBrowserRouter } from "react-router-dom";
import { Home, Product, Products } from "../pages";

export const router = createBrowserRouter([
 {
  path: "/",
  element: <Home />,
 },
 {
  path: "/products/:id",
  element: <Product />,
 },
 {
  path: "/product/:id",
  element: <Products />,
 },
]);
