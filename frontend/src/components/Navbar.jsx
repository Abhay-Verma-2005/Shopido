import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { CartContext } from '../context/CartContext';
import { FiSearch, FiX, FiShoppingCart } from 'react-icons/fi';

const Navbar = ({ onSearch = () => {} }) => {
  const { user, logout } = useContext(AuthContext);
  const { cart, cartTotal, removeFromCart, clearCart, loadCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [term, setTerm] = useState('');
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    loadCart();
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(term);
  };

  const handleClear = () => {
    setTerm('');
    onSearch('');
  };

  const handleRemove = async (productId) => {
    await removeFromCart(productId);
  };

  const handleDrawerCheckout = async () => {
    if (cart.length === 0) {
      alert('Your cart is empty!');
      return;
    }

    const totalInINR = (cartTotal * 83).toFixed(2);
    console.log('🧾 Drawer checkout summary:', {
      items: cart,
      totalInINR,
    });
    const success = await clearCart();

    if (success) {
      alert(` Successfully ordered!\n\nTotal Bill: ₹${totalInINR}\n\nThank you for shopping with Shopido!`);
      setShowCart(false);
      navigate('/home');
    } else {
      alert('❌ Checkout failed. Please try again.');
    }
  };
  return (
    <>
      <header className="site-header">
        <div className="top-strip">Created by <strong>Abhay Verma</strong></div>

        <nav className="navbar">
          <div className="navbar-left">
            <Link to="/home" className="nav-logo">Shopido</Link>

            <form className="nav-search" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Search products..."
                value={term}
                onChange={(e) => setTerm(e.target.value)}
              />
              {term ? (
                <button type="button" onClick={handleClear} aria-label="Clear search"><FiX /></button>
              ) : null}
              <button type="submit" className="nav-search-btn" aria-label="Search"><FiSearch /></button>
            </form>
          </div>

          <div className="navbar-right">
            <div className="nav-user">
              <span className="nav-small"> Welcome,</span>
              <strong>{user?.name || 'Guest'}</strong>
            </div>

            <div className="nav-user">
              <span className="nav-small">Returns</span>
              <strong>& Orders</strong>
            </div>

            <button className="nav-cart" type="button" onClick={() => setShowCart(true)}>
              <FiShoppingCart /> Cart
              <span className="nav-cart-count">{cart.length}</span>
            </button>

            <button onClick={handleLogout} className="btn-logout">
              Logout
            </button>
          </div>
        </nav>
      </header>

      {showCart && (
        <>
          <div className="cart-overlay" onClick={() => setShowCart(false)} />
          <aside className="cart-drawer">
            <div className="drawer-header">
              <h3>Your Cart ({cart.length})</h3>
              <button className="drawer-close" onClick={() => setShowCart(false)}><FiX /></button>
            </div>

            <div className="drawer-body">
              {cart.length === 0 ? (
                <p className="drawer-empty">Your cart is empty</p>
              ) : (
                cart.map((item) => (
                  <div key={item.productId} className="drawer-item">
                    <img src={item.image} alt={item.title} />
                    <div className="drawer-item-details">
                      <p className="drawer-item-title">{item.title}</p>
                      <p className="drawer-item-price">₹{(item.price * item.quantity * 83).toFixed(2)}</p>
                      <p className="drawer-item-qty">Qty: {item.quantity}</p>
                    </div>
                    <button className="drawer-remove" onClick={() => handleRemove(item.productId)}>Remove</button>
                  </div>
                ))
              )}
            </div>

            <div className="drawer-footer">
              <div className="drawer-total">
                <span>Total</span>
                <strong>₹{(cartTotal * 83).toFixed(2)}</strong>
              </div>

              <button className="btn-checkout" onClick={handleDrawerCheckout}>
                Checkout
              </button>
            </div>
          </aside>
        </>
      )}
    </>
  );
};

export default Navbar;
