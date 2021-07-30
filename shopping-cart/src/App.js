import React from 'react';
import {useEffect,useState,useReducer} from 'react';
import CartMenu from './CartMenu';
import CartItems from './CartItems';
import TotalCost from './TotalCost';
import './style.css';

const url='https://course-api.com/react-useReducer-cart-project';
export const cartContext=React.createContext();
function App() {
  const [cartItems,setCartItems]=useState([]);
  const [isLoading,setLoading]=useState(true);
  const [cartTotalItem,setCartTotalItem]=useState(null);
  const [cartTotalCost,setCartTotalCost]=useState(null);
  const handleCartItems=async()=>
  {
    const response=await fetch(url);
    const items=await response.json();
    let sum=0,Tcost=0;
    for(let i=0;i<items.length;i++){
    sum+=items[i].amount;
    Tcost+=parseFloat(items[i].price);
    }
    setCartItems(items);
    setCartTotalItem(sum);
    setCartTotalCost(Tcost);
    setLoading(false);
  }
  useEffect(()=>
  {
    handleCartItems();
  },[]);
  return (
  
    <cartContext.Provider value={{cart:[cartItems,setCartItems],loading:[isLoading,setLoading],
    cartTotal:[cartTotalItem,setCartTotalItem],cost:[cartTotalCost,setCartTotalCost]}}>
    <div className="App">
    {isLoading?<h1 style={{padding:"50px 0px",textAlign:"center",fontSize:"50px"}}>Loading...</h1>:
    <div className="shopping_cart">
    <CartMenu/>
    <CartItems/>
    <TotalCost/>
    </div>
    }
    </div>
    </cartContext.Provider>
    
  );
}

export default App;
