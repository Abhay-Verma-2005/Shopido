import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import authRoutes from './routes/authRoutes.js';
import productRoutes from './routes/productRoutes.js';
import cartRoutes from './routes/cartRoutes.js';

// Resolve __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// CORS configuration
const corsOptions = {
	origin: function (origin, callback) {
		// Allow requests with no origin (mobile apps, Postman, etc.)
		if (!origin) return callback(null, true);
		
		// Get allowed origins from environment variable or use defaults
		const allowedOrigins = process.env.CORS_ORIGINS 
			? process.env.CORS_ORIGINS.split(',').map(o => o.trim())
			: ['http://localhost:5173', 'http://127.0.0.1:5173'];
		
		// Check exact match
		if (allowedOrigins.includes(origin)) {
			return callback(null, true);
		}
		
		// Allow all *.vercel.app domains (for Vercel preview deployments)
		if (origin.endsWith('.vercel.app')) {
			return callback(null, true);
		}
		
		console.warn(`CORS blocked origin: ${origin}`);
		callback(null, false);
	},
	credentials: true,
	methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
	allowedHeaders: ['Content-Type', 'Authorization'],
	exposedHeaders: ['Content-Length', 'X-Request-Id'],
	maxAge: 600,
	optionsSuccessStatus: 204
};

app.use(cors(corsOptions));

// Body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static assets (images used by frontend cards)
app.use('/public', express.static(path.join(__dirname, 'public')));

// Health check
app.get('/health', (_req, res) => {
	res.json({ status: 'ok' });
});

// API routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);

// Root route
app.get('/', (_req, res) => {
	res.json({ message: 'Shopido API is running' });
});

export default app;

