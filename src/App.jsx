import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layouts/Layout";
import Home from "./Components/Pages/Home";
import AllProduct from "./Components/Pages/AllProducts";
import Cart from "./Components/Pages/Cart";

import { useState } from "react";
import Page from "./Components/Pages/Page";

function App() {
  const [searchQuery, setSearchQuery] = useState([]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const router = createBrowserRouter([
    {
      path: "",
      element: <Layout handleChange={handleSearchChange} />,
      children: [
        {
          path: "",
          element: <Home searchQuery={searchQuery} />,
        },
        {
          path: "allproducts",
          element: <AllProduct searchQuery={searchQuery} />,
        },
        {
          path: "cart",
          element: <Cart searchQuery={searchQuery} />,
        },
        {
          path: "page",
          element: <Page />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
