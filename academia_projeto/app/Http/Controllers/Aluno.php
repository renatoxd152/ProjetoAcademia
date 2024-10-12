<?php

namespace App\Http\Controllers;

use App\Models\Aluno as ModelsAluno;
use App\Models\Usuario;
use Illuminate\Http\Request;

class Aluno extends Controller
{
    public function listStudents()
    {
        $alunos = Usuario::where('tipo','aluno')->get();
        return response()->json($alunos,200);
    }

    public function listAllUsers()
    {
        $users = ModelsAluno::with('usuario')->get();
        return response()->json($users,200);
    }
}
