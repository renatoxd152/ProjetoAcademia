<?php

namespace App\Http\Controllers;

use App\Models\Treino_Aluno_Model;
use Illuminate\Http\Request;

class Treino_Aluno extends Controller
{
    public function createTraining(Request $request)
{
    if (!is_array($request->treinos)) {
        return response()->json(['erro' => 'Treinos devem ser um array.'], 400);
    }

    foreach ($request->treinos as $treino) {
        
        $treinoExistente = Treino_Aluno_Model::where('aluno_id', $request->aluno)
            ->where('treino_id', $treino['treino_id'])
            ->first();

        if ($treinoExistente) {
            return response()->json(['erro' => 'O treino já está salvo para este aluno.'], 400);
        }

        Treino_Aluno_Model::create([
            'duracao_treino_inicio' => $treino['inicio'],
            'duracao_treino_fim' => $treino['fim'],
            'series' => $treino['series'],
            'aluno_id' => $request->aluno,
            'treino_id' => $treino['treino_id']
        ]);
    }

    return response()->json(['mensagem' => 'Os treinos do aluno foram criados com sucesso!'], 200);
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

    public function getTrainingStudent($id)
    {
        $treinos = Treino_Aluno_Model::where('aluno_id',$id)->with('treino')->get();
        return response()->json($treinos,200);
    }
}
