
import CartWiget from "../CartWiget/CartWiget";

import "../NavBar/NavBar.css";
import { NavLink, Link} from "react-router-dom";
const NavBar = ()=>{
return (
   
    <nav className="NavBar"> 
        <Link to = "/">
            <h3>Ecommerce</h3>
            </Link>
            <div className = "button is-success boton">
                <NavLink to ={"/category/renta de mobiliario"} className= {({isActive}) => isActive ? "ActiveOption" : "Option"}>
                Renta de mobiliario</NavLink>
                <NavLink to ={"/category/aro"} className= {({isActive}) => isActive ? "ActiveOption" : "Option"}>
                Aro</NavLink>
                <NavLink to ={"/category/arco"} className= {({isActive}) => isActive ? "ActiveOption" : "Option"}>
                Arco</NavLink>
                </div>
                <div className="cart"> <CartWiget/></div>
        </nav>
        

)
}

export default NavBar;