import React, { useState, useEffect, useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createOrder, getProducts } from "../services/api";
import { CartContext } from "./CartContext";
import "../assets/css/style.css";
const Article = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await getProducts();
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddToCart = async (product) => {
    try {
      await createOrder(product._id);
      addToCart(product);
      toast.success("Your command was sent successfully!");
    } catch (error) {
      console.error(error);
      // Handle the error, e.g., show an error message
    }
  };

  return (
    <div className="container">
      <ToastContainer />
      <h2 className="text-center mt-4 mb-3">Menu</h2>
      <div className="row justify-content-center">
        {products.map((product) => (
          <div className="col-md-4 mb-4" key={product._id}>
            <Card>
            <Card.Img variant="top" src={`/uploads/${product.image}`}
                            alt={product.name}
                            className="product-image" />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>{product.price}Dt</Card.Text>
                <Button variant="light" onClick={() => handleAddToCart(product)}>
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Article;
