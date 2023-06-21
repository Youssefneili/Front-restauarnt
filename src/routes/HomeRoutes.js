// import React from "react";
import BaseLayout from "../layouts/BaseLayout";

import Navbar from "../components/navbar";
import Home from "../components/Home";
import Article from "../pages/Menu";
import Product from "../components/productDetails";
import Footer from "../components/footer";
import Basket from "../components/Basket";
var routes = [
  {
    path: "/",
    exact: true,
    layout: BaseLayout,
    component: Navbar,
  },
  {
    path: "/",
    layout: BaseLayout,
    component: Home,
  },
  {
    path: "/menu",
    component: Article,
    layout: BaseLayout,
  },
  {
    path: "/product",
    component: Product,
    layout: BaseLayout,
  },
  {
    path: "/basket",
    component: Basket,
    layout: BaseLayout,
  },
  {
    path: "/footer",
    component: Footer,
    layout: BaseLayout,
  },
];

export default routes;
