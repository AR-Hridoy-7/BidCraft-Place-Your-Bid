import React, { createContext, useState } from "react";
<<<<<<< HEAD
import all_product from '../Components/Assets/data';
=======
import all_product from '../Components/Assets/all_product';
>>>>>>> df301b6ebce1d287843a987bb82c9cb5efecb687

export const ShopContext = createContext(null);
const getDefaultCart=()=>{
  let cart ={};
  for(let index=0;index<all_product.length+1;index++){
    cart[index]=0;
  }
  return cart;
}


const ShopContextProvider = (props) => {
  const [cartItems,setCartItems]=useState(getDefaultCart());
  
  
  const addToCart=(itemId)=>{
      setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
      console.log(cartItems);
  }
  const removeFromCart=(itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
}
  const getTotalCartAmount=()=>{
    let totalAmont=0;
    for(const item in cartItems){
      if(cartItems[item]>0){
<<<<<<< HEAD
        let itemInfo=all_product.find((product)=>product.item_id===Number(item))
=======
        let itemInfo=all_product.find((product)=>product.id===Number(item))
>>>>>>> df301b6ebce1d287843a987bb82c9cb5efecb687
        totalAmont +=itemInfo.new_price*cartItems[item];
      }
      
    }
    return totalAmont;
  }
  const getTotalCartItems=()=>{
    let totalItem=0;
    for(const item in cartItems){
      if(cartItems[item]>0){
        totalItem+=cartItems[item];
      }
    }
    return totalItem;
  }
 const contextValue = {getTotalCartItems,getTotalCartAmount,all_product,cartItems,addToCart,removeFromCart};

  return(
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider;