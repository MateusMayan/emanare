import React from 'react'
import { db} from './FirebaseConfig'
import { collection, query, where,getDocs, documentId } from "firebase/firestore";

const FireStore = () => {
const userId = "XgOHnfZOlmkPl6qP5o79"

React.useEffect(() => {
  async function buscarClientPedido() { 
    //Criando coleções de pedidos, clientes e estoque
    const pedidosRef = collection(db, "pedidos");
    const clientPedidoRef = collection(db, 'cliente')
    const estoqueRef = collection(db, 'estoque')
    //Query de busca do cliente pelo userId 
    const query1 = query(clientPedidoRef, where(documentId(), '==', userId))
    const querySnapshot1 = await getDocs(query1);
    querySnapshot1.forEach(async (doc) => {
      console.log(doc.id, " => ", doc.data())
      
    //Buscando Os Pedidos do cliente logado
    const query2 = query(pedidosRef)
    const querySnapshot2 = await getDocs(query2);
    querySnapshot2.forEach(async (doc) => {
      if(doc.data().idCliente.id === userId){
      console.log('Pedido:', doc.data());
      console.log('Cliente:', doc.data().idCliente.id)
      console.log('Itens:', doc.data().itens)

      //Buscando os itens do pedido
      doc.data().itens.map(async (item : any)=> {
        const query3 = query(estoqueRef, where(documentId(), '==', item.idProduto))
        const querySnapshot3 = await getDocs(query3)
        querySnapshot3.forEach(async(doc) => {
          console.log(doc.data())
        })
      })
    };
      })
    
  })}

  buscarClientPedido()
}, [])


  return <div style={{font: 'var(--font-1-xs)'}}> Testando FireStore... </div>
}

export default FireStore