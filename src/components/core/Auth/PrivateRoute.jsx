import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const { token } = useSelector((state) => state.auth);
  
  if (token !== null) {
    return children; // Render the children components directly
  } else {
    return <Navigate to="/login" />; // Redirect to login page if not authenticated
  }
};

export default PrivateRoute;
