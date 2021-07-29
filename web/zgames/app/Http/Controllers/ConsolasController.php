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

    public function filtrarConsolas(Request $request){
        $input = $request->all();
        $filtro = $input["filtro"];
        $consolas = Consola::where("marca", $filtro)->get();
        return $consolas;
    }

    /**
     * Esta funcion va a registrar una consola de ejemplo en la base de datos
     * Una request es un objeto php que permite acceder a las cosas que me mandaron desde la interfaz (desde el formulario)
     * CUANDO EL METODO RECIBE COSAS EL REQUEST VA EN LOS PARENTESIS
     */
    public function crearConsola(Request $request){
        //Equivalente a un insert into.................. 
        $input = $request->all(); //Genera un arreglo con todo lo que mando la interfaz 
        //Cuando hablo de interfaz hablo de javscript
        $consola = new Consola;
        $consola->nombre = $input["nombre"];
        $consola->marca = $input["marca"];
        $consola->anio = $input["anio"];

        $consola->save();
        return $consola;
    }

    public function eliminarConsola(Request $request){
       $input = $request->all(); 
       $id = $input["id"];
       // Eloquent: El administrador de BD de Laravel se llama Eloquent
       //1. Ir a buscar el registro a la bd 
       $consola = Consola::FindOrFail($id);
       //2. Para eliminar llamo al metodo delete
       $consola->delete(); //DELETE FROM consolas WHERE id=1
       return "ok";
    }

}
//view productos.blade.php 
//renderizar los productos

//ProductosController
  // - Ir a buscar los productos a la bd
  // - Los filtra por los disponibles
  // - Formatea el precio
  // Retorna lista de productos procesados