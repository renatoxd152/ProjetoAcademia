<?php

namespace App\Models;

use App\Enums\TipoUsuario as EnumsTipoUsuario;
use Illuminate\Database\Eloquent\Model;


class Usuario extends Model
{
    protected $table = 'usuario';

    protected $fillable = ['nome', 'cpf', 'email','tipo','senha'];

    protected $casts = ['tipo'=>EnumsTipoUsuario::class];

    protected $hidden = ['senha'];
}
