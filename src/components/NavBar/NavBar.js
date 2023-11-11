
import CartWiget from "../CartWiget/CartWiget";
import {DiAtom} from "react-icons/di";
import {SlBasket} from "react-icons/sl";
import "../NavBar/NavBar.css";
const NavBar = ()=>{
return(
    <nav>
        <section className="hero is-success">
            <div className="hero-body"> <DiAtom />
        <h3 className="title">Light & Color</h3>

        <div className="subtitle ">
        <button className="button is-white is-medium is-outlined is-rounded gap">Arcos</button>
        <button className="button is-white is-medium is-outlined is-rounded gap">Torres</button>
        <button className="button is-white is-medium is-outlined is-rounded gap">Aros</button>
        <button className="button is-white is-medium is-outlined is-rounded gap">Renta de mobiliario</button>
        

        </div>
        </div>
        <div>
            <SlBasket/>
            0
        </div>

        </section>
      
    </nav>
    
)
}

export default NavBar;