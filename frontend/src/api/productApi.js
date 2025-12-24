import api from './axios';

// GET ALL PRODUCTS
export const getProducts = async () => {
  const response = await api.get('/products');
  return response.data;
};

// SEARCH PRODUCTS by title
export const searchProducts = async (query) => {
  const response = await api.get(`/products/search?query=${query}`);
  return response.data;
};

// GET ALL CATEGORIES
export const getCategories = async () => {
  const response = await api.get('/products/categories');
  return response.data;
};

// FILTER BY CATEGORY
export const filterByCategory = async (category) => {
  const response = await api.get(`/products/category/${category}`);
  return response.data;
};
