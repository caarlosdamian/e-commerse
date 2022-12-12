import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components/layout/Layout";
import { Home, Product, Products } from "../pages";

export const router = createBrowserRouter([
 {
  path: "/",
  element: <Layout />,
  children: [
   {
    path: "/",
    element: <Home />,
   },
   {
    path: "/products/:id",
    element: <Products />,
   },
   {
    path: "/product/:id",
    element: <Product />,
   },
  ],
 },
]);
