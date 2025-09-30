import { useContext } from 'react'
import { ProductContext } from '../context/ProductContext'
import { CartContext } from '../context/CartContext'

const ProductGrid = () => {
  const { products, selectedCategory } = useContext(ProductContext)
  const { addToCart } = useContext(CartContext)

  const filteredProducts = selectedCategory === 'all' || !selectedCategory
    ? products
    : products.filter(product => product.category === selectedCategory)

  const handleAddToCart = (product) => {
    addToCart({
      id: product._id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    })
  }

  const renderStars = (rating) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={i} className="fas fa-star"></i>)
    }

    if (hasHalfStar) {
      stars.push(<i key="half" className="fas fa-star-half-alt"></i>)
    }

    const emptyStars = 5 - Math.ceil(rating)
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<i key={`empty-${i}`} className="far fa-star"></i>)
    }

    return stars
  }

  return (
    <section className="product-section" id="featuredProducts">
      <div className="container">
        <h2 className="section-title">
          {selectedCategory === 'all' || !selectedCategory 
            ? 'Featured Products' 
            : `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Products`
          }
        </h2>
        <div className="product-grid">
        {filteredProducts.map((product) => (
          <div key={product._id} className="product-card">
            <div className="product-img">
              <img src={product.image} alt={product.name} />
              {product.originalPrice && (
                <div className="discount-tag">
                  -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                </div>
              )}
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <div className="product-price">
                <span className="current-price">₹{product.price}</span>
                {product.originalPrice && (
                  <span className="original-price">₹{product.originalPrice}</span>
                )}
              </div>
              {product.rating && (
                <div className="rating">
                  {renderStars(product.rating)}
                  <span>({product.reviews || 0})</span>
                </div>
              )}
              <button 
                className="add-to-cart-btn"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      {filteredProducts.length === 0 && (
        <div style={{ textAlign: 'center', padding: '40px' }}>
          <p>No products found in this category.</p>
        </div>
      )}
    </section>
  )
}

export default ProductGrid