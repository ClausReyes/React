const products =[
    {
        id: 1,
        nombre: "Mesas de decoración",
        precio:  "$150",
        img:
            "./img/arco-rosa.jpg",
        cantidad: 1,                        
        },
    {
        id: 2,
        nombre: "Aro", 
        precio:  "$150",
        img:"./img/aro.jpg", 
        cantidad: 1,
    },
        {
        id: 3,
        nombre: "Tablon",
        precio:  "$80",
        img: "./img/tablon.jpg"
    },
    {
        id: 4,
        nombre: "Base Arco", 
        precio:  "$150",
        img: "./img/arco.jpg",
        cantidad: 1,
    },
    {
        id: 5, 
        nombre: "Maquina para inflar globos", 
        precio:  "100",
        img: 
        "./img/inflador.jpg",
        cantidad: 1,    
    },
    {
        id: 5, 
        nombre: "Base torres globos", 
        precio:  "100",
        img: 
        "./img/torres.jpg",
        cantidad: 1,    
    },

    {
        id: 6, 
        nombre: "Letrero Led Happy Birthday", 
        precio:  "100",
        img: 
        "./img/happy.jpg",
        cantidad: 1,    
    },
    {
        id: 7, 
        nombre: "Candy Bar", 
        precio:  "$70",
        img: 
        "./img/candy.jpg",
        cantidad: 1,  
        
    },
    {
        id: 8, 
        nombre: "Arreglo aro", 
        precio:  "pendiente",
        img: 
        "./img/aro51.jpg",
        cantidad: 1,    
    },
    {
        id: 9, 
        nombre: "Arreglo arco", 
        precio:  "pendiente",
        img: 
        "./img/arco51.jpg",
        cantidad: 1,    
    },
 

    {
        id: 6, 
        nombre: "Arreglo torre", 
        precio:  "pendiente",
        img: 
        "./img/torre.jpg",
        cantidad: 1,    
    },
    

]

export const getProducts =() =>{
    return new Promise((resolve)=> {
        setTimeout (()=> {
            resolve(products)
        }, 500)
    })
}

