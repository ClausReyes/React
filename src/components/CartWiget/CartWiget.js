import "bulma/css/bulma.css"
import cart from "./assets/carrito-de-compras.png";
import "./CartWiget.css"





const CartWiget = ()=>{
    return (
        <div>
            <img  className="carrito" src={cart} alt="cart" style={{width: "45px"}}  />
            0
            </div>
       

 
  
        
    
    );
}

export default CartWiget;