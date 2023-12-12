import "./item.css"
import {Link} from "react-router-dom"

const Item =({id, name, img,price, stock}) => {
    return(
        <article className="CardItem">
            <div className="card"/>
<header className="Header">
    <h2 className="ItemHeader">
{name}
    </h2>
</header>
<picture>
    <img src={img} alt={name} className="ItemImg"/>
</picture>

<section>
    <p className="Info">
        Precio: ${price}
    </p>74
    <p className="Info">
        Stoc0k disponible: {stock}
 </p>
</section>
<footer className="ItemFooter">
<Link to ={`/item${id}`} className="option"> ver detalle</Link>
</footer>
<div/>
  </article>
    )
};

export default Item