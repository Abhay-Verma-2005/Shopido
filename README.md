# Shopido E-commerce Application

A modern full-stack e-commerce application built with **React + Vite** frontend and **Node.js + Express + MongoDB** backend.

## 🛍️ Features

- Modern React frontend with Vite for fast development
- RESTful API backend with Express.js
- MongoDB database with Mongoose ODM
- Product catalog with categories and search
- Shopping cart functionality
- Responsive design
- Real-time inventory management

## 🚀 Tech Stack

### Frontend (`shopido-react/`)
- **React 19** - Latest React with modern features
- **Vite** - Lightning-fast build tool and dev server
- **ESLint** - Code quality and consistency
- **CSS** - Styling and responsive design

### Backend (`shopido-backend/`)
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

## 📋 Prerequisites

Before running this application, make sure you have:

- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **MongoDB** - [Download here](https://www.mongodb.com/try/download/community) or use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- **Git** - [Download here](https://git-scm.com/downloads)

## 🛠️ Installation & Setup

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd e-commerce-main
```

### 2. Install Backend Dependencies
```bash
cd shopido-backend
npm install
```

### 3. Install Frontend Dependencies
```bash
cd ../shopido-react
npm install
```

### 4. Environment Configuration

Create a `.env` file in the `shopido-backend/` directory:

```env
# MongoDB Configuration
MONGODB_URI=mongodb://localhost:27017/shopido

# Server Configuration
PORT=5000
```

## 🚀 Running the Application

### Option 1: Using the Batch Script (Windows)

For easy startup on Windows, use the provided batch script:

```bash
# From the root directory
./start-shopido.bat
```

This script will:
- Start the backend server on `http://localhost:5000`
- Start the frontend dev server on `http://localhost:5173`
- Open both in separate command windows

### Option 2: Manual Startup

#### Start MongoDB
Make sure MongoDB is running on your system:
```bash
# Windows (if MongoDB is installed as a service)
net start MongoDB

# macOS/Linux
mongod
```

#### Start Backend Server
```bash
cd shopido-backend
npm run dev    # Development with nodemon
# OR
npm start      # Production
```

#### Start Frontend Development Server
```bash
cd shopido-react
npm run dev
```

## 📊 API Endpoints

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Create new product
- `PUT /api/products/:id` - Update product
- `DELETE /api/products/:id` - Delete product
- `GET /api/products/category/:category` - Get products by category

### Health Check
- `GET /api/health` - API health status

### Query Parameters
- `category` - Filter by category (electronics, fashion, home, books, food)
- `search` - Search products by name

## 🌱 Seeding Data

To populate the database with sample products:

```bash
cd shopido-backend
npm run seed
```

## 🛠️ Development Scripts

### Backend Scripts
```bash
npm start      # Start production server
npm run dev    # Start development server with nodemon
npm run seed   # Seed database with sample data
```

### Frontend Scripts
```bash
npm run dev     # Start development server
npm run build   # Build for production
npm run preview # Preview production build
npm run lint    # Run ESLint
```

## 🌐 Application URLs

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:5000
- **API Health Check**: http://localhost:5000/api/health
- **Products API**: http://localhost:5000/api/products

## 📁 Project Structure

```
e-commerce-main/
├── shopido-backend/          # Express.js API server
│   ├── package.json
│   ├── server.js            # Main server file
│   ├── seed.js              # Database seeding
│   └── .env                 # Environment variables
├── shopido-react/           # React frontend
│   ├── package.json
│   ├── vite.config.js       # Vite configuration
│   ├── src/
│   │   ├── App.jsx          # Main app component
│   │   ├── main.jsx         # Entry point
│   │   ├── components/      # React components
│   │   └── context/         # Context providers
│   └── eslint.config.js     # ESLint configuration
├── start-shopido.bat        # Windows startup script
└── README.md
```

## 🐛 Troubleshooting

### MongoDB Connection Issues
- Ensure MongoDB is installed and running
- Check the connection URI in `.env` file
- Default connection: `mongodb://localhost:27017/shopido`

### Port Conflicts
- Backend default port: 5000
- Frontend default port: 5173
- Change ports in respective configuration files if needed

### Dependencies
- Run `npm install` in both directories if modules are missing
- Clear npm cache: `npm cache clean --force`

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👥 Team

Shopido Team

---

**Happy Shopping! 🛒✨**
