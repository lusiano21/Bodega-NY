import ItemTrading from "./ItemTrading";
import { TiShoppingCart } from 'react-icons/ti'
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Trolleycontext } from "../contentComponents/Trolleycontext";
import { Button } from "@mui/material";
import { Detail } from "./Animations";
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

const CartsDetail = ({ item }) => {
    const [itemCount, setItemCount] = useState(0);
    const { addToTrolley } = useContext(Trolleycontext)
    const addItem = (qty) => {
        Toastify({
            text: `Agregaste ${item.nombre} al carrito`,
            className: "info",
            style: {
              background: "#c39475",
            }
          }).showToast();
        setItemCount(qty);
        addToTrolley(item, qty)
    }
    return (
        <>
            {
                item && item.img
                    ?
                    <div className="card-detail row">
                        <div className="col-sm-6 col-12 card-detail-img carousel slide" id="carouselExampleControls" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item card-detail-box active" data-bs-interval="4000">
                                        <li>
                                        <img className="card-detail-img" src={item.img[0]}  alt="producto"/>
                                        </li>
                                    </div>
                                    <div className="carousel-item card-detail-box" data-bs-interval="4000">
                                        <li>
                                        <img className="card-detail-img" src={item.img[1]}  alt="producto"/>
                                        </li>
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>

                        </div>
                        <div className="col-sm-6 col-12 card-detail-cart d-flex flex-column align-items-center justify-content-around">
                            <h1 className="card-title">{item.nombre}</h1>
                            <p className="card-text">{item.description}</p>
                            <h2 className="card-text">${item.precio}</h2>

                            <p className="card-text">Unidades: {item.stock}</p>
                            <div className='card-detail-traid'>
                                {
                                    itemCount === 0
                                        ? <ItemTrading stock={item.stock} initial={itemCount} addItem={addItem} />
                                        : <Link to='/trolley' ><Button variant="outlined" startIcon={< TiShoppingCart />}><span> Ver Carrito </span></Button></Link>
                                }
                            </div>
                        </div>
                        <div className="card-detail-info">
                            <h4>Informacio:</h4>
                            <p className="card-text">{item.info}</p>
                        </div>
                    </div>
                    : <Detail />
            }
        </>
    );
}
export default CartsDetail