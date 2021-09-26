import React from 'react';
import Home from "./components/Home"
import './App.css'
import './Nav.css'
import Checkout from "./components/Checkout"

import {BrowserRouter as Router,Route} from "react-router-dom"
import Cart from "./components/Cart"
import {Provider} from "react-redux"
import store from "./store/index"
import "./Form.css"
import Details from "./components/Details"
import 'react-bootstrap/dist/react-bootstrap.min.js'
import Signin from './components/Signin';
function App() {
  
  return (
<Router >
<Provider store={store}>

<Route path="/" exact component={Home}/>
<Route path="/cart" exact component={Cart}/>
<Route path="/details/:id" exact component={Details}/>
<Route path="/login" component={Signin}/>
<Route path="/checkout" component={Checkout}/>
</Provider>
  </Router>
  );
}


export default App;
