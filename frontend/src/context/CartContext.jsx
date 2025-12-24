import { createContext, useState, useEffect } from 'react';
import { getCart, addToCart as addToCartApi, removeFromCart as removeFromCartApi } from '../api/cartApi';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    loadCart();
  }, []);

  useEffect(() => {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    setCartTotal(total);
  }, [cart]);

  const loadCart = async () => {
    try {
      const token = localStorage.getItem('token');
      if (token) {
        const data = await getCart();
        setCart(data.cart || []);
      }
    } catch (error) {
      console.error('Failed to load cart:', error);
    }
  };

  const addToCart = async (product) => {
    try {
      const data = await addToCartApi(
        product.id,
        1,
        product.price,
        product.title,
        product.image
      );
      setCart(data.cart);
      return true;
    } catch (error) {
      console.error('Failed to add to cart:', error);
      return false;
    }
  };

  const removeFromCart = async (productId) => {
    try {
      console.log('\n=== FRONTEND REMOVE ===');
      console.log('ProductId to remove:', productId, '| Type:', typeof productId);
      console.log('Current cart:', cart.map(i => ({ productId: i.productId, title: i.title })));
      
      const response = await removeFromCartApi(productId);
      
      console.log('Response from API:', response);
      console.log('Updated cart:', response.cart);
      console.log('====================\n');
      
      setCart(response.cart || []);
      return true;
    } catch (error) {
      console.error('Failed to remove from cart:', error);
      return false;
    }
  };

  const clearCartFunc = async () => {
    try {
      const { clearCart: clearCartApi } = await import('../api/cartApi');
      await clearCartApi();
      setCart([]);
      return true;
    } catch (error) {
      console.error('Failed to clear cart:', error);
      return false;
    }
  };

  return (
    <CartContext.Provider value={{ 
      cart, 
      cartTotal, 
      addToCart, 
      removeFromCart,
      loadCart,
      clearCart: clearCartFunc
    }}>
      {children}
    </CartContext.Provider>
  );
};
