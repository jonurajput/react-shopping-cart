import React from "react"
import Header from "./Header"
import {useSelector} from "react-redux"
import {Link} from "react-router-dom"
import Nav from "./Nav"
import Footer from "./Footer"
const Home=()=>{
    const {products}=useSelector(state=>state.ProductsReducer)
    
    return(
        <div >
        <Nav/>
        <Header/>

        <div className="row">
            {products.map(data=>(
                <div className="col-3" key={data.id}>
                    <div className="product_img">
                    <Link to={`/details/${data.id}`}>
                        <img src={data.image} alt="image name"/>
                        </Link>
                    </div>
                    <div className="product_name">
                        {data.name}
                    </div>
                    <div className="product_price">
                        ${data.price}
                    </div>
                    <div className="product_discount">
                       ${data.discountPrice}
                    </div>
                </div>
            ))
                
            }
    
            
        </div>
        <Footer/>
        </div>
        
    )
}
export default Home;