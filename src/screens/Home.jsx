import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import { getFirestore, getDocs, collection, doc, getDoc, query, where, limit} from 'firebase/firestore'

function Home() {
  const [items, setItems] = useState({})

    // useEffect(()=> {
    //   // Acceder a una colección

    //   const db = getFirestore()

    //   const itemsRef = collection(db, 'items')

    //   getDocs(itemsRef)
    //   .then(res => {
    //     if(res.size === 0) {
    //       console.log('No results');
    //     }
    //     setItems(res.docs.map(doc => ({id: doc.id, ...doc.data()})))
    //   })
      
    // }, [])

    // useEffect(()=> {
    //   // Acceder a un documento

    //   const db = getFirestore()

    //   const itemRef = doc(db, 'items', 'GB3wBCTJinmzy3c4lW2G')

    //   getDoc(itemRef)
    //   .then(res => {
    //     if(res.exists) {
    //       setItem( {id: res.id, ...res.data()})
    //     }
    //   })
      
    // }, [])

    useEffect(()=> {
      // Aplicar un filtro

      const db = getFirestore()

      const queryFilter = query(collection(db, 'items'), where('category', '==', 'trousers'), limit(5))

      getDocs(queryFilter)
       .then(res => {
        if(res.size === 0) {
          console.log('No results');
        }
        setItems(res.docs.map(doc => ({id: doc.id, ...doc.data()})))
      })
      
    }, [])

  return (
    <div>
      {console.log(items)}
    </div>
  );
}

export default Home;
