import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

function Home() {
    const [counter, setCounter] = useState(0)
    const {items, setItems} = useContext(CartContext)

  return (
    <div>
      <h3>{counter}</h3>
      <button
      className="mr-6"
        onClick={() => {
            setCounter((prev) => prev - 1);
        }}
      >
        -
      </button>
      
      <button
        onClick={() => {
          setCounter((prev) => prev + 1);
        }}
      >
        +
      </button>
      <button onClick={()=>setItems(prev => prev + counter)}>Añadir al carrito</button>
    </div>
  );
}

export default Home;
