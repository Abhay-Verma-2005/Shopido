import axios from 'axios';

const FAKE_STORE_BASE = (process.env.FAKESTORE_API_URL || 'https://fakestoreapi.com').replace(/\/+$/, '');
const FAKE_STORE_API = `${FAKE_STORE_BASE}/products`;
const CACHE_TTL_MS = 5 * 60 * 1000; // 5 minutes
const REQUEST_TIMEOUT_MS = 8000;

// Fallback data in case FakeStore is unreachable (keeps UI working)
const FALLBACK_PRODUCTS = [
  {
    id: 1,
    title: 'Classic Gold Necklace',
    price: 129.99,
    description: 'Elegant 18k gold plated necklace for everyday wear.',
    category: 'jewelery',
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    rating: { rate: 4.5, count: 120 }
  },
  {
    id: 2,
    title: "Men's Cotton Jacket",
    price: 59.99,
    description: 'Lightweight cotton jacket with comfortable fit.',
    category: "men's clothing",
    image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
    rating: { rate: 4.2, count: 430 }
  },
  {
    id: 3,
    title: 'Leather Handbag',
    price: 89.99,
    description: 'Genuine leather handbag with adjustable strap.',
    category: "women's clothing",
    image: 'https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg',
    rating: { rate: 4.6, count: 210 }
  },
  {
    id: 4,
    title: 'Wireless Headphones',
    price: 149.99,
    description: 'Noise-cancelling over-ear headphones with 30h battery.',
    category: 'electronics',
    image: 'https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg',
    rating: { rate: 4.7, count: 560 }
  }
];

let cachedProducts = [];
let lastFetchedAt = 0;

// Fetch products from FakeStore with simple in-memory caching
const fetchProducts = async () => {
  const now = Date.now();
  const isCacheValid = cachedProducts.length > 0 && (now - lastFetchedAt) < CACHE_TTL_MS;

  if (isCacheValid) {
    return cachedProducts;
  }

  try {
    const response = await axios.get(FAKE_STORE_API, { timeout: REQUEST_TIMEOUT_MS });
    cachedProducts = response.data || [];
  } catch (error) {
    console.error('FakeStore fetch error:', error?.message || error);
    cachedProducts = FALLBACK_PRODUCTS;
  }
  lastFetchedAt = now;
  return cachedProducts;
};

// GET /api/products - return limited list
export const getProducts = async (req, res) => {
  try {
    const products = await fetchProducts();

    // Optional limit via query (?limit=8), otherwise return all
    const limit = Number(req.query.limit) || null;
    const payload = limit && limit > 0 ? products.slice(0, limit) : products;

    res.json({ products: payload });
  } catch (error) {
    console.error('Get products error:', error.message);
    res.status(500).json({ message: 'Failed to fetch products' });
  }
};

// GET /api/products/search?query=shirt
export const searchProducts = async (req, res) => {
  try {
    const query = (req.query.query || '').toString().trim().toLowerCase();
    const products = await fetchProducts();

    const filtered = query
      ? products.filter((item) => item.title?.toLowerCase().includes(query))
      : products;

    res.json({ products: filtered });
  } catch (error) {
    console.error('Search products error:', error.message);
    res.status(500).json({ message: 'Failed to search products' });
  }
};

// GET /api/products/categories
export const getCategories = async (_req, res) => {
  try {
    const products = await fetchProducts();
    const categories = [...new Set(products.map((item) => item.category))];
    res.json({ categories });
  } catch (error) {
    console.error('Get categories error:', error.message);
    res.status(500).json({ message: 'Failed to fetch categories' });
  }
};

// GET /api/products/category/:category
export const filterByCategory = async (req, res) => {
  try {
    const categoryParam = (req.params.category || '').toString().toLowerCase();
    const products = await fetchProducts();

    const filtered = products.filter((item) =>
      item.category?.toLowerCase() === categoryParam
    );

    res.json({ products: filtered });
  } catch (error) {
    console.error('Filter products error:', error.message);
    res.status(500).json({ message: 'Failed to filter products' });
  }
};
