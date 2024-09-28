import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cadastro } from "./componentes/Cadastro";
import { Login } from "./componentes/Login";
import { Usuario } from "./componentes/Usuario";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/save/user" element={<Usuario />} />
        <Route path="/" element={<Login />} />
        <Route path="/cadastrar" element={<Cadastro/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
