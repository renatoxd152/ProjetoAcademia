import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./componentes/Login";
import { Usuario } from "./componentes/Usuario";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/save/user" element={<Usuario />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
