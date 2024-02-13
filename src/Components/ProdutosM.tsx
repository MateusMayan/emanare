import React, { useEffect, useState } from 'react';
import styles from './ProdutoM.module.css';
import { collection, getDocs, query } from 'firebase/firestore';
import { db } from '../FirebaseConfig';
import { Link } from 'react-router-dom';
import { CartProvider, useCart } from '../contexts/CartContext';

interface Product {
  id: string | null;
  name: string | null;
  price: number | null;
  description: string | null;
  amount: number | null;
  categoria: string | null;
  [prop: string]: any;
}

interface ProdutosMProps {
  titulo: string;
  quantidade: number;
}

const ProdutosM: React.FC<ProdutosMProps> = ({
  titulo,
  quantidade,
  ...props
}) => {
  //Hooks
  const { addToCart } = useCart();
  const [amounts, setAmounts] = useState<{ [key: string]: number }>({});

  //Funções

  const removeProducts = (productId: string) => {
    setAmounts((prevAmounts) => {
      const newAmounts = { ...prevAmounts };
      newAmounts[productId] = Math.max(newAmounts[productId] - 1, 0);
      return newAmounts;
    });
  };

  const addProducts = (productId: string) => {
    setAmounts((prevAmounts) => {
      const newAmounts = { ...prevAmounts };
      newAmounts[productId] = (newAmounts[productId] || 0) + 1;
      return newAmounts;
    });
  };

  const [products, setProducts] = useState<Product[]>([]);

  //React.useEffect

  useEffect(() => {
    const fetchProducts = async () => {
      const estoqueRef = collection(db, 'estoque');
      const querySnapshot = await getDocs(query(estoqueRef));
      const fetchedProducts: Product[] = [];

      querySnapshot.forEach((doc) => {
        const data = doc.data();
        fetchedProducts.push({
          id: doc.id,
          name: data.nome || '',
          price: data.precoUnitario || 0,
          description: data.descricao || '',
          amount: data.quantidade,
          categoria: data.categoria,
        });
      });

      setProducts(fetchedProducts.slice(0, quantidade));
    };

    fetchProducts();
  }, [quantidade]);

  return (
    <CartProvider>
      {' '}
      <div className={styles.Container}>
        <h3 className={styles.titleSection}>{titulo}</h3>
        <div className={styles.Produtos}>
          {products.map((product) => (
            <div key={product.id} className={styles.product}>
              <Link
                to={`/produtos/pulseiras/${product.id}`}
                className={styles.ProdutoM}
              >
                <div className={styles.ProdutoMImagem}></div>
                <div className={styles.ProdutoMInfos}>
                  <p>{product.name}</p>
                  <p>{`R$ ${product.price}`}</p>
                </div>
              </Link>
              <div className={styles.modal}>
                <div className={styles.Functions}>
                  <button
                    onClick={() => product.id && removeProducts(product.id)}
                  >
                    -
                  </button>
                  <button onClick={() => product.id && addProducts(product.id)}>
                    +
                  </button>
                </div>
                <div className={styles.amount}>
                  <input
                    type="string"
                    name={`amount_${product.id}`}
                    value={amounts[product.id || 0]}
                    placeholder="0"
                    onChange={({ target }) =>
                      setAmounts((prevAmounts) => ({
                        ...prevAmounts,
                        [product.id || '']: parseInt(target.value),
                      }))
                    }
                  />
                  <button
                    onClick={() =>
                      addToCart(product.id || '', amounts[product.id || 0])
                    }
                  >
                    Adicionar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </CartProvider>
  );
};

export default ProdutosM;
