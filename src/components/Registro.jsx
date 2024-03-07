import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
// const { VITE_REACT_APP_USERNAME, VITE_REACT_APP_PASSWORD } = import.meta.env;

export default function Registro() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

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
    if (username === "sistemas" && password === "glale") {
      Cookies.set("sistemas", username, { expires: 5 / 24 });
      Cookies.set("glale", password, { expires: 5 / 24 });
      navigate("/login");
    } else {
      setErrorMessage("Las credenciales son incorrectas");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleRegistro();
    }
  };

  return (
    <div className="registro">
      <h2>Registro</h2>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      <form>
        <label>
          Usuario:
          <input
            className="filtro"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </label>
        <br />
        <label>
          Contraseña:
          <input
            className="filtro"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={handleKeyDown}
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
