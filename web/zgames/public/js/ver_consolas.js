const cargarTabla = (consolas)=>{
    //1. Obtener una referencia al cuerpo de la tabla
    let tbody = document.querySelector("#tbody-consola");
    //2. Recorrer todas las consolas
    for(let i=0; i < consolas.length; ++i){
        //3. Por cada consola generar una fila 
        let tr = document.createElement("tr");
        //4. Generar por cada atributo de la consola, un td
        let tdNombre = document.createElement("td");
        tdNombre.innerText = consolas[i].nombre;
        let tdMarca = document.createElement("td");
        tdMarca.innerText = consolas[i].marca;
        let tdAnio = document.createElement("td");
        tdAnio.innerText = consolas[i].anio;
        let tdAcciones = document.createElement("td");
        let botonEliminar = document.createElement("button");
        botonEliminar.innerText = "Eliminar";
        botonEliminar.classList.add("btn", "btn-danger");
        botonEliminar.idConsola = consolas[i].id;
        tdAcciones.appendChild(botonEliminar);
        //5. Agregar los td al tr
        tr.appendChild(tdNombre);
        tr.appendChild(tdMarca);
        tr.appendChild(tdAnio);
        tr.appendChild(tdAcciones);
        //6. Agregar el tr al cuerpo de la tabla 
        tbody.appendChild(tr);
    };
};

document.addEventListener("DOMContentLoaded", async ()=>{
    // Aqui voy a cargar la lista de consolas, porque si entra aqui 
    // Lo que haga en esta parte estoy seguro que se esta ejecutando
    // Cuando la pagina esta totalmente cargada 
    let consolas = await getConsolas();
    cargarTabla(consolas);
});