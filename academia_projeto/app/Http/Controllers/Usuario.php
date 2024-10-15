<?php

namespace App\Http\Controllers;
use Tymon\JWTAuth\Facades\JWTAuth;
use App\Enums\TipoUsuario as EnumsTipoUsuario;
use App\Models\Aluno;
use App\Models\Dono;
use App\Models\Usuario as ModelsUsuario;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
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

    public function login(Request $request)
    {
        try {

        $usuario = ModelsUsuario::where('email', $request->email)->where('tipo','dono')->first();

        if (!$usuario) {
            return response()->json(['erro' => 'Email ou senha incorretos!'], 404);
        }

        if (!Hash::check($request->senha, $usuario->senha)) {
            return response()->json(['erro' => 'Email ou senha incorretos!'], 401);
        }
        $token = JWTAuth::claims(['sub' => $usuario->id])->fromUser($usuario);


        return response()->json([
            'mensagem' => 'Login bem-sucedido!',
            'token' => $token,
        ], 200);
        } catch (\Exception $e) {
            return response()->json(['erro' => 'Ocorreu um erro durante o login'], 500);
        }
    }
}
