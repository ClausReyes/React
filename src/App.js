import "bulma/css/bulma.css"
import NavBar from "./components/NavBar/NavBar";
import "./App.css"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { CartProvider } from "./components/context/CartContext";






function App(){  
    return(
      <div className="App">
        <BrowserRouter>
        <CartProvider>
         <NavBar/> 
        <Routes>
        <Route path="/" element={<ItemListContainer greeting={`Bienvenidos`}/>}/>
        <Route path="/category/:categoryID" element={<ItemListContainer />}/>
        <Route path="/item/:itemID" element={<ItemDetailContainer/>}/>
        <Route path="*" element={<h1>404 not found</h1>}/>
        </Routes>
        </CartProvider>
        </BrowserRouter>
        
          </div>
      );
};

export default App;


