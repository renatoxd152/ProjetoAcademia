<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tipo_Pagamento_Model extends Model
{
    protected $fillable = ['nome'];
    protected $table = 'tipo_pagamento';
}
