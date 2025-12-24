import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import CategoryFilter from '../components/CategoryFilter';
import ProductCard from '../components/ProductCard';
import { getProducts, searchProducts, filterByCategory } from '../api/productApi';

const API_HOST =
  import.meta.env.VITE_API_URL ||
  (window.location.hostname === 'localhost' ? 'http://localhost:5000' : window.location.origin);

const ASSET_BASE = `${API_HOST}/public/`;

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Load products when page first loads
  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      setLoading(true);
      const data = await getProducts();
      setProducts(data.products);
    } catch (err) {
      setError('Failed to load products');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Handle search
  const handleSearch = async (searchTerm) => {
    try {
      setLoading(true);
      if (searchTerm) {
        const data = await searchProducts(searchTerm);
        setProducts(data.products);
      } else {
        // If search cleared, show all products
        await loadProducts();
      }
    } catch (err) {
      setError('Search failed');
    } finally {
      setLoading(false);
    }
  };

  // Handle category filter
  const handleFilter = async (category) => {
    try {
      setLoading(true);
      if (category) {
        const data = await filterByCategory(category);
        setProducts(data.products);
      } else {
        // If "All Categories" selected, show all products
        await loadProducts();
      }
    } catch (err) {
      setError('Filter failed');
    } finally {
      setLoading(false);
    }
  };

  const categoryCards = [
    { title: 'Electronics', filterKey: 'electronics', image: `${ASSET_BASE}/categories/ele.png` },
    { title: "Men's Clothing", filterKey: "men's clothing", image: `${ASSET_BASE}/categories/Men_Clothing.png` },
    { title: "Women's Clothing", filterKey: "women's clothing", image: `${ASSET_BASE}/categories/Women_Clothing.png` },
    { title: 'Jewelery', filterKey: 'jewelery', image: `${ASSET_BASE}/categories/jewellary.png` }
  ];

  const heroBackground = {
    backgroundImage: `linear-gradient(120deg, rgba(181, 82, 192, 0.26), rgba(139, 49, 7, 0.068)), url(${ASSET_BASE}/img.jpg)`
  };

  return (
    <div className="page-container">
      <Navbar onSearch={handleSearch} />

      <div className="content-container">
        <section className="hero-banner" style={heroBackground}>
          <div className="hero-text">
            <p className="hero-kicker">Welcome to Shopido</p>
            <h1>Discover amazing products at the best prices</h1>
            <p className="hero-sub">Fresh picks, daily deals, and quick delivery across India.</p>
            <div className="hero-actions">
              <button className="btn-primary">Shop Now</button>
              <button className="btn-ghost" onClick={() => handleFilter('electronics')}>View Electronics</button>
            </div>
          </div>
        </section>

        <section className="category-section">
          <div className="section-header">
            <h2>Shop by Category</h2>
            <span className="section-sub">Browse curated picks</span>
          </div>
          <div className="category-grid">
            {categoryCards.map((item) => (
              <div
                key={item.title}
                className="category-card"
                onClick={() => (item.filterKey ? handleFilter(item.filterKey) : loadProducts())}
              >
                <img src={item.image} alt={item.title} />
                <p>{item.title}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="controls">
          <CategoryFilter onFilter={handleFilter} />
          <div className="controls-summary">Showing {products.length} products</div>
        </div>

        {/* Error Message */}
        {error && <div className="error-message">{error}</div>}

        {/* Loading State */}
        {loading && <div className="loading">Loading products...</div>}

        {/* Products Grid */}
        {!loading && products.length > 0 && (
          <div className="products-grid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

        {/* No Products Found */}
        {!loading && products.length === 0 && (
          <div className="no-products">
            No products found. Try a different search or category.
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
