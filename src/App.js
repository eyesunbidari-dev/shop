import React from "react";
import './App.css';
//component
import Store from "./components/Store";


import ProductContextProvider from "./context/ProductContextProvider";
import CartContextProvider from "./context/CartContextProvider";
import {Switch , Route , Redirect} from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import Navbar from "./components/common/Navbar";
import ShopCart from "./components/ShopCart";



function App() {
  return (
    <ProductContextProvider>
      <CartContextProvider>
        <Navbar/>
      <Switch>
        <Route path="/products/:id" component={ProductDetail}/>
        <Route path="/products" component={Store}/>
        <Route path="/cart" component={ShopCart} />
        <Redirect to="/products"/>
      </Switch>
      </CartContextProvider>
    </ProductContextProvider>
  );
}

export default App;
