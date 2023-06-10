import { useContext } from "react";
import { Trolleycontext } from "../contentComponents/Trolleycontext";
import { AiFillShopping } from "react-icons/ai"
import { Button } from "@mui/material";
import { FaTrashAlt } from 'react-icons/fa';
import { collection, doc, increment, serverTimestamp, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../utils/baseDatos";


const Trolley = () => {
    const trolley = useContext(Trolleycontext);

    const createOrder = () => {
        const order = {
            buyer: {
                name: 'Eduardo Moya',
                email: 'eduardo@gmail.com',
                phone: '1134542537'
            },
            date: serverTimestamp(),
            items: trolley.trolleyList.map(item => ({
                id: item.id,
                title: item.nombre,
                price: item.precio,
                qty: item.qty
            })),
            total: trolley.total()
        }
        const createOrderBaseDatos = async () => {
            const newOrderref = doc(collection(db, "order"))
            await setDoc(newOrderref, order);
            return newOrderref
        }
        createOrderBaseDatos()
            .then(result => {
                alert('Felicitaciones tu compra se a realizado con exito')
                trolley.trolleyList.forEach(async (item) => {
                    const itemRef = doc(db, "productos", item.id);
                    await updateDoc(itemRef, {
                        stock: increment(-item.qty)
                    })
                })
                trolley.deteleTrolley()
            })
            .catch(err => console.log(err))
    }
    return (
        <section className="conteiner-trolley d-flex justify-content-center">
            <div className="conteiner-trolley-style">
                <h1>Carrito:</h1>
                <div className="conteiner-trolley-list">
                    <article className="d-flex flex-column justify-content-center">
                        {
                            trolley.trolleyList.length === 0
                                ? <img src="https://res.cloudinary.com/dees2z2uf/image/upload/v1686358648/TrolleyVacio_e31aor.png" className="img-fluid card-trolley-img" />
                                : trolley.trolleyList.map(item =>
                                    <div key={item.id} className="card-trolley row g-0" >
                                        <img src={item.imagen[0]} className="img-fluid col-12 col-md-3 col-lg-2 rounded-start" alt="..." />
                                        <div className="col-12 col-md-9 col-lg-10 d-flex justify-content-evenly">
                                            <div className="card-trolley-body">
                                                <h5 className="card-title">{item.nombre}</h5>
                                                <p className="card-trolley-description">{item.description}</p>
                                                <div className="card-trolley-info d-flex justify-content-around" >
                                                    <p className="card-text"><small className="text-muted"> Cantidad: </small> {item.qty} - $ {item.precio}</p>
                                                    <p className="card-text"> Total: $ {trolley.calculoItem(item.id)}</p>
                                                </div>
                                                <Button variant="outlined" color="error" startIcon={<FaTrashAlt />} onClick={() => trolley.deleteItemTrolley(item.id)}>
                                                    Eliminar
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                )
                        }
                    </article>
                    <article>
                        {
                            trolley.trolleyList.length != 0 &&
                            <div className="card-cost">
                                <h4>Costo de la compra</h4>
                                {
                                    <div className="card-cost-info">
                                        <div>
                                            <h6>Subtotal: $ {trolley.calculoTotal()}</h6>
                                            <h6>Iva: $ {trolley.calculoIva()}</h6>
                                            <h6>Total: $ {trolley.total()}</h6>
                                        </div>
                                        <div className="card-cost-btn">
                                        <Button  variant="outlined" color="error" startIcon={<FaTrashAlt />} onClick={() => trolley.deteleTrolley()}>Todo</Button>
                                        <Button variant="contained" endIcon={<AiFillShopping/>} onClick={createOrder}> Comprar</Button>
                                        </div>
                                    </div>
                                }

                            </div>
                        }
                    </article>
                </div>
            </div>
        </section>

    )
}
export default Trolley;