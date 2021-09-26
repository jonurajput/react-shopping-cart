import React, { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

import { useSelector, useDispatch } from "react-redux"
const Nav = () => {
    const { totalQuantity } = useSelector(state => state.CartReducers)
    const name=localStorage.getItem('username')
    const dispatch = useDispatch()
    const [num, setNum] = useState()
    const [Value, inputValue] = useState()
    const [idi,setid]=useState(false)
    
    useEffect(() => {
        if (num === "high") {
            dispatch({ type: "high", payload: num })
        }
        if (num === "low") {
            dispatch({ type: "low", payload: num })
        }
        if (num === "Mens") {
            dispatch({ type: "Mens", payload: num })
        }
        if (num === "Womens") {
            dispatch({ type: "Womens", payload: num })
        }
        
        if (num == "Food") {
            dispatch({ type: "Food" })
        }
        if (Value) {
            dispatch({ type: "search", payload: Value.toLowerCase() })
        }
        if(Value===null){
            dispatch({type:"search_empty"})
        }
    }, [num, Value])
    return (

        <div className="navbar" style={{ position: "fixed" }} >
            <div className="left">
                <div className="links" id={idi ? "hidden" : ""}>
                    <NavLink className="li" to="/">Home</NavLink>
                    {name?<NavLink to="/">{name}</NavLink>:<NavLink className="li" to="/login">Login</NavLink>}
                    {name?<NavLink to="/"><button className="nbt" style={{border:"none",background:"transparent"}} onClick={()=>localStorage.clear()}>Logout</button></NavLink>:""}
                    <select onChange={e => setNum(e.target.value)}>
                        <option selected value="Sort">..Sort</option>
                        <hr />
                        
                        <option value="high">High to low</option>
                        <option value="low">Low to high</option>
                        <option value="Mens">Mens</option>
                        <option value="Womens">Womens </option>
                        <option value="Food">Foods</option>
                    </select>
                    
                </div>
                <button className="btnn" onClick={() => setid(!idi)}>{!idi ? <MenuIcon /> : <CloseIcon />}</button>
            </div>
            <div className="right">
                <input type="text" value={Value} onChange={(e) => inputValue(e.target.value)} placeholder="Search Products" />
            <div>
            <button>
                <NavLink className="li" to="/cart"><ShoppingBasketIcon />
                    <span style={{ fontSize: "18px", fontWeight: "bold" }}>{totalQuantity}</span> </NavLink>
            </button>

        </div>
        </div>   
        </div>
          
             
    )
}
export default Nav;