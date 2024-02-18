import React from 'react';
import styles from './Depoimentos.module.css';
import { ReactComponent as Heart } from '../Assets/icons/chat-heart 1.svg';

const Depoimentos = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.DepoimentosTitle}>
        <h3>
          Depoimentos <span> dos nossos clientes </span>{' '}
        </h3>
        <Heart />
      </div>
    </div>
  );
};

export default Depoimentos;
