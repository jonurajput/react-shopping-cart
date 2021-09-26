import React from 'react'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useSelector } from "react-redux"
import {NavLink} from "react-router-dom"
function DetailHeader() {
    const { totalQuantity } = useSelector(state => state.CartReducers)
    return (
        <div className="detail_header">
             <button>
                <NavLink className="li" to="/cart"><ShoppingBasketIcon />
                    <span style={{ fontSize: "18px", fontWeight: "bold" }}>{totalQuantity}</span> </NavLink>
            </button>
        </div>
    )
}

export default DetailHeader
