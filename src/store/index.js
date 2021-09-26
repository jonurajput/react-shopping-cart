import {createStore,combineReducers} from "redux"
import ProductsReducer from "./reducers/ProductsReducer"
import CartReducers from "./reducers/CartReducers"

const root=combineReducers({
    ProductsReducer,CartReducers
});
const store=createStore(root);
export default store;