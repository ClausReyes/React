
import { useState, useEffect } from "react"
import { getProductByID } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import ItemCount from "../ItemCount/ItemCount"



const ItemDetailContainer = () =>{
    const[ product, setProduct] = useState(null)

    useEffect(()=>{
            getProductByID(`1`)
            .then(response => {
                setProduct(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [])

    return (
        <div className="ItemDetailContainer">
          <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer
 