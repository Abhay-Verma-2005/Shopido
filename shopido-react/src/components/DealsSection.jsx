import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const DealsSection = () => {
  const { addToCart } = useContext(CartContext)

  const deals = [
    {
      id: 'deal1',
      name: 'Wireless Earbuds',
      price: 29.99,
      originalPrice: 45.99,
      discount: 35,
      image: '/temp/p1.png',
      rating: 4.5,
      reviews: 234
    },
    {
      id: 'deal2',
      name: 'Smart Watch',
      price: 49.99,
      originalPrice: 62.99,
      discount: 20,
      image: '/temp/p2.png',
      rating: 4.0,
      reviews: 186
    },
    {
      id: 'deal3',
      name: 'Bluetooth Speaker',
      price: 35.99,
      originalPrice: 59.99,
      discount: 40,
      image: '/temp/p3.png',
      rating: 5.0,
      reviews: 412
    }
  ]

  const handleAddToCart = (deal) => {
    addToCart({
      id: deal.id,
      name: deal.name,
      price: deal.price,
      image: deal.image,
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
    <section className="deals-section">
      <h2 className="section-title">Today's Deals</h2>
      <div className="deals-slider">
        {deals.map((deal) => (
          <div key={deal.id} className="deal-card">
            <div className="discount-tag">-{deal.discount}%</div>
            <div className="product-img">
              <img src={deal.image} alt={deal.name} />
            </div>
            <div className="product-info">
              <h3>{deal.name}</h3>
              <div className="product-price">
                <span className="current-price">₹{deal.price}</span>
                <span className="original-price">₹{deal.originalPrice}</span>
              </div>
              <div className="rating">
                {renderStars(deal.rating)}
                <span>({deal.reviews})</span>
              </div>
              <button 
                className="add-to-cart-btn"
                onClick={() => handleAddToCart(deal)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default DealsSection