<?php

namespace App\Models;

use App\Http\Controllers\Usuario;
use App\Models\Usuario as ModelsUsuario;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Dono extends Model
{
    protected $fillable = ['user_id'];
    protected $table = 'dono';

    public function dono():BelongsTo
    {
        return $this->belongsTo(ModelsUsuario::class, 'user_id');
    }

    public function contratos():HasMany
    {
        return $this->hasMany(Contrato_Model::class);
    }
}
