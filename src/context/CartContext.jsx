import { doc, getDoc, getFirestore } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";

//Creamos el contexto
export const CartContext = createContext();

//Creamos el provider para poder proveer el contexto a la aplicación
export function CartProvider({ children }) {
  //Recuperamos datos del local storage

  const storedItems = JSON.parse(localStorage.getItem("cartItems"));
  const initialItems = storedItems ? storedItems : [];

  //Acá va a la información del contexto

  const [cart, setCart] = useState(initialItems);
  const [cartItems, setCartItems] = useState([]);

  //Guardar la cantidad de items en localStorage cada vez que cambien

  useEffect(() => {
    const parsedItems = JSON.stringify(cart);
    localStorage.setItem("cartItems", parsedItems);
  }, [cart]);

  const itemsInCart = cart.length > 0 ? cart.reduce((prev, act) => prev + act.quantity, 0) : 0;

  const isInCart = (idProduct) => cart.find((item) => (item.id === idProduct ? true : false));

  const addItem = (idProduct, quantity) => {
    if (isInCart(idProduct)) {
      setCart(
        cart.map((item) => {
          return item.id === idProduct ? { id: idProduct, quantity: item.quantity + quantity } : item;
        })
      );
    } else {
      setCart([...cart, { id: idProduct, quantity: quantity }]);
    }
  };

  const fetchCartItems = async () => {
    const db = getFirestore();
    try {
      const promises = cart.map(async (item) => {
        const itemRef = doc(db, "items", item.id);

        const res = await getDoc(itemRef);

        if (res.exists()) {
          //const getQuantity = cart.find(item=> item.id === res.id)

          return { id: res.id, quantity: item.quantity, ...res.data() };
        }

        // throw New Error`
      });

      const itemsData = await Promise.all(promises);
      setCartItems(itemsData);
    } catch (error) {
      console.error(error);
    }
  };

  const totalPrice =
    cartItems.length > 0 ? cartItems.reduce((prev, act) => prev + act.quantity * act.price, 0) : 0;

  const emptyCart = () => {
    setCart([]);
    setCartItems([]);
  };

  const removeItem = (idProduct) => {
    const filteredCart = cart.filter(item => item.id !== idProduct);
    setCart(filteredCart)
    const filteredCartItems = cartItems.filter(item => item.id !== idProduct);
    setCartItems(filteredCartItems)

  }

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addItem,
        itemsInCart,
        fetchCartItems,
        cartItems,
        setCartItems,
        totalPrice,
        emptyCart,
        removeItem
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
