import React , {useState , useEffect, createContext} from 'react';
//API
import { getProduct } from '../services/api';

export const ProductContext = createContext();

const ProductContextProvider = (props) => {
    
    const [products , setProducts] = useState([]);

    useEffect(() =>{
          const fetchApi = async() => {
              setProducts(await getProduct());
          }
          fetchApi();
    } , []);

    return (
        <ProductContext.Provider value={products}>
            {props.children}
        </ProductContext.Provider>
    );
};

export default ProductContextProvider;