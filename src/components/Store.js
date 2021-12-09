import React, {useContext} from "react";
//component
import Product from "./common/Product";
//context
import { ProductContext } from "../context/ProductContextProvider";



const Store = () => {
    const products = useContext(ProductContext);
    return (
        <div style={{display:"flex" , flexWrap : "wrap" , justifyContent :"space-between"}}>
            {
                products.map( product => 
                    <Product
                     key={product.id}
                     productData={product}
                    />
                )
            }
        </div>
    );
};

export default Store;