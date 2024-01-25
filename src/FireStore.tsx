import React from 'react'
// Create a reference to the cities collection
import { db} from './FirebaseConfig'
import { collection, query, where } from "firebase/firestore";
import { doc, getDocs } from "firebase/firestore";

const FireStore = () => {
// Add a new document in collection "cities"

React.useEffect(() => {
  async function editarDocumento() { 
    const pedidosRef = collection(db, "pedidos");
    const q = query(pedidosRef, where("statusPedido", "==", 'Em Processamento'));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    })
  }
  editarDocumento()
}, [])


  return <div> Testando FireStore... </div>
}

export default FireStore