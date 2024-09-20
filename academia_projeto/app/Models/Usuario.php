<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Usuario extends Model
{
    protected $fillable = ['nome', 'cpf', 'email', 'senha', 'tipo'];

    protected $hidden = ['senha'];
    
    protected $table = 'usuarios';
    use HasFactory;
}
