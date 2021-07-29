const cargarMarcas = async()=>{
    //1. Ir a buscar las marcas a la api
    let marcas = await getMarcas();
    //2. Cargar las marcas dentro del select
    let marcaSelect = document.querySelector("#marca-select");
    marcas.forEach(m=>{
        let option = document.createElement("option");
        option.innerText = m;
        marcaSelect.appendChild(option);
    });

};
// Esto ejecuta un codigo asegurandose que el total de la pagina
// Incluidos todos sus recursos este cargado antes de ejecutar 
document.addEventListener("DOMContentLoaded", ()=>{
    cargarMarcas();
});

document.querySelector("#registrar-btn").addEventListener("click", async ()=>{
    let nombre = document.querySelector("#nombre-txt").value.trim();
    let marca = document.querySelector("#marca-select").value.trim();
    let anio = document.querySelector("#anio-txt").value.trim();
    
    let errores = [];
    if(nombre === ""){
        errores.push("Debe ingresar un nombre");
    }else{
        //Validar si la consola existe en el sistema 
        let consolas = await getConsolas(); //TODO: Hay que mejorarlo
        let consolaEncontrada = consolas.find(c=>c.nombre.toLowerCase() === nombre.toLowerCase());
        if(consolaEncontrada != undefined){
            errores.push("La consola ya existe");
        }
    }

    if(isNaN(anio)){
        errores.push("El año debe ser numerico");
    }else if( +anio < 1958){
        errores.push("El año es incorrecto");
    }

    //Si no hubieron errores
    if(errores.length == 0){
        let consola = {};
        consola.nombre = nombre;
        consola.marca = marca;
        consola.anio = anio;
        //TODO: Falta Validar!!!

        //Solo esta linea hace:
        //1. Va al Controlador, le pasa los datos
        //2. El controlador crea el modelo 
        //3. El modelo ingresa en la base de datos
        let res = await crearConsola(consola);
        await Swal.fire("Consola Creada", "Consola Creada Exitosamente", "info");
        // La linea que viene despues del Swal.fire se va a ejecutar solo cuando la persona aprete el OK
        // Aqui voy a redirigir a otra pagina 
        window.location.href = "ver_consolas";

        // Abrir nueva pestaña
        // window.open("www.google.cl", "_blank");

    }else{
        //Mostrar errores
        Swal.fire({
            title: "Errores de validacion",
            icon: "warning",
            html: errores.join("<br />")
        });
    }
});




