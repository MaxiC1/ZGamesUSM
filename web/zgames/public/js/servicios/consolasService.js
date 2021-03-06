//ESTE ARCHIVO VA A TENER LAS OPERACIONES TIPICAS PARA COMUNICARSE CON EL CONTROLADOR

//getConsolas
const getConsolas = async (filtro ="todos")=>{
    let resp;
    if(filtro == "todos"){
        resp = await axios.get("api/consolas/get");
    }else{
        resp = await axios.get(`api/consolas/filtrar?filtro=${filtro}`);
    }
    return resp.data;
};

const findById = async (id)=>{
    let resp = await axios.get(`api/consolas/findById?id=${id}`);
    return resp.data;
};

//crearConsola
const crearConsola = async(consola)=>{ //arrow functions
    //Estructura de peticion post al servidor con axios
    let resp = await axios.post("api/consolas/post", consola, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return resp.data;
};

const actualizarConsola = async(consola)=>{
    try{
        let resp = await axios.post("api/consolas/actualizar", consola, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return resp.data;
    }catch(e){
        return false;
    }
};

const eliminarConsola = async(id)=>{
    try{
        let resp = await axios.post("api/consolas/delete", {id}, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return resp.data == "ok";
    }catch(e){
        return false;
    }
};