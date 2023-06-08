import { useState,useEffect } from "react"
import { IoAdd } from "react-icons/io5"
import{ RiSubtractFill } from "react-icons/ri"
const ItemTrading = ({stock = 0, initial = 1, addItem }) => {
const [itemsCart, setitemsCart] = useState(0);
useEffect (() => {
    setitemsCart(initial);
}, []);

const add = () => {
    if(itemsCart < stock){
       setitemsCart (itemsCart + 1) 
    }
}
const subtract = () => {
    if(itemsCart > initial + 1){
       setitemsCart (itemsCart - 1) 
    }
}
return (
    <div className="d-flex justify-content-around align-items-center flex-wrap">
        <div>
        <button onClick={add} type="button" className="btn btn-outline-warning"><h5><IoAdd/> </h5></button>
        <span>{itemsCart}</span>
        <button onClick={subtract} type="button" className="btn btn-outline-warning"><h5><RiSubtractFill/> </h5></button>
        </div>
        { stock && itemsCart 
                 ?<button className="btn btn-primary" onClick={() => addItem(itemsCart)}>Agregar al carrito</button> 
                 :<button className="btn btn-primary" disabled>Agregar al carrito</button>
       }
    </div>
);
}
export default ItemTrading;