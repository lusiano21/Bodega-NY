import { useEffect,useState } from "react";
import { db } from "../utils/baseDatos.jsx";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useParams } from "react-router-dom";
import CartList from "./CartList.jsx";

const CartListConteiner = () => {
    const [datos, setDatos] = useState([]);
    const { idCategory } = useParams();

      useEffect(() => {
        const fechbaseDatos = async() => {
            let catalogo;
            if (idCategory){
                catalogo = query(collection(db, "productos"), where('categoria', "==", idCategory))

            }else{
                catalogo = collection(db, "productos")
            }
        const querySnapshop = await getDocs(catalogo);
        const dataSnapshop = querySnapshop.docs.map(item => ({
            id: item.id,
            ...item.data()
        }))
        return dataSnapshop;
    }
    fechbaseDatos()
    .then(result => setDatos(result))
    .catch(err => console.log(err))
    }, [idCategory]);
    
    return (
        <CartList items={datos}/>
    );
}
export default CartListConteiner;