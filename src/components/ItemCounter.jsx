import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

function ItemCounter({id}) {
  const [counter, setCounter] = useState(1);
  const { addItem } = useContext(CartContext);

  const handleAddCounter = () => setCounter((prev) => prev + 1);
  const handleRemoveCounter = () => counter > 1 && setCounter((prev) => prev - 1);
  return (
    <div>
      <div className="flex justify-center items-center gap-4">
        <button className="text-[2rem]" onClick={handleRemoveCounter}>
          -
        </button>
        <p className="text-[1.5rem]">{counter}</p>
        <button className="text-[2rem]" onClick={handleAddCounter}>
          +
        </button>
      </div>
      <button onClick={()=> addItem(id, counter)}>Añadir al carrito</button>
    </div>
  );
}

export default ItemCounter;
