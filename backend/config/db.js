import mongoose from 'mongoose';

// Connect to MongoDB using URI from environment or local fallback
const connectDB = async () => {
  const mongoURI = process.env.MONGO_URI || process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/shopido';

  try {
    mongoose.set('strictQuery', true);
    await mongoose.connect(mongoURI);

    console.log('✅ MongoDB connected');
  } catch (error) {
    console.error('❌ MongoDB connection error:', error.message);
    process.exit(1);
  }
};

export default connectDB;
