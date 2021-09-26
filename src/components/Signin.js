import React,{useState} from "react"
import {NavLink} from "react-router-dom"
function Signin(){
   const[name,setName]=useState();
   const[email,setEmail]=useState();
   const[address,setaddress]=useState();
   const[mobile,setmobile]=useState();
   const submit=()=>{
   localStorage.setItem('username',name);
   localStorage.setItem('address',address)
   localStorage.setItem('email',email)
   localStorage.setItem('mobile',mobile)
   }
    return (
        <>
      
      <div className="model">
             
             <form >
                
                 <div className="model_group">
                 <input type="text" name="username" value={name} onChange={(e)=>setName(e.target.value)} className="model_input" placeholder="Username" required/>
                 </div>
                 <div className="model_group">
                 <input type="email" name="email" className="model_input" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email"  required/>
                 </div>
                 <div className="model_group">
                 <input type="text" name="address" className="model_input" value={address} onChange={(e)=>setaddress(e.target.value)} placeholder="Address"  required/>
                 </div>
                 <div className="model_group">
                 <input type="number" name="number" className="model_input" value={mobile} onChange={(e)=>setmobile(e.target.value)} placeholder="Mobile No."  required/>
                 </div>
                 <div className="model_group">
                 <input type="password" name="password" className="model_input" placeholder="Password" required/>
                 </div>
                 <div className="model_group">
                <NavLink to="/"><input type="submit" value="Register" onClick={submit} className="btn" /></NavLink> 
                 </div>
                 
                
             </form>   
            
            </div>
      
        </>
    )
}
export default Signin;