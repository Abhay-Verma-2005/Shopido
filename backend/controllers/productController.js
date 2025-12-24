import axios from 'axios';

const PRODUCTS_JSON_URL = (process.env.PRODUCTS_JSON_URL || 'https://raw.githubusercontent.com/Abhay-Verma-2005/Abhay-Verma-Files/main/products.json').replace(/\/+$/, '');

// Fetch fresh products from the GitHub-hosted JSON source
const fetchProducts = async () => {
  const { data } = await axios.get(PRODUCTS_JSON_URL, { timeout: 8000 });
  if (!Array.isArray(data)) {
    throw new Error('Invalid products payload');
  }
  return data;
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
    res.status(502).json({ message: 'Failed to fetch products' });
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
    res.status(502).json({ message: 'Failed to fetch products' });
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
    res.status(502).json({ message: 'Failed to fetch products' });
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
    res.status(502).json({ message: 'Failed to fetch products' });
  }
};
