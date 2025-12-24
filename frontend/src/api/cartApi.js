import api from './axios';

// ADD PRODUCT TO CART
export const addToCart = async (productId, quantity, price, title, image) => {
  const response = await api.post('/cart/add', { 
    productId, 
    quantity, 
    price, 
    title, 
    image 
  });
  return response.data;
};

// REMOVE PRODUCT FROM CART
export const removeFromCart = async (productId) => {
  const response = await api.delete(`/cart/remove/${productId}`);
  return response.data;
};

// GET CART ITEMS
export const getCart = async () => {
  const response = await api.get('/cart');
  return response.data;
};

// GET CART TOTAL
export const getCartTotal = async () => {
  const response = await api.get('/cart/total');
  return response.data;
};

// CLEAR CART (for checkout)
export const clearCart = async () => {
  const response = await api.post('/cart/clear');
  return response.data;
};
