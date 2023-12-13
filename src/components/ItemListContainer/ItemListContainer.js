
import { useState, useEffect } from "react";
import{getProducts, getProductsByCategory} from "../../asyncMock"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom";



const ItemListContainer = ({greeting})=>{
const[products, setProducts]= useState([])
   const { categoryID} = useParams()
   console.log(categoryID )

   useEffect(() => {
    const asyncFunc = categoryID ? getProductsByCategory: getProducts
    asyncFunc(categoryID)
    .then(response => {
        setProducts(response)
    })
    .catch (error => {
        console.error(error)
    })
   },[categoryID])
   return (
    <div>
<h1 className="saludo">{greeting}</h1>
<ItemList products={products}/>

    </div>
    )
}
export default ItemListContainer;