import { useState } from "react"
import { BsStar } from 'react-icons/bs'
import { Link } from "react-router-dom"
import { Button } from "@mui/material"
import { TiShoppingCart } from 'react-icons/ti'

const Cart = ({id,img, nombre, rate, precio}) => {
    const [start, setStars] = useState(rate);
    const sumarate = () => {
        setStars (start + 1) 
    }

    return (
        <div className="card">
            <div className="card-body">
            <img src={img[0]} className="card-img" alt="licores" />
            <div className="d-flex flex-column align-items-center">
                <h5 className="card-title">{nombre}</h5>
                <div className='card-content'>
                <span><button onClick={sumarate} type="button" className="btn btn-outline-warning"><h5><BsStar/> </h5></button> {start}</span>
                <span className="card-text">${precio}</span>
                </div>
                <div className='card-content'>
                <Link to={`/producto/${id}`}><Button variant="contained" startIcon={<TiShoppingCart />}><span> Agregar </span></Button></Link>
                </div>
            </div>    
            </div>
        </div>
    );
}
export default Cart;