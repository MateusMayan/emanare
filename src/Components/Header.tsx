import { useContext } from 'react';
import styles from './Header.module.css';
import { ReactComponent as Logo } from '../Assets/images/Logo.svg';
import { ReactComponent as Search } from '../Assets/icons/search.svg';
import { ReactComponent as PatchQuestion } from '../Assets/icons/patch-question.svg';
import { ReactComponent as Heart } from '../Assets/icons/suit-heart.svg';
import { ReactComponent as Account } from '../Assets/icons/single-neutral-actions.svg';
import { ReactComponent as BagSad } from '../Assets/icons/shopping-bag-sad.svg';
import { ReactComponent as BagSmile } from '../Assets/icons/shopping-bag-smile.svg';
import { UserContext } from '../contexts/UserContext';
import { Link } from 'react-router-dom';

const Header = () => {
  const { docId, uId, login, pedidos, amount } = useContext(UserContext);

  console.log(uId);
  console.log(docId);
  console.log(login);
  console.log(pedidos);
  console.log(amount);

  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        <Logo />
        <div className={styles.inputPesquisa}>
          <input type="text" placeholder="Olá, o que está procurando hoje?" />
          <Search />
        </div>
      </div>

      <nav className={styles.headerRight}>
        <div className={styles.headerRightItem}>
          <PatchQuestion />
          <p id={styles.atendimentos}>Atendimentos</p>
          <ul id={styles.infoAtendimento}>
            <li>Telefone:</li>
            <Link to="tel:+5571986479532">(71) 9740-6285</Link>
            <li>Whatsapp:</li>
            <Link to="https://wa.me/message/MHZETPHCJYARJ1" target="blank">
              (71) 9740-6285
            </Link>
            <li>E-mail:</li>
            <Link to="mailto:lojaemanarecristais@gmail.com">
              lojaemanarecristais@gmail.com
            </Link>
          </ul>
        </div>
        <div className={styles.headerRightItem}>
          <Heart />
          <p>Favoritos</p>
        </div>
        <div className={styles.headerRightItem}>
          <Account />
          <p id={styles.minhaConta}>Minha Conta</p>
          <ul id={styles.infoConta}>
            {login ? <li>Olá, {login.nome}</li> : <li>Olá, Visitante</li>}
            <Link to="/conta/pedidos/">Meus Pedidos</Link>
            <Link to="/conta/pedidos-modal">Acompanhar Pedido</Link>
            {login ? null : <Link to="/conta/login">Entrar</Link>}
            {login ? null : (
              <Link to="/conta/login">Novo aqui? Cadastre-se</Link>
            )}
          </ul>
        </div>
        <div className={styles.headerRightItem}>
          {amount && amount <= 0 ? <BagSad /> : <BagSmile />}
          <div className={styles.ellipse}>{amount}</div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
