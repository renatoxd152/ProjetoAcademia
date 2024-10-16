<?php

namespace App\Http\Controllers;

use App\Models\Contrato_Model;
use App\Models\Parcelas_Pagas_Model;
use Illuminate\Http\Request;
use Carbon\Carbon;
class Contrato extends Controller
{
    public function createContract(Request $request)
    {
        try {
            $verifica = Contrato_Model::where('aluno_id',$request->aluno)->first();
            if($verifica)
            {
                return response()->json(['erro'=>'Esse aluno já possui contrato!'],400);
            }
            $contrato = Contrato_Model::create([
                'data_inicio' => $request->inicio,
                'date_fim' => $request->fim,
                'duracao' => $request->duracao,
                'dono_id' => $request->dono,
                'aluno_id' => $request->aluno,
                'tipo_pagamento_id' => $request->tipo_pagamento
            ]); 
            $datasParcelas = $this->gerarDatasParcelas($request->inicio, $request->parcelas); 
            $parcela = floatval($request->valor_contrato)/intval($request->parcelas);
            for($i=0;$i < intval($request->parcelas);$i++)
            {
                Parcelas_Pagas_Model::create([
                    'data_vencimento'=>$datasParcelas[$i],
                    'data_pago'=>null,
                    'valor'=>$parcela,
                    'contrato_id'=>$contrato->id
                ]);
            }
    
            return response()->json(['mensagem' => 'O contrato foi criado com sucesso!'], 200);
        } catch (\Exception $e) {
            return response()->json(['erro' => 'Erro ao criar contrato: ' . $e->getMessage()], 500);
        }
    }

    public function listAll()
    {
        $contratos = Contrato_Model::with(['aluno.usuario','tipo_pagamento'])->get();

        return response()->json($contratos,200);
    }

    public function gerarDatasParcelas($dataInicial,$numParcelas)
    {
        $datasVencimento = [];
        $dataInicial = Carbon::parse($dataInicial);

        for ($i = 1; $i <= $numParcelas; $i++) {
            $dataVencimento = $dataInicial->copy()->addMonths($i)->day(10);
            $datasVencimento[] = $dataVencimento->toDateString();
        }

        return $datasVencimento;
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
