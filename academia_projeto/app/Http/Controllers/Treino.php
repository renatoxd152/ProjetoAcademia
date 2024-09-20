<?php

namespace App\Http\Controllers;

use App\Models\Treino as ModelsTreino;
use Illuminate\Http\Request;
class Treino extends Controller
{
    public function createWorkout(Request $request)
    {
        ModelsTreino::create(['nome'=>$request->nome,'descricao'=>$request->descricao,'series'=>$request->series]);
        $data = ['mensagem' =>'Treino criado com sucesso'];
        return response()->json($data,200);
    }

    public function findAll()
    {
        $treinos = ModelsTreino::findAll();
        $data = ['treinos'=>$treinos];
        return response()->json($data,200);
    }

    public function delete($id)
    {
        $treino = ModelsTreino::find($id);
        if($treino)
        {
            $treino->delete();
            return response()->json(['mensagem'=>'O treino foi excluído com sucesso!'],200);
        }
        else
        {
            return response()->json(['mensagem'=>'O treino não foi encontrado!'],200);
        }
    }

    public function update($id,Request $request)
    {
        $treino = ModelsTreino::find($id);
        $treino->update($request->all());
        return response()->json(['mensagem'=>'O treino foi atualizado com sucesso!'],200);
    }
}
