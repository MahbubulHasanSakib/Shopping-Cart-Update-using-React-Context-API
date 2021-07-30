import React, { useContext } from 'react'
import { cartContext } from './App'
import { useState, useEffect } from 'react'

export const Item = ({ singleItem }) => {
  const { cart, loading, cartTotal } = useContext(cartContext);
  const [cartItems, setCartItems] = cart;
  const [cartTotalItem, setCartTotalItem] = cartTotal;
  const { cost: [cartTotalCost, setCartTotalCost] } = useContext(cartContext);

  useEffect(()=>
  {
    console.log("hi")
  },[cartItems])
  const handleIncrement = (id) => {

    const tempObjArr = [...cartItems];
    for (let i = 0; i < tempObjArr.length; i++) {
      if (tempObjArr[i].id === id) {
        tempObjArr[i].amount = tempObjArr[i].amount + 1;
        setCartTotalItem(cartTotalItem + 1);
        setCartTotalCost(cartTotalCost + parseFloat(tempObjArr[i].price))
        break;
      }
    }
    setCartItems(tempObjArr);
    console.log(cartItems)

  }
  const handleRemove = (id, amount, price) => {
    const newArr = cartItems.filter((item) => item.id !== id)
    setCartItems(newArr);
    setCartTotalItem(cartTotalItem - amount);
    setCartTotalCost(cartTotalCost - (parseFloat(price) * amount));
  }
  const handleDecrement = (id) => {
    const tempObjArr = [...cartItems];
    for (let i = 0; i < tempObjArr.length; i++) {
      if (tempObjArr[i].id === id) {
        if (tempObjArr[i].amount === 1) {
          const newArr = cartItems.filter((item) => item.id !== id)
          setCartItems(newArr);
          setCartTotalItem(cartTotalItem - 1);
          setCartTotalCost(cartTotalCost - parseFloat(tempObjArr[i].price))
          break;
        }
        else {
          tempObjArr[i].amount = tempObjArr[i].amount - 1;
          setCartTotalItem(cartTotalItem - 1);
          setCartTotalCost(cartTotalCost - parseFloat(tempObjArr[i].price))
          setCartItems(tempObjArr);
          break;
        }
      }
    }



  }
 
  return (

    <div key={singleItem.id} className="singleItem">

      <div className="itemDetails">
        <img src={singleItem.img} alt='image_name' />
        <div className="item-name-price">
          <p>{singleItem.title}</p>
          <p>{singleItem.price}</p>
          <p className="remove" onClick={() => handleRemove(singleItem.id, singleItem.amount, singleItem.price)}>remove</p>
        </div>
      </div>
      <div className="itemAmount">
        <p onClick={() => handleIncrement(singleItem.id)}><i className="fas fa-chevron-up"></i></p>
        <p className="amount">{singleItem.amount}</p>
        <p onClick={() => handleDecrement(singleItem.id)}><i className="fas fa-chevron-down"></i></p>
      </div>
    </div>
  )
}
