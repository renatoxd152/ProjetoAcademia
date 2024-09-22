<?php

namespace App\Http\Controllers;

use App\Enums\TipoUsuario as EnumsTipoUsuario;
use App\Models\Aluno;
use App\Models\Dono;
use App\Models\Usuario as ModelsUsuario;
use Illuminate\Http\Request;
use TipoUsuario;

class Usuario extends Controller
{
    public static function criarUsuario(Request $request)
    {
        if(ModelsUsuario::where('cpf',$request->cpf)->first())
        {
            return response()->json(['mensagem'=>'Esse cpf já está cadastrado!'],409);
        }
        if(ModelsUsuario::where('email',$request->email)->first())
        {
            return response()->json(['mensagem'=>'Esse email já está cadastrado!'],409);
        }
        
        $usuario = ModelsUsuario::create([
            'nome' => $request->nome,
            'cpf' => $request->cpf,
            'email' => $request->email,
            'tipo' => $request->tipo,
            'senha' => bcrypt($request->senha)
        ]);
    
        if ($request->tipo === EnumsTipoUsuario::Aluno->value) {
            Aluno::create([
                'user_id' => $usuario->id,
                'data_nasc' => $request->data_nasc,
                'cep' => $request->cep,
                'telefone' => $request->telefone,
            ]);
        }
        else
        {
             Dono::create([
                'user_id' => $usuario->id,
            ]);
        }

        return response()->json(['mensagem'=>'O usuário foi criado com sucesso!'],200);
    }
}
