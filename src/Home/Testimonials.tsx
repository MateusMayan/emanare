import React, { useEffect, useState } from 'react';
import styles from './Testimonials.module.css';
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
  score: number;
  descricao: string;
  nomeCliente: string;
  estadoCliente: string;
  cidadeCliente: string;
  [prop: string]: any;
}

const Testimonials = () => {
  const [depoimentos, setTestimonials] = useState<Depoimento[]>([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      const PedidosRef = collection(db, 'pedidos');
      const query1 = query(PedidosRef, where('depoimento', '!=', null));
      const querySnapshot = await getDocs(query1);
      const fetchedTestimonials = await Promise.all(
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
                  score: depoimentoData.nota,
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
      const depoimentosValidos = fetchedTestimonials.filter(
        (depoimento) => depoimento !== null,
      ) as Depoimento[];
      setTestimonials(depoimentosValidos.slice(0, 3));
    };
    fetchTestimonials();
  });

  return (
    <div className={styles.Container}>
      <div className={styles.TestimonialsTitle}>
        <h3>
          Depoimentos <span> dos nossos clientes </span>{' '}
        </h3>
        <Heart />
      </div>
      <div className={styles.Testimonials}>
        {depoimentos.map((doc) => (
          <div key={doc.idDocumento} className={styles.Testimonial}>
            <div className={styles.TitleTestimonial}>
              <h1>{doc.nomeCliente + ','}</h1>
              <h2>{doc.cidadeCliente + ', ' + doc.estadoCliente}</h2>
            </div>
            <div className={styles.DescTestimonial}>
              <p>{doc.descricao}</p>
            </div>
            <div className={styles.scoreTestimonial}>
              {Array.from({ length: doc.score }).map((_, index) => (
                <Star1 key={index} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
