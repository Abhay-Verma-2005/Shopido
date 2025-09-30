const mongoose = require('mongoose');
require('dotenv').config();

const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/shopido';

// Product Schema (same as in server.js)
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  originalPrice: {
    type: Number,
    min: 0
  },
  image: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true,
    enum: ['electronics', 'fashion', 'home', 'books', 'food']
  },
  desc: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
    default: 0
  },
  reviews: {
    type: Number,
    min: 0,
    default: 0
  },
  inStock: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

const Product = mongoose.model('Product', productSchema);

// Sample product data
const sampleProducts = [
  // Electronics
  {
    name: 'Wireless Headphones',
    price: 99.99,
    originalPrice: 129.99,
    image: '/temp/img.jpg',
    category: 'electronics',
    desc: 'High-quality wireless headphones with noise cancellation and premium sound quality.',
    rating: 4.5,
    reviews: 128,
    inStock: true
  },
  {
    name: 'Smart 4K TV - 55"',
    price: 499.99,
    originalPrice: 599.99,
    image: '/temp/img.jpg',
    category: 'electronics',
    desc: 'Ultra HD 4K Smart TV with streaming capabilities, HDR support, and built-in apps.',
    rating: 4.7,
    reviews: 305,
    inStock: true
  },
  {
    name: 'Gaming Laptop',
    price: 1299.99,
    originalPrice: 1499.99,
    image: '/temp/img.jpg',
    category: 'electronics',
    desc: 'High-performance gaming laptop with RTX graphics, 16GB RAM, and SSD storage.',
    rating: 4.8,
    reviews: 211,
    inStock: true
  },
  {
    name: 'Wireless Charging Pad',
    price: 29.99,
    originalPrice: 39.99,
    image: '/temp/img.jpg',
    category: 'electronics',
    desc: 'Fast wireless charging pad compatible with all Qi-enabled devices.',
    rating: 4.3,
    reviews: 178,
    inStock: true
  },
  
  // Fashion
  {
    name: 'Premium Denim Jacket',
    price: 79.99,
    originalPrice: 99.99,
    image: '/temp/img1.jpg',
    category: 'fashion',
    desc: 'Stylish denim jacket made from premium materials with classic fit and durable construction.',
    rating: 4.6,
    reviews: 143,
    inStock: true
  },
  {
    name: 'Running Shoes',
    price: 89.99,
    originalPrice: 119.99,
    image: '/temp/img1.jpg',
    category: 'fashion',
    desc: 'Comfortable running shoes with advanced cushioning technology for daily workouts.',
    rating: 4.8,
    reviews: 276,
    inStock: true
  },
  {
    name: 'Summer Dress',
    price: 45.99,
    originalPrice: 59.99,
    image: '/temp/img1.jpg',
    category: 'fashion',
    desc: 'Light and breezy summer dress perfect for casual outings and warm weather.',
    rating: 4.4,
    reviews: 198,
    inStock: true
  },
  {
    name: 'Leather Wallet',
    price: 34.99,
    originalPrice: 49.99,
    image: '/temp/img1.jpg',
    category: 'fashion',
    desc: 'Genuine leather wallet with multiple card slots and RFID protection.',
    rating: 4.7,
    reviews: 165,
    inStock: true
  },
  
  // Home & Kitchen
  {
    name: 'Coffee Maker',
    price: 69.99,
    originalPrice: 89.99,
    image: '/temp/img2.jpg',
    category: 'home',
    desc: 'Automatic coffee maker with programmable timer and thermal carafe.',
    rating: 4.7,
    reviews: 234,
    inStock: true
  },
  {
    name: 'Robot Vacuum Cleaner',
    price: 199.99,
    originalPrice: 249.99,
    image: '/temp/img2.jpg',
    category: 'home',
    desc: 'Smart robot vacuum with app control, mapping technology, and automatic charging.',
    rating: 4.6,
    reviews: 189,
    inStock: true
  },
  {
    name: 'Bedding Set - Queen',
    price: 79.99,
    originalPrice: 99.99,
    image: '/temp/img2.jpg',
    category: 'home',
    desc: 'Luxurious queen-size bedding set with hypoallergenic materials and soft finish.',
    rating: 4.5,
    reviews: 156,
    inStock: true
  },
  {
    name: 'Non-stick Cookware Set',
    price: 129.99,
    originalPrice: 169.99,
    image: '/temp/img2.jpg',
    category: 'home',
    desc: 'Professional-grade non-stick cookware set with heat-resistant handles.',
    rating: 4.8,
    reviews: 212,
    inStock: true
  },
  
  // Books
  {
    name: 'The Modern Cookbook',
    price: 24.99,
    originalPrice: 34.99,
    image: '/temp/img3.jpg',
    category: 'books',
    desc: 'Contemporary recipes for modern cooking with step-by-step instructions and tips.',
    rating: 4.6,
    reviews: 178,
    inStock: true
  },
  {
    name: 'Bestselling Fiction Novel',
    price: 19.99,
    originalPrice: 29.99,
    image: '/temp/img3.jpg',
    category: 'books',
    desc: 'Award-winning fiction novel that captivated millions of readers worldwide.',
    rating: 4.9,
    reviews: 325,
    inStock: true
  },
  {
    name: 'Business Strategy Guide',
    price: 34.99,
    originalPrice: 44.99,
    image: '/temp/img3.jpg',
    category: 'books',
    desc: 'Comprehensive guide to business strategy with real-world case studies.',
    rating: 4.7,
    reviews: 215,
    inStock: true
  },
  {
    name: 'Self-Help Bestseller',
    price: 18.99,
    originalPrice: 24.99,
    image: '/temp/img3.jpg',
    category: 'books',
    desc: 'Life-changing self-help book with practical advice for personal growth.',
    rating: 4.5,
    reviews: 263,
    inStock: true
  },
  
  // Food & Grocery
  {
    name: 'Organic Coffee Beans',
    price: 14.99,
    originalPrice: 19.99,
    image: '/temp/img4.jpg',
    category: 'food',
    desc: 'Premium organic coffee beans sourced from sustainable farms.',
    rating: 4.8,
    reviews: 198,
    inStock: true
  },
  {
    name: 'Assorted Snack Box',
    price: 29.99,
    originalPrice: 39.99,
    image: '/temp/img4.jpg',
    category: 'food',
    desc: 'Variety pack of healthy and delicious snacks for all occasions.',
    rating: 4.5,
    reviews: 156,
    inStock: true
  },
  {
    name: 'Premium Chocolate Collection',
    price: 24.99,
    originalPrice: 34.99,
    image: '/temp/img4.jpg',
    category: 'food',
    desc: 'Gourmet chocolate collection with dark, milk, and white chocolate varieties.',
    rating: 4.9,
    reviews: 234,
    inStock: true
  },
  {
    name: 'Artisan Tea Selection',
    price: 19.99,
    originalPrice: 26.99,
    image: '/temp/img4.jpg',
    category: 'food',
    desc: 'Curated selection of premium teas from around the world.',
    rating: 4.6,
    reviews: 187,
    inStock: true
  }
];

// Seed function
async function seedDatabase() {
  try {
    // Connect to MongoDB
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ Connected to MongoDB');

    // Clear existing products
    await Product.deleteMany({});
    console.log('🗑️ Cleared existing products');

    // Insert sample products
    const insertedProducts = await Product.insertMany(sampleProducts);
    console.log(`✅ Successfully seeded ${insertedProducts.length} products`);

    // Display seeded products by category
    const categories = ['electronics', 'fashion', 'home', 'books', 'food'];
    for (const category of categories) {
      const count = await Product.countDocuments({ category });
      console.log(`📦 ${category}: ${count} products`);
    }

    console.log('🎉 Database seeding completed successfully!');
    process.exit(0);

  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
}

// Run seeding if this file is executed directly
if (require.main === module) {
  seedDatabase();
}

module.exports = seedDatabase;