<?php

namespace App\Http\Controllers;

use App\Models\Contrato_Model;
use Illuminate\Http\Request;

class Contrato extends Controller
{
    public function createContract(Request $request)
    {
        Contrato_Model::create(['data_inicio'=>$request->inicio,'data_fim'=>$request->fim]);
    }
}
