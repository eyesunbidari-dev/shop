import React , {useContext} from 'react';
import { Link } from 'react-router-dom';
// Context
import { CartContext } from '../../context/CartContextProvider';
//icons
import {ShoppingCart} from "@material-ui/icons";


const Navbar = () => {
    const {state} = useContext(CartContext);

    return (
        <div>
            <div>
                <Link to="/products">Products</Link>
                <div>
                    <Link to="/Cart">
                      <ShoppingCart/>
                    </Link>
                    <span>{state.itemsCounter}</span>
                </div>
            </div>
        </div>
    );
};


export default Navbar;