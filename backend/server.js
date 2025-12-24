import app from './app.js';
import connectDB from './config/db.js';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Get port from environment or use 5000 as default
const PORT = process.env.PORT || 5000;

// Connect to MongoDB database
connectDB();

// Start the Express server (only in development)
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
  });
}

// Export for Vercel serverless
export default app;

/*
📁 FILE PURPOSE: server.js
========================
This is the ENTRY POINT of our backend application.
Think of it as the "start button" for your server.

WHAT IT DOES:
- Loads environment variables (like database password, port number)
- Connects to MongoDB database
- Starts the Express server on a specific port (default 5000)

HOW IT WORKS:
1. First, it imports the Express app configuration from app.js
2. Imports the database connection function
3. Loads secrets from .env file (passwords, keys)
4. Calls connectDB() to establish connection with MongoDB
5. Starts listening on port 5000 (or whatever PORT you set in .env)

ANALOGY:
Think of this as turning on a restaurant - you unlock the door (start server),
connect utilities (database), and wait for customers (HTTP requests).
*/
