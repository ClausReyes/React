import ProfileCard from "./components/ProfileCard";
import AlexaImg from "./img/alexa.png";
import SiriImg from "./img/siri.png";
import CortanaImg from "./img/cortana.png";
import "bulma/css/bulma.css"
import NavBar from "./components/NavBar/NavBar";


function App(){
    return(

        <div>
            <section className="hero is-warning">
                <div className="hero-body">
            <h1 className="title">Light&Color</h1>
            <h2 className="subtitle">Arreglos de globos para tus eventos</h2>
            </div>
            </section>

            <div className="container">
                <div className="columns">
                    <div className="column is-4">
                    <ProfileCard titulo= "Alexa" arroba= "@alexa22" img= {AlexaImg}/>
                    </div>
                    <div className="column is-4">
                    <ProfileCard titulo= "Portana" arroba= "@portana22" img={CortanaImg}/>
                    </div>
                    <div className="column is-4">
                    <ProfileCard titulo= "Siri" arroba= "@siri22" img={SiriImg}/>
                    </div>

                </div>
            

            </div>
        </div>
    )
}

export default App;


