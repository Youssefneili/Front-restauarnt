import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/navbar";
import Home from "./components/Home";
import Article from "./pages/Menu";
import Product from "./components/productDetails";
import Footer from "./components/footer";
import Basket from "./components/Basket";
import { CartProvider } from "./components/CartContext";
function App() {
  return (
    <Router>
      <Navbar />
      <CartProvider>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Article />} />
        <Route path="/product" element={<Product />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
      </CartProvider>
      <Footer/>

    </Router>
  );
}

export default App;
