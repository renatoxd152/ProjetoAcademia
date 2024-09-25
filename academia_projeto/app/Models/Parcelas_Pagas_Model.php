<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Parcelas_Pagas_Model extends Model
{
    protected $fillable = ['data_vencimento','data_pago','valor','contrato_id'];
    protected $table = 'parcelas_pagas';

    public function contrato()
    {
        $this->belongsTo(Contrato_Model::class,'contrato_id');
    }
}
