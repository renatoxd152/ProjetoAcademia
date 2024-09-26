<?php

namespace App\Http\Controllers;

use App\Models\Parcelas_Pagas_Model;
use Illuminate\Http\Request;

class Parcelas_pagas extends Controller
{
    public function createInstallmentsPaid(Request $request)
    {
        Parcelas_Pagas_Model::create(['data_vencimento'=>$request->data_vencimento,
        'data_pago'=>$request->data_pago,
        'valor'=>$request->valor,
        'contrato_id'=>$request->contrato_id]);

        return response()->json(['mensagem'=>'A parcela foi registrada com sucesso!'],200);
    }

    public function deleteInstallmentsPaid($id)
    {
        $parcelas = Parcelas_Pagas_Model::find($id);
        if($parcelas)
        {
            return response()->json(['mensagem'=>'A parcela foi deletada com sucesso!'],200);
        }
        else
        {
            return response()->json(['mensagem'=>'A parcela não foi encontrada!'],200);
        }
    }

    public function updateInstallmentsPaid($id,Request $request)
    {
        $parcela = Parcelas_Pagas_Model::find($id);
        $parcela->update($request->all());
        return response()->json(['mensagem'=>'A parcela foi atualizada com sucesso!'],200);
    }

    public function findAll()
    {
        $parcelas = Parcelas_Pagas_Model::findAll();
        $data = ['parcelas'=>$parcelas];
        return response()->json($data,200);
    }
}
