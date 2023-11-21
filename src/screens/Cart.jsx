import React, { useContext, useEffect, useRef } from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { CartContext } from "../context/CartContext";
import OrderForm from "../components/OrderForm";

function Cart() {
  const {cart, cartItems, fetchCartItems, emptyCart, removeItem } = useContext(CartContext);

  console.log(cartItems);

  useEffect(()=> {
    if(cart.length > 0) {
      fetchCartItems()
    }
  }, [])

  return (
    <div>
      {cartItems?.map(item => (
        <div className="flex items-center justify-center">
        <p>{item.name}</p>
        <button onClick={()=> removeItem(item.id)}>🗑️</button>
        </div>
      ))}
      <button onClick={emptyCart}>Vaciar carrito</button>
      <OrderForm />
    </div>
  );
}

export default Cart;
