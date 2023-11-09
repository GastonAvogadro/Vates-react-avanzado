import { createContext, useEffect, useState } from "react";

//Creamos el contexto
export const CartContext = createContext();

//Creamos el provider para poder proveer el contexto a la aplicación
export function CartProvider({ children }) {
    //Recuperamos datos del local storage

    const storedItems = JSON.parse(localStorage.getItem('cartItems'))
    const initialItems = storedItems ? storedItems : 0;

  //Acá va a la información del contexto

  const [items, setItems] = useState(initialItems);

  //Guardar la cantidad de items en localStorage cada vez que cambien

  useEffect(()=> {
    const parsedItems = JSON.stringify(items)
    localStorage.setItem('cartItems', parsedItems)
  }, [items])


  return (
    <CartContext.Provider value={{ items, setItems }}>
      {children}
    </CartContext.Provider>
  );
}
