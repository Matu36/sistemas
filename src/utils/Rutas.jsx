import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Registro from "../components/Registro";
import Login from "../components/Login";
import Home from "../components/Home";
import Error from "../components/Error";
import PrivateRoute from "../components/PrivateRoute";

export default function Rutas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={"/"} element={<Registro />} />
        <Route exact path={"/login"} element={<Login />} />
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route exact path={"/error"} element={<Error />} />
        <Route path={"*"} element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
