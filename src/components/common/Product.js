import React , {useContext} from "react";
import { isIncart, quantityCount, shorter } from "../../helpers/functions";
import { Link } from "react-router-dom";
//context
import { CartContext } from "../../context/CartContextProvider";
 
 
 const Product = ({productData}) => {
     const {state , dispatch} = useContext(CartContext);
     return (
         <div>
             <img src={productData.image} alt="product" style={{width : "200px"}}/>
             <h3>{shorter(productData.title)}</h3>
             <p>{productData.price}</p>
             <div>
                 <Link to={`/products/${productData.id}`}> Detail </Link>
             <div>
                 {
                     isIncart(state , productData.id) ? 
                     <button onClick={()=> dispatch({type:"INCREASE" , payload :productData})}>+</button> :
                     <button onClick={()=> dispatch({type:"ADD_ITEM" , payload :productData})}> Add to cart!!</button>
                 }
                   {
                     quantityCount(state, productData.id) > 1 && 
                   <button onClick={() => dispatch({type: "DECREASE", payload: productData})}>-</button>}
                    {quantityCount(state, productData.id) === 1 && 
                    <button onClick={() => dispatch({type: "REMOVE_ITEM", payload: productData})}>
                        remove
                        </button>
                        }
                    

                 
             </div>
             </div>

         </div>
     );
 };
 
 export default Product;