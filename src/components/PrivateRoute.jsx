import React, { useEffect } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const sistemasCookie = Cookies.get(import.meta.env.VITE_REACT_APP_USERNAME);
    const glaleCookie = Cookies.get(import.meta.env.VITE_REACT_APP_PASSWORD);

    if (!sistemasCookie || !glaleCookie) {
      navigate("/error");
    }
  }, [navigate]);

  return <>{children}</>;
};

export default PrivateRoute;
