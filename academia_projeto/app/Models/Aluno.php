<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Aluno extends Model
{
    protected $fillable = ['user_id','data_nasc','cep','telefone'];
    protected $table = 'aluno';

    public function usuario():BelongsTo
    {
        return $this->belongsTo(Usuario::class,'user_id');
    }
}
