import React, { useEffect, useState } from 'react';
import styles from './ProdutoG.module.css';
import {
  WhereFilterOp,
  collection,
  getDocs,
  query,
  where,
} from 'firebase/firestore';
import { db } from '../../FirebaseConfig';
import { Link } from 'react-router-dom';
import { CartProvider, useCart } from '../../contexts/CartContext';

interface Product {
  id: string | null;
  name: string | null;
  price: number | null;
  description: string | null;
  amount: number | null;
  categoria: string | null;
  desconto: number | null;
  [prop: string]: any;
}

interface ProdutosGProps {
  titulo: string;
  quantidade: number;
  buscaPor?: {
    docProp: string;
    op: WhereFilterOp;
    docQuery: string | number;
  };
}

const ProdutosG: React.FC<ProdutosGProps> = ({
  titulo,
  quantidade,
  buscaPor,
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
      const fetchedProducts: Product[] = [];
      if (buscaPor) {
        const querySnapshot = await getDocs(
          query(
            estoqueRef,
            where(buscaPor.docProp, buscaPor.op, buscaPor.docQuery),
          ),
        );
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          fetchedProducts.push({
            id: doc.id,
            name: data.nome || '',
            price: data.precoUnitario || 0,
            description: data.descricao || '',
            amount: data.quantidade,
            categoria: data.categoria,
            desconto: data.desconto,
          });
        });
        setProducts(fetchedProducts.slice(0, quantidade));
      } else {
        const querySnapshot = await getDocs(query(estoqueRef));
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          fetchedProducts.push({
            id: doc.id,
            name: data.nome || '',
            price: data.precoUnitario || 0,
            description: data.descricao || '',
            amount: data.quantidade,
            categoria: data.categoria,
            desconto: data.desconto,
          });
        });
        setProducts(fetchedProducts.slice(0, quantidade));
      }
    };

    fetchProducts();
  }, [quantidade, buscaPor]);

  return (
    <CartProvider>
      <div className={styles.Container}>
        <h3 className={styles.titleSection}>{titulo}</h3>
        <div className={styles.Produtos}>
          {products.map((product) => (
            <div key={product.id} className={styles.product}>
              <Link
                to={`/produtos/pulseiras/${product.id}`}
                className={styles.ProdutoG}
              >
                <div className={styles.ProdutoGImagem}></div>
                <div className={styles.ProdutoGInfos}>
                  <p>{product.name}</p>
                  {product.desconto && product.desconto > 0 ? (
                    <div className={styles.desconto}>
                      <p className={styles.priceOriginal}>
                        R$
                        {product.price &&
                          product.price -
                            (product.price * product.desconto) / 100}
                      </p>
                      <p className={styles.priceOff}>{`R$ ${product.price}`}</p>
                    </div>
                  ) : (
                    <p
                      className={styles.priceOriginal}
                    >{`R$ ${product.price}`}</p>
                  )}

                  {product.desconto && product.desconto > 0 ? (
                    <div className={styles.parcela}>
                      em até <b>3x</b> de{' '}
                      <b>
                        R${' '}
                        {product.desconto &&
                          product.price &&
                          parseFloat(
                            (
                              (product.price -
                                (product.price * product.desconto) / 100) /
                              3
                            ).toFixed(2),
                          )}
                      </b>
                    </div>
                  ) : (
                    <span className={styles.parcela}>
                      em até <b>3x</b> de{' '}
                      <b>
                        R$ {product.price && (product.price / 3).toFixed(2)}
                      </b>
                    </span>
                  )}
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

export default ProdutosG;
