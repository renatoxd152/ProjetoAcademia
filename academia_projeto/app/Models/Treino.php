<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Treino extends Model
{
    protected $fillable = ['nome','descricao','series'];
    protected $table = 'treino';
}
