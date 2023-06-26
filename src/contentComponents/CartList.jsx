import Cart from "../ItemsComponents/Cart.jsx";
import Animations from "../ItemsComponents/Animations.jsx"; 
const CartList = ({ items }) => {
    return (
        <section>
        <article className="d-flex flex-wrap justify-content-center ">
            
            {
                items.length > 0
                    ? items.map(item =>
                            <Cart
                                key={item.id}
                                id={item.id}
                                img={item.img}
                                nombre={item.nombre}
                                rate={item.rate}
                                precio={item.precio} />

                        )
                    : <Animations />
            }
        </article>
        </section>
    );
}
export default CartList;