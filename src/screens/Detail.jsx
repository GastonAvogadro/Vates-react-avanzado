import { doc, getDoc, getFirestore } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const [item, setItem] = useState({});
  const { idProduct } = useParams();

  useEffect(() => {
    // Acceder a un documento

    const db = getFirestore();

    const itemRef = doc(db, "items", idProduct);

    getDoc(itemRef).then((res) => {
      if (res.exists) {
        setItem({ id: res.id, ...res.data() });
      }
    });
  }, []);

  return (
    <div>
      <h3>{item.name}</h3>
      <img src={item.image} alt={item.name} />
    </div>
  );
}

export default Detail;
