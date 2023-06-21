import axios from 'axios';

const BASE_URL = 'http://localhost:5000';
export const getArticles = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/article/fetchArticle`);
    return response.data;
  } catch (error) {
    throw new Error('Erreur lors de la récupération des articles');
  }
};

export const getProducts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/product/fetchProduct`);
    return response.data;
  } catch (error) {
    throw new Error('Erreur lors de la récupération des produits');
  }
};

export const createOrder = async (productId) => {
  try {
    const response = await axios.post(`${BASE_URL}/orders/createOrder`, { items: [productId] });
    return response.data;
  } catch (error) {
    throw new Error('Error while creating an order');
  }
};

export const fetchOrder = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/orders/fetchOrder`);
    return response.data;
  } catch (error) {
    throw new Error('Error while fetching user orders');
  }
};

export const deleteOrder = async (orderId) => {
  try {
    const response = await axios.delete(`${BASE_URL}/orders/${orderId}`);
    return response.data;
  } catch (error) {
    throw new Error('Error while deleting user orders');
  }
};

