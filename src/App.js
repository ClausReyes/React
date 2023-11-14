import "bulma/css/bulma.css"
import ProfileCard from "./ProfileCard";
import NavBar from "./components/NavBar/NavBar";
import "./App.css"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import CartWiget from "./components/CartWiget/CartWiget";
import AlexaImg from "./img/alexa.png";
import SiriImg from "./img/siri.png";
import CortanaImg from "./img/cortana.png";




function App(){
    return(
      <div className="App">
           <NavBar/> 
    
           <ItemListContainer greeting={`Bienvenidos`}/>
      
           <div className="container">
           
           <div className="columns">
                    <div className="column is-4">
                        <ProfileCard titulo="Alexa" arroba="@Alexa22" img={AlexaImg}/>
                    </div>

                    <div className="column is-4">
                        <ProfileCard titulo="Cortana" arroba="@Cortana66" img={CortanaImg}/> 
                    </div>
                    <div className="column is-4">
                        <ProfileCard titulo="Siri" arroba="@Siri77" img={SiriImg}/> 
                    </div>
                    
         
                    

            </div>

           </div>

        </div>
      

        
            
            
    );

   
};

export default App;


