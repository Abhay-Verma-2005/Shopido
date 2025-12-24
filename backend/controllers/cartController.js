// In-memory cart store keyed by user ID
const carts = new Map();

const getUserCart = (userId) => {
  const key = userId.toString();
  if (!carts.has(key)) {
    carts.set(key, []);
  }
  return carts.get(key);
};

// GET /api/cart
export const getCart = (req, res) => {
  const cart = getUserCart(req.user._id);
  res.json({ cart });
};

// GET /api/cart/total
export const getCartTotal = (req, res) => {
  const cart = getUserCart(req.user._id);
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  res.json({ total });
};

// POST /api/cart/add
export const addToCart = (req, res) => {
  const { productId, quantity = 1, price, title, image } = req.body;

  if (!productId || !price || !title) {
    return res.status(400).json({ message: 'productId, price, and title are required' });
  }

  const cart = getUserCart(req.user._id);
  const id = productId.toString();
  const qty = Number(quantity) || 1;

  const existing = cart.find((item) => item.productId.toString() === id);

  if (existing) {
    existing.quantity += qty;
  } else {
    cart.push({
      productId: id,
      quantity: qty,
      price: Number(price),
      title,
      image
    });
  }

  carts.set(req.user._id.toString(), cart);
  res.status(201).json({ cart });
};

// DELETE /api/cart/remove/:productId
export const removeFromCart = (req, res) => {
  const productId = (req.params.productId || '').toString();
  const cart = getUserCart(req.user._id);

  const updatedCart = cart.filter((item) => item.productId.toString() !== productId);
  carts.set(req.user._id.toString(), updatedCart);

  res.json({ cart: updatedCart });
};

// POST /api/cart/clear
export const clearCart = (req, res) => {
  carts.set(req.user._id.toString(), []);
  res.json({ cart: [] });
};
