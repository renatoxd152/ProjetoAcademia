<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Treino_Aluno_Model extends Model
{
    protected $fillable = ['duracao_treino_inicio','duracao_treino_fim','series','aluno_id','treino_id'];
    protected $table = 'treino_aluno';

    public function aluno():BelongsTo
    {
        return $this->belongsTo(Aluno::class,'aluno_id');
    }

    public function treino():BelongsTo
    {
        return $this->belongsTo(Treino::class,'treino_id');
    }
}
