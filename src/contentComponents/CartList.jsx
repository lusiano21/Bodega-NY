import Cart from "../ItemsComponents/Cart.jsx";
import Animations from "../ItemsComponents/Animations.jsx";

const CartList = ({items}) => {
    return (
        <div className="d-flex flex-wrap">
        {
        items.length > 0
        ? items.map(item => 
        <Cart
        key={item.id}
        id={item.id}
        img={item.img}
        nombre={item.nombre}
        rate={item.rate}
        precio={item.precio}/>
        )
        : <Animations/>
    }
        </div>
    );
}
export default CartList;