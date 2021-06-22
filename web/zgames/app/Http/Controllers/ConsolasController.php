<?php

namespace App\Http\Controllers;
use App\Models\Consola;
use Illuminate\Http\Request;

//Aqui va ir toda la logica vinculada a las consolas
class ConsolasController extends Controller
{
    public function getMarcas(){
        //$marcas = ["Sony", "Microsoft", "Nintendo", "Sega"];  (Posible forma para definir valores a una variable, en forma de arreglo)
        $marcas = array();
        $marcas[] = "Sony";
        $marcas[] = "Microsoft";
        $marcas[] = "Nintendo";
        $marcas[] = "Sega";

        return $marcas;
    }
    /**
     * Esta funcion va a ir a buscar todas las consolas que existen en la base de datos y las va a retornar
     */
    public function getConsolas(){
        //Equivalente a un select * from consolas
        $consolas = Consola::all();
        return $consolas;  
    }
    /**
     * Esta funcion va a registrar una consola de ejemplo en la base de datos
     * TODO: Mejorar esto para que no sea un ejemplo 
     */
    public function crearConsola(){
        //Equivalente a un insert into.................. 
        $consola = new Consola;
        $consola->nombre = "Nintendo Switch";
        $consola->marca = "Nintendo";
        $consola->anio = 2015;

        $consola->save();
        return $consola;
    }
}
//view productos.blade.php 
//renderizar los productos

//ProductosController
  // - Ir a buscar los productos a la bd
  // - Los filtra por los disponibles
  // - Formatea el precio
  // Retorna lista de productos procesados