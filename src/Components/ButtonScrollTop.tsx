import React from 'react';
import { ReactComponent as ScrollTop } from '../Assets/icons/scrollTop.svg';
import styles from './ButtonScrollTop.module.css';

const ButtonScrollTop = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button onClick={scrollTop} className={styles.Button}>
      <ScrollTop />
    </button>
  );
};

export default ButtonScrollTop;
