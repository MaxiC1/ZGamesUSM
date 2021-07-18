const cargarMarcas = async()=>{
    //1. Ir a buscar las marcas a la api
    let resultado = await axios.get("api/marcas/get");
    let marcas = resultado.data;
    //2. Cargar las marcas dentro del select
    let marcaSelect = document.querySelector("#marca-select");
    marcas.forEach(m=>{
        let option = document.createElement("option");
        option.innerText = m;
        marcaSelect.appendChild(option);
    });

};

cargarMarcas();

document.querySelector("#registrar-btn").addEventListener("click", async ()=>{
    let nombre = document.querySelector("#nombre-txt").value;
    let marca = document.querySelector("#marca-select").value;
    let anio = document.querySelector("#anio-txt").value;
    let consola = {};
    consola.nombre = nombre;
    consola.marca = marca;
    consola.anio = anio;
    //TODO: Falta Validar!!!

    //Solo esta linea hace:
    //1. Va al Controlador, le pasa los datos
    //2. El controlador crea el modelo 
    //3. El modelo ingresa en la base de datos
    let res = await crearConsola(consolas);
    Swal.fire("Consola Creada", "Consola Creada Exitosamente", "info");
});




