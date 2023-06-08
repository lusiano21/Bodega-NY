import ItemTrading from "./ItemTrading";
import { TiShoppingCart } from 'react-icons/ti'
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Trolleycontext } from "../contentComponents/Trolleycontext";
import { Button } from "@mui/material";
import { Detail } from "./Animations";


const CartsDetail =({item}) => { 
    const [itemCount, setItemCount] = useState(0);
    const { addToTrolley } = useContext(Trolleycontext)
    const addItem = (qty) => {
        alert("You have selected " + qty + " items.");
        setItemCount(qty);
        addToTrolley(item, qty)
    }
    return (
        <>
        {
        item && item.img
        ?
        <div className="card-detail row">
            <div className="col-sm-6 col-12 card-detail-img">
            <img src={item.img} alt="licores" />
            </div>
            <div className="col-sm-6 col-12 card-detail-cart d-flex flex-column align-items-center justify-content-around">
                <h1 className="card-title">{item.nombre}</h1>
                <p className="card-text">{item.description}</p>
                <h2 className="card-text">${item.precio}</h2>
                
                <p className="card-text">Unidades: {item.stock}</p>
                <div className='card-detail-traid'>
                    {
                    itemCount ===0
                    ?<ItemTrading stock={item.stock} initial={itemCount} addItem={addItem} />
                    : <Link to= '/trolley' ><Button variant="outlined" startIcon={< TiShoppingCart/>}><span> Ver Carrito </span></Button></Link>
                    }
                </div>
            </div> 
            <div className="card-detail-info">
            <h4>Informacio:</h4>
            <p className="card-text">{item.info}</p>
            </div>
        </div>
        :<Detail/>
    }
        </>
    );
}
export default CartsDetail