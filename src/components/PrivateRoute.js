import React from "react";
import { Route, Navigate } from "react-router-dom";

const PrivateRoute = ({ path, element: Element, isAuthenticated }) => {
  if (isAuthenticated) {
    return <Route path={path} element={<Element />} />;
  } else {
    return <Navigate to="/login" />;
  }
};

export default PrivateRoute;
