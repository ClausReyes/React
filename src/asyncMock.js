
import arcoRosaImg from "./img/arco-rosa.jpg"
import aroImg from "./img/aro.jpg"
import tablonImg from "./img/tablon.jpg"
import infladorImg from "./img/inflador.jpg"
import arcoImg from "./img/arco.jpg"
import torresImg from "./img/torres.jpg"
import happyImg from "./img/happy.jpg"
import candyImg from "./img/candy.jpg"
import arcoServiImg from  "./img/arco-rosa2.jpg"
import aroServImg from "./img/aro51.jpg"



const products =[
    {
        id: "1",
        name: "Mesas de decoración",
        category: "renta de mobiliario",
        description: "mesa",
        price:  150,
        img:
            arcoRosaImg,
        stock: 10,                        
        },
    {
        id: "2",
        name: "Aro", 
        category: "renta de mobiliario",
        description: "base de aro para globos",
        price:  150,
        img: aroImg,
        stock: 10,
    },
        {
        id: "3",
        name: "Tablon",
        price:  80,
        category: "renta de mobiliario",
        description: "tablon para candy bar",
        img: tablonImg,
        stock: 10
    },
    {
        id: "4",
        name: "Base Arco", 
        price:  150,
        category: "renta de mobiliario",
        description: "base de arco para globos",
        img: arcoImg,
        stock: 10,
    },
    {
        id: "5", 
        name: "Maquina para inflar globos", 
        price:  100,
        img: 
        infladorImg,
        stock: 10,   
        category: "renta de mobiliario",
        description: "base de aro para globos", 
    },
    {
        id: "6", 
        name: "Base torres globos", 
        category: "torres",
        description: "servicio de torres de globos",
        price: 100,
        img: 
        torresImg,
        stock: 10,    
    },

    
    {
        id: "7", 
        name: "Letrero Led Happy Birthday", 
        price: 100,
        category: "renta de mobiliario",
        description: "letreo",
        img: 
       happyImg,
    
        stock: 10,    
    },
    {
        id: "8", 
        name: "Candy Bar", 
        price: 70,
        img: 
        candyImg,
        stock: 10,  
        category: "renta de mobiliario",
        description: "mesas para candy Bar",
        
    },
    {
        id: "9", 
        name: "Arco", 
        price: 250,
        img: 
        arcoServiImg,
        stock: 10,  
        category: "arco",
        description: "Servicio de arco de globos",
        
    },
    
    {
        id: "10", 
        name: "Aro", 
        price: 300,
        img: 
        aroServImg,
        stock: 10,  
        category: "aro",
        description: "Servicio de aro de globos",
        
    },
]

export const getProducts =() => { 
    return new Promise((resolve)=> {
        setTimeout (()=> {
            resolve(products)
        }, 500)
    })
}

export const getProductByID = (productId) =>{
    return new Promise((resolve) => {
       setTimeout(()=>{
        resolve(products.find(prod => prod.id === productId))
       }, 500) 
    })
}
export const getProductsByCategory = (productcategory) =>{
    return new Promise((resolve) => {
       setTimeout(()=>{
        resolve(products.filter(prod => prod.category === productcategory))
       }, 500) 
    })
}


