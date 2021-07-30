import React,{useContext} from 'react'
import { cartContext } from './App'
const TotalCost = () => {
    const {cost:[cartTotalCost,setCartTotalCost],cart:[cartItems,setCartItems]}=useContext(cartContext);
    console.log('dd',cartItems)
    return (
       
    <div className="total-cost">
         {cartItems.length===0?null:
         <>
        <div className="line">

        </div>
        <div className="cal-cost">
        <p className='total'>Total</p>
        <p className='cost'>${parseFloat(cartTotalCost).toFixed(2)}</p>
        </div>
        </>
}
        </div>
       
         
        
    )
}

export default TotalCost
