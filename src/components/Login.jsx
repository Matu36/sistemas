import React, { useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const storedUsername = Cookies.get("sistemas");
    const storedPassword = Cookies.get("glale");

    if (username === storedUsername && password === storedPassword) {
      navigate("/home");
    } else {
      setErrorMessage("Las credenciales son incorrectas");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <div className="black">
      <div className="registro">
        <h2>Login</h2>
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
          <button type="button" onClick={handleLogin}>
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
}
