import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }: any) => {
  const { loginState } = useSelector((state: any) => state.login);
  const { signupState } = useSelector((state: any) => state.signup);

  if (!loginState && !signupState) {
    return <Navigate to="/signup" />;
  } else {
    return children;
  }
};

export default PrivateRoute;
