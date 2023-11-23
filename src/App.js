import "bulma/css/bulma.css"
import { useState , useEffect } from "react";
import ProfileCard from "./ProfileCard";
import NavBar from "./components/NavBar/NavBar";
import "./App.css"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import CartWiget from "./components/CartWiget/CartWiget";
import ItemCount from "./components/ItemCount/ItemCount";




function App(){  
    return(
      <div className="App">
           <NavBar/> 
    
           <ItemListContainer greeting={`Bienvenidos`}/>
      <ItemCount initial={1} stock={10} onAdd={(quantity)=> console.log("cantidad Agregada", quantity)}/>
        
        </div>
      

        
            
            
    );

   
};

export default App;


