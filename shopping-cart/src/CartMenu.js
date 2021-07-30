import React,{useContext} from 'react'
import { cartContext } from './App'
const CartMenu = () => {
    const {cart,loading,cartTotal}=useContext(cartContext);
    const [cartItems,setCartItems]=cart;
    const [cartTotalItem,setCartTotalItem]=cartTotal;
    //console.log(cartItems)
    return (
        <div className='cart-menu-bg'>
        
        <div className='cart-menu'>
            <div className="cart-menu-left">
            <h1 onClick={()=>console.log(cartItems)} className="brand">Shopping Cart</h1>
            </div>
            <div className="cart-menu-right">
               <img src='/images/cart-icon.png'/>
               <span>{cartTotalItem}</span>
            </div>
        </div>
        </div>
    )
}

export default CartMenu
