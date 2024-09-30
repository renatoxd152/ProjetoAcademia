import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Aluno } from "./componentes/Aluno";
import { Cadastro } from "./componentes/Cadastro";
import { Home } from "./componentes/Home";
import { Login } from "./componentes/Login";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/cadastrar" element={<Cadastro/>}/>
        <Route path="/aluno" element={<Aluno/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
