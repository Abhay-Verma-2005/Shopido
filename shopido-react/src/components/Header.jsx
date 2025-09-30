import { useState, useContext } from 'react'
import { CartContext } from '../context/CartContext'

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchCategory, setSearchCategory] = useState('all')
  const { cartItems, toggleCart } = useContext(CartContext)

  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0)

  const handleSearch = () => {
    // Search functionality can be implemented here
    console.log('Searching for:', searchTerm, 'in category:', searchCategory)
  }

  return (
    <header>
      <div className="navbar">
        <div className="container">
          <div className="nav-logo">
            <div className="logo">Shopido</div>
          </div>
        <div className="nav-categories">
          <div className="category-menu">
            <div className="category-button">
              <i className="fa-solid fa-bars"></i>
              <span>Categories</span>
            </div>
            <div className="categories-dropdown">
              <ul>
                <li data-category="electronics">
                  <i className="fas fa-tv"></i>
                  <span>Electronics</span>
                  <i className="fas fa-chevron-right"></i>
                </li>
                <li data-category="fashion">
                  <i className="fas fa-tshirt"></i>
                  <span>Fashion</span>
                  <i className="fas fa-chevron-right"></i>
                </li>
                <li data-category="home">
                  <i className="fas fa-home"></i>
                  <span>Home & Kitchen</span>
                  <i className="fas fa-chevron-right"></i>
                </li>
                <li data-category="books">
                  <i className="fas fa-book"></i>
                  <span>Books</span>
                  <i className="fas fa-chevron-right"></i>
                </li>
                <li data-category="food">
                  <i className="fas fa-utensils"></i>
                  <span>Food & Grocery</span>
                  <i className="fas fa-chevron-right"></i>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="nav-search">
          <select 
            className="search-select" 
            value={searchCategory}
            onChange={(e) => setSearchCategory(e.target.value)}
          >
            <option value="all">All</option>
            <option value="electronics">Electronics</option>
            <option value="fashion">Fashion</option>
            <option value="home">Home & Kitchen</option>
            <option value="books">Books</option>
            <option value="food">Food & Grocery</option>
          </select>
          <input 
            type="text" 
            placeholder="Search products..." 
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="search-icon" onClick={handleSearch}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
        
        <div className="nav-user">
          <div className="nav-signin">
            <i className="fas fa-user"></i>
            <div>
              <p className="nav-first">Hello, Guest</p>
              <p className="nav-sec">Account & Lists</p>
            </div>
          </div>
          <div className="nav-orders">
            <i className="fas fa-box"></i>
            <div>
              <p className="nav-first">Returns</p>
              <p className="nav-sec">& Orders</p>
            </div>
          </div>
          <div className="nav-cart" onClick={toggleCart}>
            <div className="cart-icon">
              <i className="fa-solid fa-cart-shopping"></i>
              <span className="cart-count">{cartItemCount}</span>
            </div>
            <p>Cart</p>
          </div>
        </div>
        </div>
      </div>
      <div className="subnavbar">
        <div className="container">
          <div className="location">
            <i className="fa-solid fa-location-dot"></i>
            <p>Deliver to <strong>India</strong></p>
          </div>
          <div className="nav-links">
            <a href="#" className="active">Today's Deals</a>
            <a href="#">Customer Service</a>
            <a href="#">New Releases</a>
            <a href="#">Gift Cards</a>
            <a href="#">Sell</a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header