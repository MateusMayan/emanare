import React, { useEffect, useState, createContext, ReactNode } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../FirebaseConfig';
import { collection, getDocs, query, where } from 'firebase/firestore';

interface UserContextType {
  docId: string | null;
  uId: string | null;
  login: any; // Você deve definir o tipo correto para login
  pedidos: any; // Você deve definir o tipo correto para pedidos
  amount: number | null;
  loading: boolean | null;
  error: string | null;
  children: ReactNode | null; // Adicione a propriedade children ao tipo do contexto
}

export const UserContext = createContext<UserContextType>({
  docId: null,
  uId: null,
  login: null,
  pedidos: null,
  amount: 0,
  loading: false,
  error: null,
  children: null,
});

export const UserStorage: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [docId, setDocId] = useState<string | null>(null);
  const [uId, setUId] = useState<string | null>(null);
  const [login, setLogin] = useState<any>(null);
  const [pedidos, setPedidos] = useState<any>(null);
  const [amount, setAmount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fazerLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        'mateusmayan@icloud.com',
        '123456',
      );
      const user = userCredential.user;
      if (user) {
        setUId(user.uid);
      }
    } catch (error: any) {
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
          doc.data().itens.map((item: any) => {
            return setAmount(item.quantidade);
          });
        }
      });
    };
    getRequestInfo();
  }, [login, docId, amount]);

  useEffect(() => {
    fazerLogin();
  }, []);

  return (
    <UserContext.Provider
      value={{
        docId,
        uId,
        login,
        pedidos,
        amount,
        loading,
        error,
        children,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
