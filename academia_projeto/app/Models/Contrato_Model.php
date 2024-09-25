<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contrato_Model extends Model
{
    protected $fillable = ['data_inicio','data_fim','duracao','dono_id','aluno_id','tipo_pagamento_id'];
    protected $table = 'contrato';

    public function dono()
    {
        return $this->belongsTo(Dono::class,'dono_id');
    }

    public function aluno()
    {
        return $this->belongsTo(Aluno::class,'aluno_id');
    }

    public function tipo_pagamento()
    {
        return $this->belongsTo(Tipo_Pagamento_Model::class,'tipo_pagamento_id');
    }
}
