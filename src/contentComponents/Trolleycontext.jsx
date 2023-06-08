import { createContext, useState } from "react";

export const Trolleycontext = createContext()
const TrolleycontextProvider = ({children}) => {
    const [trolleyList, setrolleyList] = useState([]);
    const addToTrolley = (item, qty) => {
        let repeat = trolleyList.find(product => product.id === item.id);
        if( repeat === undefined ){
        setrolleyList([
            ...trolleyList,
            {
                id: item.id,
                nombre: item.nombre,
                imagen: item.img,
                qty: qty,
                precio: item.precio,
                description: item.description
            }
        ])
    }else{
        repeat.qty += qty;
        setrolleyList ([...trolleyList])
    }
    } 
    const deteleTrolley = () => {
        setrolleyList([ ]);
        
    }
    const calculoItem = (id) => {
        let total = trolleyList.map(item => item.id).indexOf(id);
        return trolleyList[total].precio * trolleyList[total].qty;
        
    }
    const calculoTotal = () => {
        let totalTrolley = trolleyList.map(item => calculoItem(item.id));
        return totalTrolley.reduce((acumulador, elemento) => acumulador + elemento, 0)
        
    }
    const deleteItemTrolley = (id) =>{
        const List = trolleyList.filter(item => item.id !== id);
        setrolleyList(List)
    }
    const calculoIva = () => {
        return calculoTotal() * 0.21
    }
    const total = () => {
        return calculoTotal() + calculoIva()
    }
    const calcItemsQty = () => {
        let qtys = trolleyList.map(item => item.qty);
        return qtys.reduce(((previousValue, currentValue) => previousValue + currentValue), 0);
    }
    return(
        <Trolleycontext.Provider value={{trolleyList, addToTrolley, deleteItemTrolley, deteleTrolley, calculoItem, calculoTotal, calculoIva, total, calcItemsQty}}>
            {children}
        </Trolleycontext.Provider>
    );
}
export default TrolleycontextProvider