import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const CartSidebar = () => {
  const { 
    cartItems, 
    isCartOpen, 
    toggleCart, 
    updateQuantity, 
    removeFromCart,
    getCartTotal 
  } = useContext(CartContext)

  const handleCheckout = () => {
    alert('Checkout functionality coming soon!')
  }

  return (
    <div className={`cart-sidebar ${isCartOpen ? 'open' : ''}`}>
      <div className="cart-header">
        <h2>Your Cart <span>({cartItems.length})</span></h2>
        <button onClick={toggleCart}>
          <i className="fas fa-times"></i>
        </button>
      </div>
      <div className="cart-items">
        {cartItems.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '40px' }}>
            <p>Your cart is empty</p>
          </div>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="cart-item-info">
                <h4>{item.name}</h4>
                <div className="cart-item-price">₹{item.price}</div>
                <div className="cart-item-quantity">
                  <button 
                    onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    style={{ marginLeft: '10px', color: 'red' }}
                  >
                    <i className="fas fa-trash"></i>
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      {cartItems.length > 0 && (
        <div className="cart-footer">
          <div className="cart-total">
            <p>Total: <span>₹{getCartTotal().toFixed(2)}</span></p>
          </div>
          <button className="checkout-btn" onClick={handleCheckout}>
            Checkout
          </button>
        </div>
      )}
    </div>
  )
}

export default CartSidebar