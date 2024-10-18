<?php

use App\Http\Controllers\Aluno;
use App\Http\Controllers\Contrato;
use App\Http\Controllers\Tipo_pagamento;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Treino;
use App\Http\Controllers\Treino_Aluno;
use App\Http\Controllers\Usuario;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('/treino',[Treino::class,'createWorkout']);
Route::post('/save/user',[Usuario::class,'criarUsuario']);
Route::get('/alunos',[Aluno::class,'listStudents']);
Route::get('/treinos',[Treino::class,'findAll']);
Route::post('/treino/aluno',[Treino_Aluno::class,'createTraining']);
Route::post('/criar/pagamento',[Tipo_pagamento::class,'createPayment']);
Route::get('/pagamentos',[Tipo_pagamento::class,'findAll']);
Route::post('/contratos',[Contrato::class,'createContract']);
Route::get('/contratos',[Contrato::class,'listAll']);
Route::get('/users/students',[Aluno::class,'listAllUsers']);
Route::post('/login',[Usuario::class,'login']);
Route::get('/students/{id}/trainings', [Treino_Aluno::class, 'getTrainingStudent']);