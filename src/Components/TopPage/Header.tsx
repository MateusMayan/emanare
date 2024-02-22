import styles from './Header.module.css';
import { ReactComponent as Logo } from '../../Assets/images/Logo.svg';
import { ReactComponent as Search } from '../../Assets/icons/search.svg';
import { ReactComponent as PatchQuestion } from '../../Assets/icons/patch-question.svg';
import { ReactComponent as Heart } from '../../Assets/icons/suit-heart.svg';
import { ReactComponent as Account } from '../../Assets/icons/single-neutral-actions.svg';
import { ReactComponent as BagSad } from '../../Assets/icons/shopping-bag-sad.svg';
import { ReactComponent as BagSmile } from '../../Assets/icons/shopping-bag-smile.svg';
import { useUser } from '../../contexts/UserContext';
import { Link } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';
import { useState } from 'react';
import Input from '../Input';
import useForm from '../../Hooks/useForm';

const Header = () => {
  const { cart } = useCart();
  const { docId, uId, login, pedidos } = useUser();
  const [inputPesquisa, setInputPesquisa] = useState(false);
  const pesquisa = useForm();
  console.log(uId);
  console.log(docId);
  console.log(login);
  console.log(pedidos);
  console.log(cart);

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        <Link to="/">
          <Logo className={styles.Logo} />
        </Link>
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
          {totalItems <= 0 ? <BagSad /> : <BagSmile />}
          <div className={styles.ellipse}>{totalItems}</div>
        </div>
      </nav>

      <nav className={styles.HeaderMobile}>
        <button
          className={styles.ButtonPesquisa}
          onClick={() => {
            setInputPesquisa(!inputPesquisa);
          }}
        />
      </nav>
      {inputPesquisa && (
        <div className={styles.inputPesquisaMobile}>
          <Input
            placeholder="O que está procurando?"
            type="text"
            name="pesquisa"
            {...pesquisa}
          />
        </div>
      )}
    </header>
  );
};

export default Header;
