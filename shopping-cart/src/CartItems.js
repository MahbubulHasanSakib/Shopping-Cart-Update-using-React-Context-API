import React from 'react'
import {useState, useContext ,useEffect} from 'react'
import { cartContext } from './App'
import { Item } from './Item'
const CartItems = () => {
    const {cart,loading}=useContext(cartContext);
    const [cartItems,setCartItems]=cart;
   

    return (
        <div className="cart-item">
            <h1>YOUR BAG</h1>
            
           {cartItems.length===0?<p style={{textAlign:'center'}}>is Empty</p>:
           cartItems.map((item,index)=>
            {
             return <Item key={index} singleItem={item}/>
            })}
        </div>
    )
}

export default CartItems
