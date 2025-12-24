import express from 'express';
import { 
  getProducts, 
  searchProducts, 
  filterByCategory,
  getCategories 
} from '../controllers/productController.js';

const router = express.Router();

// GET /api/products - Get all products (limit 8)
router.get('/', getProducts);

// GET /api/products/search?query=shirt - Search products by title
router.get('/search', searchProducts);

// GET /api/products/categories - Get all available categories
router.get('/categories', getCategories);

// GET /api/products/category/:category - Filter by specific category
router.get('/category/:category', filterByCategory);

export default router;