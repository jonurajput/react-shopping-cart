import React, { useEffect,useState } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import DetailHeader from "./DetailHeader"
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

const Details = () => {
    const { id } = useParams()
    const[quantity,setQuantity]=useState(1)
    
    const dispatch = useDispatch();
    const { product } = useSelector(state => state.ProductsReducer)
    
    function decrease(){
        if (quantity>1){
          setQuantity(quantity-1)
        }
    }
    useEffect(() => {
        dispatch({ type: 'PRODUCT', id: id })
    }, [id])

    return (
        <>
            <DetailHeader/>

        <div className="parent">
            <div className="img">
                <img src={product.image} />
                <div >
                    {product.name}
                </div>
            </div>
            <div className="content">
                
                <div className="cash">
                    <span className="ff">Price:${product.price}</span>
                    <span>discount:{product.discount}%</span>
                    <span>Actualprice:${product.discountPrice}</span>
                </div>
                <div className="add">
                    <div className="first">
                        <div onClick={decrease}>-</div>
                        <div>{quantity}</div>
                        <div onClick={()=>setQuantity(quantity+1)}>+</div>
                    </div>
                    <div className="second">
                    <div onClick={()=>dispatch({type:'ADD_TO_CART',payload:{product,quantity}})}>
                       <ShoppingBasketIcon/> Add To cart
                        </div>
                    </div>
                </div>
                <div className="desc" >
                   <h2>Details</h2>
                    {product.desc}
                    
                </div>
            </div>
        </div>
    
        </>
    )
}
export default Details;