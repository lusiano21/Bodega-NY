import CartsDetail from "../ItemsComponents/CartsDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../utils/baseDatos";
import { doc, getDoc } from "firebase/firestore";

const CartsDetailConteiner = () => {
    const [datos, setDatos] = useState([]);
    const { idProduct } = useParams();

      useEffect(() => {
        const fechOnebaseDatos = async() => {
            const docRef = doc(db, "productos", idProduct);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                return {
                    id: idProduct,
                    ...docSnap.data()
                    
                }
            } else {
                console.log("F5", docSnap)
            }
        }
        fechOnebaseDatos()
        .then(result => setDatos(result))
        .catch(err => console.log(err))
    }, []);

    return (
        <article className="d-flex justify-content-center">
        <CartsDetail item={datos}/>
        </article>
    );
}
export default CartsDetailConteiner;