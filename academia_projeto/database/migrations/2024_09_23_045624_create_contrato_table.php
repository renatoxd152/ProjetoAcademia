<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('contrato', function (Blueprint $table) {
            $table->id();
            $table->date('data_inicio');
            $table->date('date_fim');
            $table->float('duracao');
            $table->unsignedBigInteger('dono_id');
            $table->unsignedBigInteger('aluno_id');
            $table->unsignedBigInteger('tipo_pagamento_id');
            $table->foreign('tipo_pagamento_id')->references('id')->on('tipo_pagamento');
            $table->foreign('dono_id')->references('id')->on('dono');
            $table->foreign('aluno_id')->references('id')->on('aluno');
            $table->timestamps(); 
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('contrato');
    }
};
