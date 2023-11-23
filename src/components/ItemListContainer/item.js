let producto = [
    {nombre: "Arco", precio:  1000},
    {nombre: "Aro", precio:  1000},
    {nombre: "Mesas decorativas", precio:  1000},
    {nombre: "Letrero Neon", precio:  1000},
    {nombre: "Mesas decorativas", precio:  1000},
    {nombre: "Mesas para barra de postres", precio:  1000},
];

function agregarIva (obj_producto){
    let iva = obj_producto.precio *0.21;

    return{
        nombre: obj_producto.nombre,
        precio: obj_producto+iva
    }
}

let resultado = productos.map(agregarIva)
console.log(resultado)