import React from 'react';
import styles from './PromoBar.module.css';

const PromoBar = () => {
  return (
    <div className={styles.container}>
      <p className={styles.p}>
        CUPOM <b>PRIMEIRACOMPRA</b> PARA 10% OFF NO 1º PEDIDO
      </p>
    </div>
  );
};

export default PromoBar;
