import React from 'react';
import { ReactComponent as Whatsapp } from '../../Assets/icons/whatsappWhite.svg';
import { Link } from 'react-router-dom';
import styles from './ButtonWhatsapp.module.css';

const ButtonWhatsapp = () => {
  return (
    <Link
      target="_blank"
      to="https://wa.me/message/MHZETPHCJYARJ1"
      className={styles.Button}
    >
      <Whatsapp />
    </Link>
  );
};

export default ButtonWhatsapp;
