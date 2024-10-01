import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Aluno } from "./componentes/Aluno";
import { Cadastro } from "./componentes/Cadastro";
import { Contrato } from "./componentes/Contrato";
import { Home } from "./componentes/Home";
import { ListarContratos } from "./componentes/ListarContratos";
import { Login } from "./componentes/Login";
import { TipoPagamento } from "./componentes/TipoPagamento";
import { Treino } from "./componentes/Treino";
import { TreinoAluno } from "./componentes/Treino_Aluno";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/cadastrar" element={<Cadastro/>}/>
        <Route path="/aluno" element={<Aluno/>}/>
        <Route path="/treino" element={<Treino/>}/>
        <Route path="/treino/aluno" element={<TreinoAluno/>}/>
        <Route path="/contrato" element={<Contrato/>}/>
        <Route path="/visualizar/contratos" element={<ListarContratos/>}/>
        <Route path="/criar/pagamento" element={<TipoPagamento/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
