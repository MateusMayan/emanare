import React, {
  useEffect,
  useState,
  createContext,
  ReactNode,
  useContext,
} from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../FirebaseConfig';
import { collection, getDocs, query, where } from 'firebase/firestore';

interface UserContextType {
  docId: string | null;
  uId: string | null;
  login: any;
  pedidos: any;
  loading: boolean | null;
  error: string | null;
  children: ReactNode | null;
  setLogin: Function | null;
}

export const useUser = () => useContext(UserContext);

export const UserContext = createContext<UserContextType>({
  docId: null,
  uId: null,
  login: null,
  pedidos: null,
  loading: false,
  error: null,
  children: null,
  setLogin: null,
});

export const UserStorage: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [docId, setDocId] = useState<string | null>(null);
  const [uId, setUId] = useState<string | null>(null);
  const [login, setLogin] = useState<any>(null);
  const [pedidos, setPedidos] = useState<any>(null);
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
        }
      });
    };
    getRequestInfo();
  }, [login, docId]);

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
        loading,
        error,
        children,
        setLogin,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
