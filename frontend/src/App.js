import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Aluno } from "./componentes/Aluno";
import { Cadastro } from "./componentes/Cadastro";
import { Contrato } from "./componentes/Contrato";
import { Home } from "./componentes/Home";
import { ListarAlunos } from "./componentes/ListarAlunos";
import { ListarContratos } from "./componentes/ListarContratos";
import { Login } from "./componentes/Login";
import { ProtectedRoute } from "./componentes/ProtectedRoute/ProtectedRoute";
import { TipoPagamento } from "./componentes/TipoPagamento";
import { Treino } from "./componentes/Treino";
import { TreinoAluno } from "./componentes/Treino_Aluno";
import { TreinosAlunos } from "./componentes/Treinos_Aluno";
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
