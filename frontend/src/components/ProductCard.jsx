import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = async () => {
    const success = await addToCart(product);
    if (success) {
      alert(`✅ ${product.title} added to cart!`);
    } else {
      alert('❌ Failed to add to cart');
    }
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} className="product-image" />
      
      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-category">📦 {product.category}</p>
        <p className="product-price">₹{(product.price * 83).toFixed(2)}</p>
        
        <div className="product-rating">
          ⭐ {product.rating?.rate || 'N/A'} 
          ({product.rating?.count || 0} reviews)
        </div>
        
        <button onClick={handleAddToCart} className="btn-add-cart">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
