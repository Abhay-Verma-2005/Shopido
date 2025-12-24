import axios from 'axios';

// Use env-configured API host; default to deployed backend
const API_HOST = (import.meta.env.VITE_API_URL || 'https://shopido-backend-v12.vercel.app').replace(/\/+$/, '');

// Create axios instance with base configuration
const api = axios.create({
  baseURL: `${API_HOST}/api`,
  headers: {
    'Content-Type': 'application/json'
  }
});

// REQUEST INTERCEPTOR - Adds JWT token to every request
api.interceptors.request.use(
  (config) => {
    // Get token from localStorage
    const token = localStorage.getItem('token');
    
    // If token exists, add to Authorization header
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// RESPONSE INTERCEPTOR - Handles common errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // If token expired or invalid, redirect to login
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default api;
