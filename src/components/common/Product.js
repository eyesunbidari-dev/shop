import React from "react";
import { shorter } from "../../helpers/functions";
 
 
 const Product = ({productData}) => {
     return (
         <div>
             <img src={productData.image} alt="product" style={{width : "200px"}}/>
             <h3>{shorter(productData.title)}</h3>
             <p>{productData.price}</p>
             <div>
                 <a href="#"> Detail </a>
             <div>
             
                 <button> Add to cart </button>
             </div>
             </div>

         </div>
     );
 };
 
 export default Product;