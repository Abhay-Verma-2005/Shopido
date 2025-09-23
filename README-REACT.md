# Shopido - Modern E-commerce Application

A modern e-commerce application built with React (Vite) frontend and Node.js/Express/MongoDB backend.

## 🚀 Features

- Modern React frontend with Vite for fast development
- Responsive design with mobile-first approach
- Shopping cart functionality with local storage persistence
- Product catalog with category filtering
- MongoDB integration for data persistence
- Clean and beginner-friendly code structure
- No authentication required (simplified for learning)

## 📁 Project Structure

```
e-commerce-main/
├── shopido-react/          # React frontend (Vite)
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── context/        # React context providers
│   │   └── ...
│   └── public/
│       └── temp/           # Product images
├── shopido-backend/        # Node.js backend
│   ├── server.js           # Main server file
│   ├── seed.js             # Database seeding
│   └── package.json
└── start-shopido.bat       # Easy startup script
```

## 🛠️ Prerequisites

1. **Node.js** (v14 or higher)
   - Download from [nodejs.org](https://nodejs.org/)

2. **MongoDB** (Community Edition)
   - Download from [mongodb.com](https://www.mongodb.com/try/download/community)
   - Make sure MongoDB service is running

## 📦 Quick Start

### Method 1: Using the Batch File (Recommended for Windows)

1. **Double-click** `start-shopido.bat`
2. The script will automatically start both backend and frontend servers
3. Wait for both servers to start up

### Method 2: Manual Setup

#### 1. Setup Backend
```bash
# Navigate to backend directory
cd shopido-backend

# Install dependencies
npm install

# Seed the database with sample products
npm run seed

# Start the backend server
npm start
```

#### 2. Setup Frontend
```bash
# Navigate to frontend directory (in a new terminal)
cd shopido-react

# Install dependencies (if not already installed)
npm install

# Start the development server
npm run dev
```

## 🌐 Access the Application

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:5000
- **API Health Check**: http://localhost:5000/api/health

## 📚 API Endpoints

- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Add new product
- `PUT /api/products/:id` - Update product
- `DELETE /api/products/:id` - Delete product
- `GET /api/products/category/:category` - Get products by category

## 🎯 Key Features Implemented

### Frontend (React + Vite)
- **Header**: Navigation with search functionality
- **Hero Section**: Welcome banner with call-to-action
- **Categories**: Product category selection
- **Product Grid**: Dynamic product display with filtering
- **Deals Section**: Special offers showcase
- **Cart Sidebar**: Shopping cart management
- **Footer**: Links and company information

### Backend (Node.js + Express + MongoDB)
- RESTful API for product management
- MongoDB integration with Mongoose
- CORS enabled for cross-origin requests
- Error handling and validation
- Database seeding with sample data

### State Management
- **Cart Context**: Global cart state with localStorage persistence
- **Product Context**: Product data management with API integration

## 🔧 Customization

### Adding New Products
1. Use the backend API endpoints to add products
2. Or modify the `seed.js` file and run `npm run seed`

### Styling
- All styles are in `shopido-react/src/App.css`
- CSS custom properties (variables) for easy theming
- Fully responsive design

### Images
- Product images are stored in `shopido-react/public/temp/`
- Update image paths in the database or seed file

## 🚀 Deployment Tips

### Frontend (Vite)
```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

### Backend
- Set environment variables for production
- Use a cloud MongoDB service (MongoDB Atlas)
- Deploy to services like Heroku, Vercel, or Railway

## 🐛 Troubleshooting

### Common Issues

1. **MongoDB Connection Error**
   - Ensure MongoDB service is running
   - Check connection string in `server.js`

2. **Port Already in Use**
   - Backend (5000): Change PORT in `server.js`
   - Frontend (5173): Vite will automatically find next available port

3. **Images Not Loading**
   - Ensure images are in `shopido-react/public/temp/`
   - Check image paths in the database

4. **API Not Responding**
   - Check if backend server is running on port 5000
   - Verify CORS settings in `server.js`

## 📝 Development Notes

### For Beginners
- Start by exploring the component structure in `src/components/`
- Understand React Context usage in `src/context/`
- Study the API integration in ProductContext
- Modify styles in `App.css` to see changes

### Architecture Decisions
- No authentication to keep it simple for learning
- Local storage for cart persistence
- Context API instead of Redux for simplicity
- Single CSS file for easier management

## 🤝 Contributing

This is a learning project. Feel free to:
1. Add new features
2. Improve the UI/UX
3. Add authentication
4. Implement payment integration
5. Add product reviews system

## 📄 License

This project is open source and available under the MIT License.

---

**Happy Coding! 🎉**

For any issues or questions, feel free to create an issue or reach out!