import React from 'react'
import {useSelector} from "react-redux"
function Checkout() {
    const {products,totalPrice,totalQuantity}=useSelector(state=>state.CartReducers)
    const name=localStorage.getItem('username')
    const address=localStorage.getItem('address')
    const mobile=localStorage.getItem('mobile')
    return (
        <div className="modell">
        <h4>Name : {name}</h4>     
         <h4>Address : {address}</h4> 
         <h4>Total Products : {totalQuantity}</h4>
        <h4>TotalPrice : {totalPrice}</h4>
        <h4>Mobile no. :{mobile}</h4>
       </div>
 
    )
}

export default Checkout
