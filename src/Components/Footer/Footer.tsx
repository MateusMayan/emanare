import React from 'react';
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';
import { ReactComponent as Phone } from '../../Assets/icons/phone.svg';
import { ReactComponent as Whatsapp } from '../../Assets/icons/whatsapp.svg';
import { ReactComponent as Letter } from '../../Assets/icons/envelope.svg';
import { ReactComponent as Instagram } from '../../Assets/icons/instagram36.svg';
const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div className={styles.FooterItem}>
        <h4>CATEGORIAS</h4>
        <Link className={styles.Link} to="/produtos/lancamento">
          Lançamentos
        </Link>
        <Link className={styles.Link} to="/produtos/signos">
          Signos
        </Link>
        <Link className={styles.Link} to="/produtos/acessorios">
          Acessórios
        </Link>
        <Link className={styles.Link} to="/produtos/kits">
          Kits
        </Link>

        <Link className={styles.Link} to="/produtos/o-que-deseja">
          O que deseja?
        </Link>
      </div>
      <div className={styles.FooterItem}>
        <h4>INSTITUCIONAL</h4>
        <Link to="/fale-conosco">Fale Conosco</Link>
        <Link to="/frete-gratis">Frete Grátis </Link>
        <Link to="/politica-entrega">Política de Entrega</Link>
        <Link to="/politica-privacidade">Política de Privacidade</Link>
        <Link to="/politica-devolucoes-trocas">
          Política de Devoluções e Trocas
        </Link>
        <Link to="/sobre-nos">Sobre nós</Link>
      </div>
      <div className={styles.FooterItem}>
        <h4>ATENDIMENTO</h4>
        <div className={styles.DoubleItem}>
          <li>
            <Phone />
          </li>
          <Link to="tel:+5571986479532">(71) 9740-6285</Link>
        </div>
        <div className={styles.DoubleItem}>
          <li>
            <Whatsapp />
          </li>
          <Link to="https://wa.me/message/MHZETPHCJYARJ1" target="blank">
            (71) 9740-6285
          </Link>
        </div>
        <div className={styles.DoubleItem}>
          <li>
            <Letter />
          </li>
          <Link to="mailto:lojaemanarecristais@gmail.com">
            lojaemanarecristais@gmail.com
          </Link>
        </div>
      </div>
      <div className={styles.FooterItem}>
        <h4>NOSSO INSTAGRAM</h4>
        <div className={styles.DoubleItem}>
          <li>
            <Instagram />
          </li>
          <Link to="https://www.instagram.com/emanaree/">@emanaree</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
