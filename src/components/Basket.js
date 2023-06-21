import React, { useState, useEffect } from "react";
import { FaTrash } from "react-icons/fa";
import { fetchOrder, deleteOrder, getProducts } from "../services/api";

const Basket = () => {
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchOrders();
    fetchProducts();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await fetchOrder();
      setOrders(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchProducts = async () => {
    try {
      const response = await getProducts();
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const calculateTotalPrice = (order) => {
    let totalPrice = 0;
    order.items.forEach((item) => {
      const product = products.find((product) => product._id === item._id);
      if (product) {
        totalPrice += product.price;
      }
    });
    return totalPrice;
  };

  const handleRemoveOrder = async (orderId) => {
    try {
      await deleteOrder(orderId);
      fetchOrders();
    } catch (error) {
      console.error(error);
    }
  };

  // const handleSendOrder = async (orderId) => {
  //   try {
  //     console.log("Sending order:", orderId);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const calculateOverallTotalPrice = () => {
    let overallTotalPrice = 0;
    orders.forEach((order) => {
      overallTotalPrice += calculateTotalPrice(order);
    });
    return overallTotalPrice;
  };

  const getProductById = (productId) => {
    return products.find((product) => product._id === productId);
  };

  return (
    <section className="h-100" style={{ backgroundColor: "#eee" }}>
      <div className="container h-100 py-5">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-10">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h3 className="fw-normal mb-0 text-black">Shopping Cart</h3>
            </div>

            {orders.map((order) => (
              <div className="card rounded-3 mb-4" key={order._id}>
                <div className="card-body p-4">
                  {order.items.map((item) => {
                    const product = getProductById(item._id);
                    return (
                      product && (
                        <div className="row d-flex justify-content-between align-items-center" key={item._id}>
                          <div className="col-md-6 col-lg-6 col-xl-6">
                            <p className="lead fw-normal mb-2">{product.name}</p>
                          </div>
                          <div className="col-md-2 col-lg-2 col-xl-2">
                            <h5 className="mb-0">{product.price}Dt</h5>
                          </div>
                          <div className="col-md-2 col-lg-2 col-xl-2">
                            <span>Status: {order.status}</span>
                          </div>
                          <div className="col-md-2 col-lg-2 col-xl-2 text-end">
                            <FaTrash className="fa-lg" style={{cursor:"pointer"}} onClick={() => handleRemoveOrder(order._id)} />
                          </div>
                        </div>
                      )
                    );
                  })}
                </div>
              </div>
            ))}

            <div className="card rounded-3 mb-4">
              <div className="card-body p-4">
                <div className="row d-flex justify-content-between align-items-center">
                  <div className="col-md-8 col-lg-8 col-xl-8">
                    Total Price:
                  </div>
                  <div className="col-md-2 col-lg-2 col-xl-2">
                    <h5 className="mb-0">{calculateOverallTotalPrice()}Dt</h5>
                  </div>
                  {/* <div className="col-md-2 col-lg-2 col-xl-2 text-end">
                    <button className="btn btn-primary" onClick={() => handleSendOrder()}>Send</button>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Basket;
