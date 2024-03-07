import React, { useEffect } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const sistemasCookie = Cookies.get("sistemas");
    const glaleCookie = Cookies.get("glale");

    if (!sistemasCookie || !glaleCookie) {
      navigate("/error");
    }
  }, [navigate]);

  return <>{children}</>;
};

export default PrivateRoute;
