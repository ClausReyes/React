import Item from "../Item/item"
import "./itemList.css"

const ItemList = ({products}) => {
    return(
  <div className="ListGroup">
    {products.map(prod => <Item key ={prod.id}{...prod}/>)}
  </div>

    )
}

export default ItemList