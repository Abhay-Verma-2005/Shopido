import jwt from 'jsonwebtoken';

// GENERATE JWT TOKEN - Creates authentication token for user
export const generateToken = (userId) => {
  const secret = process.env.JWT_SECRET || 'dev-secret-key-change-me';

  return jwt.sign(
    { id: userId },           // Payload - data stored in token
    secret,                   // Secret key - used to sign the token
    { expiresIn: '30d' }      // Token expires in 30 days
  );
};

// VERIFY JWT TOKEN - Checks if token is valid
export const verifyToken = (token) => {
  const secret = process.env.JWT_SECRET || 'dev-secret-key-change-me';

  try {
    return jwt.verify(token, secret);
  } catch (error) {
    return null;
  }
};
