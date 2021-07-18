<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CrearTablaConsolas extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //Modelo orientado a Objeto:
        //Base de datos relacional + programacion orientada a objetos
        //MySQL + Eloquent (ORM del modelo de laravel) **ORM**= Object Relational Maping
        //**En español** = Crear clases para que se cree sola la tabla 
        Schema::create('consolas', function (Blueprint $table) {
            $table->id(); //Secuencias, Autoincrementales
            //Autoincrementales: Claves unicas generadas automaticamente por la maquina
            $table->string("nombre", 150);
            $table->string("marca", 50);
            $table->integer("anio");
            $table->timestamps();// dos campos que son el create_at y el updated_at (los genera laravel)
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('consolas');
    }
}
