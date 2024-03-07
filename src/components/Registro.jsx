import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
// const { VITE_REACT_APP_USERNAME, VITE_REACT_APP_PASSWORD } = import.meta.env;

export default function Registro() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const validUsername = import.meta.env.VITE_REACT_APP_USERNAME;
  const validPassword = import.meta.env.VITE_REACT_APP_PASSWORD;

  useEffect(() => {
    // Verificar las cookies al cargar la aplicación
    const storedUsername = Cookies.get(import.meta.env.VITE_REACT_APP_USERNAME);
    const storedPassword = Cookies.get(import.meta.env.VITE_REACT_APP_PASSWORD);

    // Obtener las credenciales desde las variables de entorno
    const validUsername = import.meta.env.VITE_REACT_APP_USERNAME;
    const validPassword = import.meta.env.VITE_REACT_APP_PASSWORD;

    // Si las cookies son válidas, redirigir a /login
    if (storedUsername === validUsername && storedPassword === validPassword) {
      navigate("/login");
    }
  }, []);

  const handleRegistro = () => {
    if (username === validUsername && password === validPassword) {
      Cookies.set(validUsername, username, { expires: 5 / 24 });
      Cookies.set(validPassword, password, { expires: 5 / 24 });
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
