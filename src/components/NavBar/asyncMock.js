const products =[
    {
        id:1,
        name: "Mesas de decoración",
        price:  150,
        img:
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.etsy.com%2Fmx%2Flisting%2F843169496%2Fsoporte-de-pedestal-dorado-con-mesa-para&psig=AOvVaw39FXuMkyJKtFDdMbwaohym&ust=1701802250138000&source=images&cd=vfe&opi=89978449&ved=0CA8QjRxqFwoTCPjL6cu59oIDFQAAAAAdAAAAABAI",
        stock: 10,                        
        },
    {
        id: 2,
        name: "Aro", 
        price:  150,
        img:"../img/aro.jpg", 
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
        id: 6, 
        name: "Base torres globos", 
        price: 100,
        img: 
        "./img/torres.jpg",
        stock: 10,    
    },

    {
        id: 7, 
        name: "Letrero Led Happy Birthday", 
        price: 100,
        img: 
        "./img/happy.jpg",
        stock: 10,    
    },
    {
        id: 8, 
        name: "Candy Bar", 
        price: 70,
        img: 
        "../img/candy.JPG",
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

