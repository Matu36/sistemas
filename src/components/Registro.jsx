import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
// const { VITE_REACT_APP_USERNAME, VITE_REACT_APP_PASSWORD } = import.meta.env;

export default function Registro() {
  const navigate = useNavigate();

  useEffect(() => {
    // Verificar las cookies al cargar la aplicación
    const storedUsername = Cookies.get("sistemas");
    const storedPassword = Cookies.get("glale");

    // Si las cookies son válidas, redirigir a /login
    if (storedUsername === "sistemas" && storedPassword === "glale") {
      navigate("/login");
    }
  }, []);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegistro = () => {
    Cookies.set("sistemas", username, { expires: 5 / 24 }); // 5 horas en días
    Cookies.set("glale", password, { expires: 5 / 24 });

    navigate("/login");
  };

  return (
    <div className="registro">
      <h2>Registro</h2>
      <form>
        <label>
          Usuario:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Contraseña:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="button" onClick={handleRegistro}>
          Registrarse
        </button>
      </form>
    </div>
  );
}
