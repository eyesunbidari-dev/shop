import React , {useContext} from "react";
import { Link } from "react-router-dom";
//context
import { ProductContext } from "../context/ProductContextProvider";
// Style
import styles from "./ProductDetail.module.css";
 
 
 const ProductDetail = (props) => {
     const id = props.match.params.id;
     const data = useContext(ProductContext);
     const product = data[id - 1];
     const {image ,title , description , price , category} = product;
     
     return (
         <div className={styles.container}>
             <img className={styles.image} src={image} alt="product"/>
             <div className={styles.textContainer}>
                 <h3>{title}</h3>
                 <p className={styles.description}>{description}</p>
                 <p className={styles.category}><span>category :</span>{category}</p>
                 <div className={styles.buttonContainer}>
                   <span className={styles.price}>
                    {price}$
                   </span>
                   <Link to="/products"> Back </Link>
                 </div>
             </div>
         </div>
     );
 };
 
 export default ProductDetail;