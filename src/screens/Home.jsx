import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import {
  getFirestore,
  getDocs,
  collection,
  doc,
  getDoc,
  query,
  where,
  limit,
} from "firebase/firestore";
import { ping } from "ldrs";
import { Link } from "react-router-dom";

function Home() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    // Acceder a una colección

    const db = getFirestore();

    const itemsRef = collection(db, "items");

    getDocs(itemsRef)
      .then((res) => {
        if (res.size === 0) {
          console.log("No results");
        }
        setItems(res.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  ping.register();

  return (
    <div>
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

export default Home;
