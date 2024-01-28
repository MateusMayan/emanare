import React, { useEffect, useState, createContext } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from './FirebaseConfig';
import { collection, getDocs, query, where } from 'firebase/firestore';

export const UserContext = createContext();

export const UserStorage = ({ children }) => {
  const [docId, setDocId] = useState(null);
  const [uId, setUId] = useState(null);
  const [login, setLogin] = useState(null);
  const [pedidos, setPedidos] = useState(null);
  const [quantidade, setQuantidade] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fazerLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        'emmilyschramm@icloud.com',
        '123456',
      );
      const user = userCredential.user;
      setUId(user.uid);
    } catch (error) {
      console.error('Error during login:', error.message);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const getUserInfo = async () => {
      const clientRef = collection(db, 'cliente');
      const queryVar = query(clientRef, where('idCliente', '==', uId));
      const querySnapshot = await getDocs(queryVar);
      querySnapshot.forEach(async (doc) => {
        setLogin(doc.data());
        setDocId(doc.id);
      });
    };
    getUserInfo();
  }, [uId]);

  useEffect(() => {
    const getRequestInfo = async () => {
      const RequestRef = collection(db, 'pedidos');
      const queryVar = query(RequestRef);
      const querySnapshot = await getDocs(queryVar);
      querySnapshot.forEach(async (doc) => {
        if (doc.data().idCliente.id === docId) {
          setPedidos(doc.data());
          doc.data().itens.map((item) => {
            return setQuantidade(item.quantidade);
          });
        }
      });
    };
    getRequestInfo();
  }, [login, docId, quantidade]);

  useEffect(() => {
    fazerLogin();
  }, []);
  return (
    <UserContext.Provider
      value={{ docId, pedidos, quantidade, uId, error, loading, login }}
    >
      {children}
    </UserContext.Provider>
  );
};
