const products =[
    {
        id:1,
        name: "Mesas de decoración",
        price:  150,
        img:
            "./img/arco-rosa.jpg",
        stock: 10,                        
        },
    {
        id: 2,
        name: "Aro", 
        price:  150,
        img:"./img/aro.jpg", 
        stock: 10,
    },
        {
        id: 3,
        name: "Tablon",
        price:  80,
        img: "./img/tablon.jpg",
        stock: 10
    },
    {
        id: 4,
        name: "Base Arco", 
        price:  150,
        img: "./img/arco.jpg",
        stock: 10,
    },
    {
        id: 5, 
        name: "Maquina para inflar globos", 
        price:  100,
        img: 
        "./img/inflador.jpg",
        stock: 10,    
    },
    {
        id: 5, 
        name: "Base torres globos", 
        price: 100,
        img: 
        "./img/torres.jpg",
        stock: 10,    
    },

    {
        id: 6, 
        name: "Letrero Led Happy Birthday", 
        price: 100,
        img: 
        "./img/happy.jpg",
        stock: 10,    
    },
    {
        id: 7, 
        name: "Candy Bar", 
        price: 70,
        img: 
        "./img/candy.jpg",
        stock: 10,  
        
    },
   
    

]

export const getProducts =() =>{
    return new Promise((resolve)=> {
        setTimeout (()=> {
            resolve(products)
        }, 500)
    })
}
