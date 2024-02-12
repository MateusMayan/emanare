import React, { useEffect, useState } from 'react';
import styles from './ProdutoM.module.css';
import { collection, getDocs, query } from 'firebase/firestore';
import { db } from '../FirebaseConfig';
import { Link } from 'react-router-dom';

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
  const [products, setProducts] = useState<Product[]>([]);
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

      setProducts(fetchedProducts.slice(0, 4)); // Apenas os primeiros 4 produtos
      console.log(fetchedProducts);
    };

    fetchProducts();
  }, []);

  return (
    <div className={styles.Container}>
      <h3 className={styles.titleSection}>{titulo}</h3>
      <div className={styles.Produtos}>
        {products.map((product) => (
          <Link
            to={'/produtos/pulseiras/' + product.id}
            className={styles.ProdutoM}
          >
            <div className={styles.ProdutoMImagem}></div>
            <div className={styles.ProdutoMInfos}>
              <p>{product.name}</p>
              <p>{'R$ ' + product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProdutosM;
