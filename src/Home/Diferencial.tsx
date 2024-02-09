import React, { ReactNode } from 'react';
import styles from './Diferencial.module.css';

interface DiferencialProps {
  children: ReactNode;
  titulo: string;
  descricao: string;
  [prop: string]: any;
}

const Diferencial: React.FC<DiferencialProps> = ({
  children,
  titulo,
  descricao,
  ...props
}) => {
  return (
    <div {...props} className={styles.diferencial}>
      {children}
      <div className={styles.diferencialInfos}>
        <h3>{titulo}</h3>
        <p>{descricao}</p>
      </div>
    </div>
  );
};

export default Diferencial;
