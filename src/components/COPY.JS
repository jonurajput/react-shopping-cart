if(action.type==="PRODUCT"){
    return { ...state, product: state.products.find(product => product.id === parseInt(action.id)) }
} 
 
else if(action.type==="low"){
    var a = state.products.sort((a, b) => a.discountPrice - b.discountPrice)
    return { ...state, products: a }
 }
else if(action.type==="high"){
    var b = state2.products.sort((a, b) => {
        if (a.discountPrice > b.discountPrice) {
            return -1;
        }
        if (a.discountPrice < b.discountPrice) {
            return +1;
        }
        return 0;

    })
    return {
        ...state, products: b
    }
}
else if(action.type==="Mens"){
    function check(value) {
        return value.categories === "Men"
    }
    var c = state2.products.filter(check)

    return {
        ...state, products: c
    }
}
else if(action.type=== "Womens"){
    function check1(value) {
        return value.categories === "Women"
    }
    var c = state2.products.filter(check1)

    return {
        ...state, products: c
    }
}

else if(action.type==="Food"){
    function check4(value) {
        return value.categories === "Food"
    }
    var d = state2.products.filter(check4)

    return {
        ...state, products: d
    }
}
else if(action.type==="search"){
    
    function filter1(value){
        return value.name.toLowerCase().includes(action.payload)||value.categories.toLowerCase().includes(action.payload)
    }
    var e=state2.products.filter(filter1)
    return {
        ...state,products:e
    }
}

else{return state;}
