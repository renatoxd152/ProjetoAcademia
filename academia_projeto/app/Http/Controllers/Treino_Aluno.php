<?php

namespace App\Http\Controllers;

use App\Models\Treino_Aluno_Model;
use Illuminate\Http\Request;

class Treino_Aluno extends Controller
{
    public function createTraining(Request $request)
    {
        Treino_Aluno_Model::create(['duracao_treino_inicio'=>$request->inicio,
        'duracao_treino_fim'=>$request->fim,
        'series'=>$request->series,
        'aluno_id'=>$request->aluno,
        'treino_id'=>$request->treino]);

        return response()->json(['mensagem'=>'O treino do aluno foi criado com sucesso!'],200);
    }

    public function deleteTraining($id)
    {
        $treino = Treino_Aluno_Model::find($id);
        if($treino)
        {
            $treino->delete();
            return response()->json(['mensagem'=>'O treino do aluno foi deletado com sucesso!'],200);
        }
        else
        {
            return response()->json(['mensagem'=>'Não foi possível deletar o treino!'],200);
        }
    }

    public function updateTraining($id,Request $request)
    {
        $treino = Treino_Aluno_Model::find($id);
        $treino->update($request->all());
        return response()->json(['mensagem'=>'O treino do aluno foi atualizado com sucesso!'],200);
    }

    public function findAll()
    {
        $treinos = Treino_Aluno_Model::findAll();
        $data = ['treinos'=>$treinos];
        return response()->json($data,200);
    }
}
