import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

// Define the structure of a User in the database
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true, // No two users can have same email
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [6, 'Password must be at least 6 characters']
  }
}, {
  timestamps: true // Automatically adds createdAt and updatedAt fields
});

userSchema.pre('save', async function(next) {
  // Only hash password if it's new or modified
  if (!this.isModified('password')) return next();
  
  // Hash the password with bcrypt (10 rounds of hashing)
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// METHOD to compare entered password with hashed password
userSchema.methods.comparePassword = async function(enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model('User', userSchema);

export default User;

