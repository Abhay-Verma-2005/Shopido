import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  // Wait for auth check to complete
  if (loading) {
    return <div>Loading...</div>;
  }

  // If user is not logged in, redirect to login page
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // User is logged in, show the protected page
  return children;
};

export default ProtectedRoute;
