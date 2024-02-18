import React, { useEffect, useState } from 'react';
import styles from './Depoimentos.module.css';
import { ReactComponent as Heart } from '../Assets/icons/chat-heart 1.svg';
import { ReactComponent as Star1 } from '../Assets/icons/star-fill 2.svg';
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from 'firebase/firestore';
import { db } from '../FirebaseConfig';

interface Depoimento {
  idDocumento: string;
  nota: number;
  descricao: string;
  nomeCliente: string;
  estadoCliente: string;
  cidadeCliente: string;
  [prop: string]: any;
}

const Depoimentos = () => {
  const [depoimentos, setDepoimentos] = useState<Depoimento[]>([]);

  useEffect(() => {
    const fetchDepoimentos = async () => {
      const PedidosRef = collection(db, 'pedidos');
      const query1 = query(PedidosRef, where('depoimento', '!=', null));
      const querySnapshot = await getDocs(query1);
      const fetchedDepoimentos = await Promise.all(
        querySnapshot.docs.map(async (document) => {
          const depoimentoData = document.data().depoimento;
          const idCliente = document.data().idCliente.id;
          if (depoimentoData && idCliente) {
            const ClientDoc = await getDoc(doc(db, 'cliente', idCliente));
            if (ClientDoc.exists()) {
              const data = ClientDoc.data();
              if (data) {
                return {
                  idDocumento: document.id,
                  nota: depoimentoData.nota,
                  descricao: depoimentoData.descricao,
                  nomeCliente: data.nome,
                  estadoCliente: data.endereco.estado,
                  cidadeCliente: data.endereco.cidade,
                };
              }
            }
          }
          return null;
        }),
      );
      const depoimentosValidos = fetchedDepoimentos.filter(
        (depoimento) => depoimento !== null,
      ) as Depoimento[];
      setDepoimentos(depoimentosValidos.slice(0, 3));
    };
    fetchDepoimentos();
  });

  return (
    <div className={styles.Container}>
      <div className={styles.DepoimentosTitle}>
        <h3>
          Depoimentos <span> dos nossos clientes </span>{' '}
        </h3>
        <Heart />
      </div>
      <div className={styles.Depoimentos}>
        {depoimentos.map((doc) => (
          <div key={doc.idDocumento} className={styles.Depoimento}>
            <div className={styles.TitleDepoimento}>
              <h1>{doc.nomeCliente + ','}</h1>
              <h2>{doc.cidadeCliente + ', ' + doc.estadoCliente}</h2>
            </div>
            <div className={styles.DescDepoimento}>
              <p>{doc.descricao}</p>
            </div>
            <div className={styles.notaDepoimento}>
              {Array.from({ length: doc.nota }).map((_, index) => (
                <Star1 key={index} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Depoimentos;
