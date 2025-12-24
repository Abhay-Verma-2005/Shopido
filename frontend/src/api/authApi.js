import api from './axios';

// REGISTER - Create new user account
export const register = async (name, email, password) => {
  const response = await api.post('/auth/register', { name, email, password });
  return response.data;
};

// LOGIN - Authenticate user
export const login = async (email, password) => {
  const response = await api.post('/auth/login', { email, password });
  return response.data;
};

// LOGOUT - Clear user session
export const logout = async () => {
  const response = await api.post('/auth/logout');
  return response.data;
};
