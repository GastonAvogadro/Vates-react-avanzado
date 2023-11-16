import React, { useRef } from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";

function Cart() {
  const userNameRef = useRef(null);
  const userEmailRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const db = getFirestore();

    const collectionRef = collection(db, "orders");

    const order = {
      userName: userNameRef.current.value,
      userEmail: userEmailRef.current.value,
      items: [],
      totalPrice: 0
    }

    addDoc(collectionRef, order)
     .then((res)=> alert(`La orden ha sido enviada con éxito, su orden es: ${res.id}`))
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 items-center"
      >
        <input
          ref={userNameRef}
          type="text"
          placeholder="Ingrese su nombre completo"
          className="w-[400px] text-black"
          required
        />
        <input
          ref={userEmailRef}
          type="email"
          placeholder="Ingrese su email"
          className="w-[400px] text-black"
          required
        />
        <button type="submit">Enviar orden</button>
      </form>
    </div>
  );
}

export default Cart;
