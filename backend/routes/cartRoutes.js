import express from 'express';
import { addToCart, removeFromCart, getCart, getCartTotal, clearCart } from '../controllers/cartController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();



// GET /api/cart - Get user's cart
router.get('/', protect, getCart);

// GET /api/cart/total - Calculate cart total
router.get('/total', protect, getCartTotal);

// POST /api/cart/add - Add product to cart
router.post('/add', protect, addToCart);

// DELETE /api/cart/remove/:productId - Remove product from cart
router.delete('/remove/:productId', protect, removeFromCart);

// POST /api/cart/clear - Clear entire cart (for checkout)
router.post('/clear', protect, clearCart);

export default router;
