import React, {
  useEffect,
  useState,
  createContext,
  ReactNode,
  useContext,
} from 'react';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from 'firebase/auth';
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
  setUId: Function | null;
  fazerLogin: Function | null;
  cadastrarUsuario: Function | null;
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
  setUId: null,
  fazerLogin: null,
  cadastrarUsuario: null,
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
  const clientRef = collection(db, 'cliente');

  // Functions
  const fazerLogin = async (username: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        username,
        password,
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

  const cadastrarUsuario = async (email: string, password: string) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(`${errorMessage}`);
      });
  };

  // React Function
  useEffect(() => {
    const getUserInfo = async () => {
      const queryVar = query(clientRef, where('idCliente', '==', uId));
      const querySnapshot = await getDocs(queryVar);
      querySnapshot.forEach(async (doc) => {
        setLogin(doc.data());
        setDocId(doc.id);
      });
    };
    getUserInfo();
  }, [uId, clientRef]);

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
        setUId,
        fazerLogin,
        cadastrarUsuario,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
