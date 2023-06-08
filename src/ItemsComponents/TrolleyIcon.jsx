import { useContext} from "react";
import { Trolleycontext } from "../contentComponents/Trolleycontext";
//import Badge  from '@mui/material/Badge';
//import Badge from 'react-bootstrap/Badge';
import { Badge} from "@mui/material";
import { FiShoppingCart } from "react-icons/fi"




//<div className="iconoCar"><ion-icon name="cart-outline"></ion-icon></div>
const CarWidget = () => {
    const test = useContext (Trolleycontext);

    return (
        <div>
        <h3 className="navBar-icons">    
        <Badge  badgeContent={test.calcItemsQty()} color="secondary">
        <FiShoppingCart />
        </Badge>
        </h3>
        </div>
    );
}

export default CarWidget;