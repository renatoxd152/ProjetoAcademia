<?php

namespace App\Http\Controllers;

use App\Models\Tipo_Pagamento_Model;
use Illuminate\Http\Request;

class Tipo_pagamento extends Controller
{
    public function createPayment(Request $request)
    {
        Tipo_Pagamento_Model::create(['nome'=>$request->tipo_pagamento]);
        return response()->json(['mensagem'=>'O tipo de pagamento foi criado com sucesso!'],200);
    }

    public function deletePaymente($id)
    {
        $tipo_pagamento = Tipo_Pagamento_Model::find($id);
        if($tipo_pagamento)
        {
            return response()->json(['mensagem'=>'O tipo de pagamento foi deletado com sucesso!'],200);
        }
        else
        {
            return response()->json(['mensagem'=>'Não foi possível deletar esse tipo de pagamento!'],200);
        }
    }

    public function updatePayment($id,Request $request)
    {
        $tipo_pagamento = Tipo_Pagamento_Model::find($id);
        $tipo_pagamento->update($request->all());
        return response()->json(['mensagem'=>'O tipo de pagamento foi atualizado com sucesso!'],200);
    }

    public function findAll()
    {
        $tipos = Tipo_Pagamento_Model::findAll();
        $data = ['tipos_pagamentos'=>$tipos];
        return response()->json($data,200);
    }
}
