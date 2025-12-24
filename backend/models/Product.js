import mongoose from 'mongoose';

// Define the structure of a Product in the database
const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  rating: {
    rate: Number,
    count: Number
  }
}, {
  timestamps: true
});

const Product = mongoose.model('Product', productSchema);

export default Product;
