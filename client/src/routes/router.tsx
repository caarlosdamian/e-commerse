import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
 {
  path: "/",
  element: <span>Home</span>,
 },
 {
  path: "/products/:id",
  element: <span>Category</span>,
 },
 {
  path: "/product/:id",
  element: <span>Product</span>,
 },
]);
