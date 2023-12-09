
import { useState, useEffect } from "react"
import { getProductByID } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import ItemCount from "../ItemCount/ItemCount"
import { useParams } from "react-router"



const ItemDetailContainer = () =>{
    const[ product, setProduct] = useState(null)
    const {itemId} = useParams()
    useEffect(()=>{
            getProductByID(itemId)
            .then(response => {
                setProduct(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [itemId])

    return (
        <div className="ItemDetailContainer">
          <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer
 