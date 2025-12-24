import User from '../models/User.js';
import { verifyToken } from '../utils/jwt.js';

// Protect routes by validating JWT and loading the user
export const protect = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization || '';
    const token = authHeader.startsWith('Bearer ') ? authHeader.split(' ')[1] : null;

    if (!token) {
      return res.status(401).json({ message: 'Not authorized, no token provided' });
    }

    const decoded = verifyToken(token);
    if (!decoded?.id) {
      return res.status(401).json({ message: 'Not authorized, token invalid' });
    }

    const user = await User.findById(decoded.id).select('-password');
    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error('Auth middleware error:', error.message);
    res.status(401).json({ message: 'Not authorized' });
  }
};
