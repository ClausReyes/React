import "bulma/css/bulma.css"
import NavBar from "./components/NavBar/NavBar";
import "./App.css"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { Route, Routes } from "react-router";
import {BrowserRouter, Routes, Route} from "react-router";




function App(){  
    return(
      <div className="App">
        <BrowserRouter>
         <NavBar/> 
        <Routes>
        <Route path="/" element={<ItemListContainer greeting={`Bienvenidos`}/>}/>
        <Route path="/category/:categoryID" element={<ItemListContainer />}/>
        <Route path="/item/:itemID" element={<ItemDetailContainer/>}/>
        <Route path="*" element={<h1>404 not found</h1>}/>
        </Routes>
        </BrowserRouter>
          
    
          
        </div>
      

        
            
            
    );

   
};

export default App;


