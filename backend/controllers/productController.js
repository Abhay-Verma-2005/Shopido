import axios from 'axios';

const FAKE_STORE_API_BASE = (process.env.FAKESTORE_API_URL || 'https://fakestoreapi.com').replace(/\/+$/, '');
const FAKE_STORE_API = `${FAKE_STORE_API_BASE}/products`;
const REQUEST_TIMEOUT_MS = 8000;
const CACHE_TTL_MS = 5 * 60 * 1000; // 5 minutes

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
    lastFetchedAt = now;
    return cachedProducts;
  } catch (error) {
    // If we have cached data, serve it as a stale fallback instead of failing outright
    const fallback = cachedProducts.length ? cachedProducts : null;
    console.error('Fetch products error:', error.message);
    if (fallback) {
      return fallback;
    }
    throw error;
  }
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
    res.status(502).json({ message: 'Upstream product service unavailable' });
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
    res.status(502).json({ message: 'Upstream product service unavailable' });
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
    res.status(502).json({ message: 'Upstream product service unavailable' });
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
    res.status(502).json({ message: 'Upstream product service unavailable' });
  }
};
