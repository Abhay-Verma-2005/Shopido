import express from 'express';
import { register, login, logout } from '../controllers/authController.js';

const router = express.Router();

// POST /api/auth/register - Create new user account
router.post('/register', register);

// POST /api/auth/login - Login existing user
router.post('/login', login);

// POST /api/auth/logout - Logout user
router.post('/logout', logout);

export default router;
