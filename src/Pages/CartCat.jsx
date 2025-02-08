import { createContext, useReducer } from "react"


let cartReducer=(state,action)=>{
    switch(action.type){
        case 'ADD_TO_CART':
            return {cart: [...state.cart, action.payload]}
        case 'remove':
            return {cart: state.cart.filter((a)=>a.id!==action.payload.id)}
            
        default:
            return state
    }
}

let CartCat=createContext()

export let CartProvider=({children})=>{
    let[state,dispatch]=useReducer(cartReducer,{cart:[]});
    return(
        <>
        <CartCat.Provider value={{state,dispatch}}>
            {children}
        </CartCat.Provider>
        </>
    )
}
export default CartCat