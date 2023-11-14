
import CartWiget from "../CartWiget/CartWiget";

import {DiAtom} from "react-icons/di";
import {SlBasket} from "react-icons/sl";
import "../NavBar/NavBar.css";

const NavBar = ()=>{
return(
    <nav>
        <section className="hero is-success carrito">
            <div className="hero-body logo"> <DiAtom />
        <h2 className="title ">Light & Color</h2>
        <h3 className="title">Servicio de decoracion con globos y renta de equipo para eventos</h3>

        <div className="subtitle ">
        <button className="button is-white is-medium is-outlined is-rounded gap">Arcos</button>
        <button className="button is-white is-medium is-outlined is-rounded gap">Torres</button>
        <button className="button is-white is-medium is-outlined is-rounded gap">Aros</button>
        <button className="button is-white is-medium is-outlined is-rounded gap">Renta de mobiliario</button>
        

        </div>
        <div className="carrito">
        <CartWiget/>0
        </div>
        </div>
     

        </section>
     
    </nav>
    
)
}

export default NavBar;