import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomeCliente } from "./componentes/Cliente/HomeCliente";
import { Aluno } from "./componentes/Dono/Aluno";
import { Cadastro } from "./componentes/Dono/Cadastro";
import { Contrato } from "./componentes/Dono/Contrato";
import { Home } from "./componentes/Dono/Home";
import { ListarAlunos } from "./componentes/Dono/ListarAlunos";
import { ListarContratos } from "./componentes/Dono/ListarContratos";
import { Login } from "./componentes/Dono/Login";
import { TipoPagamento } from "./componentes/Dono/TipoPagamento";
import { Treino } from "./componentes/Dono/Treino";
import { TreinoAluno } from "./componentes/Dono/Treino_Aluno";
import { TreinosAlunos } from "./componentes/Dono/Treinos_Aluno";
import { ProtectedRoute } from "./componentes/ProtectedRoute/ProtectedRoute";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<ProtectedRoute><Home/></ProtectedRoute>}/>
        <Route path="/cadastrar" element={<ProtectedRoute><Cadastro/></ProtectedRoute>}/>
        <Route path="/aluno" element={<ProtectedRoute><Aluno/></ProtectedRoute>}/>
        <Route path="/treino" element={<ProtectedRoute><Treino/></ProtectedRoute>}/>
        <Route path="/treino/aluno" element={<ProtectedRoute><TreinoAluno/></ProtectedRoute>}/>
        <Route path="/contrato" element={<ProtectedRoute><Contrato/></ProtectedRoute>}/>
        <Route path="/visualizar/contratos" element={<ProtectedRoute><ListarContratos/></ProtectedRoute>}/>
        <Route path="/criar/pagamento" element={<ProtectedRoute><TipoPagamento/></ProtectedRoute>}/>
        <Route path="/listar/alunos" element={<ProtectedRoute><ListarAlunos/></ProtectedRoute>}/>
        <Route path="/treinos/aluno/:id" element={<ProtectedRoute><TreinosAlunos/></ProtectedRoute>}/>
        <Route path="/aluno/home" element={<ProtectedRoute><HomeCliente/></ProtectedRoute>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
