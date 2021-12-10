import React , {useContext} from "react";
import { Link } from "react-router-dom";
//context
import { ProductContext } from "../context/ProductContextProvider";
 
 
 const ProductDetail = (props) => {
     const id = props.match.params.id;
     const data = useContext(ProductContext);
     const product = data[id - 1];
     const {image ,title , description , price , category} = product;
     
     return (
         <div>
             <img src={image} alt="product"/>
             <div>
                 <h3>{title}</h3>
                 <p>{description}</p>
                 <p><span>category :</span>{category}</p>
                 <div>
                   <span>
                    {price}$
                   </span>
                   <Link to="/products"> Back </Link>
                 </div>
             </div>
         </div>
     );
 };
 
 export default ProductDetail;