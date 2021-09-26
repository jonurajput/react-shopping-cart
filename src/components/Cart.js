import React,{useState,useEffect} from "react"
import {useSelector,useDispatch} from "react-redux"


import {NavLink} from "react-router-dom"
const Cart=()=>{
    const {products,totalPrice,totalQuantity}=useSelector(state=>state.CartReducers)
    const dispatch=useDispatch()
    const[price,setPrice]=useState()
    const name=localStorage.getItem('username')
    useEffect(()=>{
        var a=0;
        products.map((data)=>{
             a=a+(data.discountPrice)*totalQuantity
         } )
        setPrice(a)
    },[])
    return(
        <>
        {totalQuantity? <div>
        <div className="parent_"><div className="one_">Product</div>
        <div className="two_"><span>name</span>
        <span>price</span>
        <span>Quantity</span></div>
        <div className="three_"></div></div>
        <hr/>
       
           {products.map((data)=>(
               <div className="parent_">
               <div className="one_">
                   <img src={data.image}/>
               </div>
               <div className="two_">
                   <span>{data.name}{data.id}</span>
                   <span>{data.discountPrice}</span>
                   <span>{data.quantity}</span>
            
               </div>
               <div className="three_">
                   <span className="btn_" onClick={()=>dispatch({type:'REMOVE_FROM_CART',payload:data})}>Remove</span>
                   
               </div>
            </div>
           ))} 
        <hr/>
       <div className="cart_bottom">
           <h1>Total</h1>
           
           <h3>Rs {price} </h3>
       </div>
          <div className="checkout">
           
           {name?<NavLink to="/checkout"><button className="checkbtn">Checkout</button></NavLink>: <NavLink to="/login" >
                <button className="checkbtn">Checkout</button>
            </NavLink>}
           
          </div>
        </div>
       :
       <h1>Cart is Empty</h1>}

      
    </>)    
    
}
export default Cart;