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
        Schema::create('treino_aluno', function (Blueprint $table) {
            $table->id();
            $table->date('duracao_treino_inicio');
            $table->date('duracao_treino_fim');
            $table->string('series');
            $table->unsignedBigInteger('aluno_id');
            $table->unsignedBigInteger('treino_id');
            $table->foreign('treino_id')->references('id')->on('treino');
            $table->foreign('aluno_id')->references('id')->on('aluno');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('treino_aluno');
    }
};
