import React, { useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const storedUsername = Cookies.get("sistemas");
    const storedPassword = Cookies.get("glale");

    if (username === storedUsername && password === storedPassword) {
      navigate("/home");
    } else {
      navigate("/error");
    }
  };

  return (
    <div className="registro">
      <h2>Login</h2>
      <form>
        <label>
          Usuario:
          <input
            className="filtro"
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
        <button type="button" onClick={handleLogin}>
          Ingresar
        </button>
      </form>
    </div>
  );
}
