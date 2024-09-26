<?php

namespace App\Http\Controllers;

use App\Models\Contrato_Model;
use Illuminate\Http\Request;

class Contrato extends Controller
{
    public function createContract(Request $request)
    {
        Contrato_Model::create([
            'data_inicio'=>$request->inicio,
        'data_fim'=>$request->fim
        ,'duracao'=>$request->duracao,
        'dono_id'=>$request->dono,
        'aluno_id'=>$request->aluno,
        'tipo_pagamento_id'=>$request->tipo_pagamento]);

        return response()->json(['mensagem'=>'O contrato foi criado com sucesso!',200]);
    }

    public function listAll()
    {
        $contratos = Contrato_Model::findAll();
        $data = ["contratos"=>$contratos];
        return response()->json($data,200);
    }

    public function deleteTraining($id)
    {
        $contrato = Contrato_Model::find($id);
        if($contrato)
        {
            $contrato->delete();
            return response()->json(['mensagem'=>'O contrato do aluno foi deletado com sucesso!'],200);
        }
        else
        {
            return response()->json(['mensagem'=>'Não foi possível deletar o contrato!'],200);
        }
    }

    public function updateContract($id,Request $request)
    {
        $contrato = Contrato_Model::find($id);
        $contrato->update($request->all());
        return response()->json(['mensagem'=>'O contrato do aluno foi atualizado com sucesso!'],200);
    }
}
