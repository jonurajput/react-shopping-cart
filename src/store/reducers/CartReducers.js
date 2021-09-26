const initState={
    products:[],
    totalPrice:0,
    totalQuantity:0
}
const CartReducers=(state=initState,action)=>{
    switch(action.type){
        case 'ADD_TO_CART':
            const {product,quantity}=action.payload
            
            const check=state.products.find(pr=>pr.id===product.id);
            
            if(check){
            return state;
            }else{
                const Tprice=state.totalPrice+product.discountPrice*quantity;
                console.log(Tprice)
                const Tquantities=state.totalQuantity+quantity
                product.quantity=quantity
                return{
                    ...state,products:[...state.products,product],totalPrice:Tprice,totalQuantity:Tquantities
                }
            }
            case 'REMOVE_FROM_CART':
                console.log(action.payload)
                function aheck(value){
                    return value.id!==action.payload.id
                }
                var a=state.products.filter(aheck)
                const Tquantities=state.totalQuantity-action.payload.quantity

                return{
                    ...state,products:a,totalQuantity:Tquantities
                }
        default:
            return state;
    }
}
export default CartReducers;