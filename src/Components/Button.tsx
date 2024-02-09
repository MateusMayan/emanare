import React from 'react';
import styles from './Button.module.css';
const Button = (props: any) => {
  return (
    <button className={styles.button} {...props}>
      {props.children}
    </button>
  );
};

export default Button;
