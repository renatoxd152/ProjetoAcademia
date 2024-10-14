<?php

namespace App\Models;

use App\Enums\TipoUsuario as EnumsTipoUsuario;
use Illuminate\Foundation\Auth\User as Authenticatable; 
use Tymon\JWTAuth\Contracts\JWTSubject;

class Usuario extends Authenticatable implements JWTSubject
{
    protected $table = 'usuario';

    protected $fillable = ['nome', 'cpf', 'email', 'tipo', 'senha'];

    protected $casts = ['tipo' => EnumsTipoUsuario::class];

    protected $hidden = ['senha'];


    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    public function getJWTCustomClaims()
    {
        return [];
    }
}
