<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Dono extends Model
{
    protected $fillable = ['user_id'];
    protected $table = 'dono';

    public function dono()
    {
        return $this->belongsTo(Dono::class, 'user_id');
    }
}
