// API Service for connecting to the backend
import axios from 'axios';

// Create an axios instance
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for adding the auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('userToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Products
export const getProducts = async (params = {}) => {
  const response = await api.get('/products', { params });
  return response.data;
};

export const getProductById = async (id) => {
  const response = await api.get(`/products/${id}`);
  return response.data;
};

export const getFeaturedProducts = async () => {
  const response = await api.get('/products/featured');
  return response.data;
};

// Categories
export const getCategories = async () => {
  const response = await api.get('/categories');
  return response.data;
};

// Users & Auth
export const login = async (email, password) => {
  const response = await api.post('/users/login', { email, password });
  if (response.data.token) {
    localStorage.setItem('userToken', response.data.token);
    localStorage.setItem('userInfo', JSON.stringify(response.data));
  }
  return response.data;
};

export const register = async (userData) => {
  const response = await api.post('/users', userData);
  if (response.data.token) {
    localStorage.setItem('userToken', response.data.token);
    localStorage.setItem('userInfo', JSON.stringify(response.data));
  }
  return response.data;
};

export const logout = () => {
  localStorage.removeItem('userToken');
  localStorage.removeItem('userInfo');
};

export const getUserProfile = async () => {
  const response = await api.get('/users/profile');
  return response.data;
};

export const updateUserProfile = async (userData) => {
  const response = await api.put('/users/profile', userData);
  return response.data;
};

// Addresses
export const getUserAddresses = async () => {
  const response = await api.get('/users/profile');
  return response.data.addresses;
};

export const addUserAddress = async (addressData) => {
  const response = await api.post('/users/address', addressData);
  return response.data;
};

export const updateUserAddress = async (id, addressData) => {
  const response = await api.put(`/users/address/${id}`, addressData);
  return response.data;
};

export const deleteUserAddress = async (id) => {
  const response = await api.delete(`/users/address/${id}`);
  return response.data;
};

export const setDefaultAddress = async (id) => {
  const response = await api.put(`/users/address/${id}/default`);
  return response.data;
};

// Orders
export const createOrder = async (orderData) => {
  const response = await api.post('/orders', orderData);
  return response.data;
};

export const getOrderById = async (id) => {
  const response = await api.get(`/orders/${id}`);
  return response.data;
};

export const getUserOrders = async () => {
  const response = await api.get('/orders/myorders');
  return response.data;
};

export const payOrder = async (orderId, paymentResult) => {
  const response = await api.put(`/orders/${orderId}/pay`, paymentResult);
  return response.data;
};

// Content
export const getContentsByType = async (type) => {
  const response = await api.get(`/content/type/${type}`);
  return response.data;
};

export default api;