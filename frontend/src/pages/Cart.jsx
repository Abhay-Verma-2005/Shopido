import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cart, cartTotal, removeFromCart, loadCart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  // Load cart when page opens
  useEffect(() => {
    loadCart();
  }, []);

  const handleRemove = async (productId) => {
    console.log('Attempting to remove product:', productId);
    const success = await removeFromCart(productId);
    if (success) {
      alert('✅ Product removed from cart');
    } else {
      alert('❌ Failed to remove product');
    }
  };

  const handleCheckout = async () => {
    if (cart.length === 0) {
      alert('Your cart is empty!');
      return;
    }

    // Convert USD to INR (approximate rate: 1 USD = 83 INR)
    const totalInINR = (cartTotal * 83).toFixed(2);
    console.log('🧾 Checkout summary:', {
      items: cart,
      totalInINR,
    });
    
    // Clear the cart
    const success = await clearCart();
    
    if (success) {
      alert(`🎉 Successfully ordered!\n\nTotal Bill: ₹${totalInINR}\n\nThank you for shopping with Shopido!`);
      navigate('/home');
    } else {
      alert('❌ Checkout failed. Please try again.');
    }
  };

  return (
    <div className="page-container">
      <Navbar />
      
      <div className="content-container">
        <h1 className="page-title">🛒 Your Shopping Cart</h1>

        {cart.length === 0 ? (
          // Empty Cart
          <div className="empty-cart">
            <p>Your cart is empty</p>
            <button onClick={() => navigate('/home')} className="btn-primary">
              Continue Shopping
            </button>
          </div>
        ) : (
          // Cart with Items
          <>
            <div className="cart-items">
              {cart.map((item) => (
                <div key={item.productId} className="cart-item">
                  <img src={item.image} alt={item.title} className="cart-item-image" />
                  
                  <div className="cart-item-details">
                    <h3>{item.title}</h3>
                    <p className="cart-item-price">
                      ₹{(item.price * 83).toFixed(2)} × {item.quantity} = ₹{(item.price * item.quantity * 83).toFixed(2)}
                    </p>
                  </div>

                  <button 
                    onClick={() => handleRemove(item.productId)} 
                    className="btn-remove"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            {/* Cart Summary */}
            <div className="cart-summary">
              <div className="cart-total">
                <h2>Total Items: {cart.length}</h2>
                <h2>Total Amount: ₹{(cartTotal * 83).toFixed(2)}</h2>
              </div>
              
              <button onClick={handleCheckout} className="btn-checkout">
                Proceed to Checkout
              </button>
              
              <button onClick={() => navigate('/home')} className="btn-secondary">
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
