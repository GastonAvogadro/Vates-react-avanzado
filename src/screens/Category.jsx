import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ping } from "ldrs";

function Category() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { idCategory } = useParams();

  useEffect(() => {
    // Aplicar un filtro

    const db = getFirestore();

    const queryFilter = query(
      collection(db, "items"),
      where("category", "==", idCategory)
    );

    getDocs(queryFilter)
      .then((res) => {
        if (res.size === 0) {
          console.log("No results");
        }
        setItems(res.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [idCategory]);

  ping.register();

  return (
    <div>
      Usted está buscando: {idCategory}
      {loading ? (
        <l-ping size="80" speed="2" color="white"></l-ping>
      ) : (
        <ul className="flex flex-wrap gap-6">
          {items.map((item) => (
            <li key={item.id}>
              <Link to={`/detail/${item.id}`}>
                <h3>{item.name}</h3>
                <img src={item.image} alt={item.name} />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Category;
