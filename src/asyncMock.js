
import arcoRosaImg from "./img/arco-rosa.jpg"
import aroImg from "./img/aro.jpg"
import tablonImg from "./img/tablon.jpg"
import infladorImg from "./img/inflador.jpg"
import arcoImg from "./img/arco.jpg"
import torresImg from "./img/torres.jpg"
import happyImg from "./img/happy.jpg"
import candyImg from "./img/candy.jpg"

const products =[
    {
        id: 1,
        name: "Mesas de decoración",
        category: "mobiliario",
        description: "mesa",
        price:  150,
        img:
            arcoRosaImg,
        stock: 10,                        
        },
    {
        id: 2,
        name: "Aro", 
        price:  150,
        img: aroImg,
        stock: 10,
    },
        {
        id: 3,
        name: "Tablon",
        price:  80,
        img: tablonImg,
        stock: 10
    },
    {
        id: 4,
        name: "Base Arco", 
        price:  150,
        img: arcoImg,
        stock: 10,
    },
    {
        id: 5, 
        name: "Maquina para inflar globos", 
        price:  100,
        img: 
        infladorImg,
        stock: 10,    
    },
    {
        id: 6, 
        name: "Base torres globos", 
        price: 100,
        img: 
        torresImg,
        stock: 10,    
    },

    {
        id: 7, 
        name: "Letrero Led Happy Birthday", 
        price: 100,
        img: 
       happyImg,
    
        stock: 10,    
    },
    {
        id: 8, 
        name: "Candy Bar", 
        price: 70,
        img: 
        candyImg,
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

export const getProductByID = (productId) =>{
    return new Promise((resolve)=>{
       setTimeout(()=>{
        resolve(products.find(prod => prod.id === productId))
       }, 500) 
    })
}

