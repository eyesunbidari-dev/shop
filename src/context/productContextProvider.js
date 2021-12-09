import React , {useState , useEffect, createContext} from 'react';
//API
import { getProduct } from '../services/api';

const productContext = createContext()

const productContextProvider = (props) => {
    
    const [products , setProducts] = useState([]);

    useEffect(() =>{
          const fetchApi = async() => {
              setProducts(await getProduct())
          }
          fetchApi()
    } , [])

    return (
        <productContext.Provider value={products}>
            {props.children}
        </productContext.Provider>
    );
};

export default productContextProvider;