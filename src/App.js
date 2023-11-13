

import "bulma/css/bulma.css"

import NavBar from "./components/NavBar/NavBar";
import "./App.css"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import CartWiget from "./components/CartWiget/CartWiget";




function App(){
    return(
      <div className="App">
           <NavBar/> 
    
           <ItemListContainer greeting={`Bienvenidos`}/>
      
        </div>
    );

   
};

export default App;


