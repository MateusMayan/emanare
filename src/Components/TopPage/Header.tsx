import styles from './Header.module.css';
import { ReactComponent as Logo } from '../../Assets/images/Logo.svg';
import { ReactComponent as Search } from '../../Assets/icons/search.svg';
import { ReactComponent as PatchQuestion } from '../../Assets/icons/patch-question.svg';
import { ReactComponent as Heart } from '../../Assets/icons/suit-heart.svg';
import { ReactComponent as Account } from '../../Assets/icons/single-neutral-actions.svg';
import { ReactComponent as BagSad } from '../../Assets/icons/shopping-bag-sad.svg';
import { ReactComponent as BagSmile } from '../../Assets/icons/shopping-bag-smile.svg';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { useUser } from '../../contexts/UserContext';
import { Link } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';
import React, { useState } from 'react';
import Input from '../Input';
import useForm from '../../Hooks/useForm';
import { Drawer } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';

const Header = () => {
  const { cart } = useCart();
  const { docId, uId, setUId, login, pedidos, setLogin } = useUser();
  const [inputPesquisa, setInputPesquisa] = useState(false);
  const [menuHamburger, setMenuHamburger] = useState(false);
  const [accordion, setAccordion] = useState<string | false>(false);
  const pesquisa = useForm();
  console.log(uId);
  console.log(docId);
  console.log(login);
  console.log(pedidos);
  console.log(cart);

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  // Função do Accordion selecionado
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setAccordion(isExpanded ? panel : false);
    };

  return (
    <header className={styles.header}>
      <div className={styles.Drawer}>
        {
          <Drawer
            className={styles.Drawer}
            anchor="left"
            open={menuHamburger}
            onClose={() => setMenuHamburger(!menuHamburger)}
          >
            <Accordion
              className={styles.Accordion}
              expanded={accordion === 'panel1'}
              onChange={handleChange('panel1')}
            >
              <AccordionSummary className={styles.DrawerItemTitle}>
                Atendimento
              </AccordionSummary>
              <AccordionDetails>
                <ul className={styles.infoItemDrawer}>
                  <Link to="tel:+5571986479532">
                    <li>Telefone:</li>
                    (71) 9740-6285
                  </Link>

                  <Link
                    to="https://wa.me/message/MHZETPHCJYARJ1"
                    target="blank"
                  >
                    <li>Whatsapp:</li>
                    (71) 9740-6285
                  </Link>

                  <Link to="mailto:lojaemanarecristais@gmail.com">
                    <li>E-mail:</li>
                    lojaemanarecristais@gmail.com
                  </Link>
                </ul>
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={accordion === 'panel2'}
              onChange={handleChange('panel2')}
              className={styles.Accordion}
            >
              <AccordionSummary className={styles.DrawerItemTitle}>
                Minha Conta
              </AccordionSummary>
              <AccordionDetails>
                <ul className={styles.infoItemDrawer}>
                  {login ? (
                    <li style={{ fontWeight: 600 }}>Olá, {login.nome}</li>
                  ) : (
                    <li>Olá, Visitante</li>
                  )}
                  <Link
                    to="/conta/pedidos/"
                    onClick={() => {
                      setMenuHamburger(false);
                    }}
                  >
                    Meus Pedidos
                  </Link>

                  <Link
                    to="/account/pedidos-modal"
                    onClick={() => {
                      setMenuHamburger(false);
                    }}
                  >
                    Acompanhar Pedido
                  </Link>

                  {login ? null : <Link to="/account/login">Entrar</Link>}
                  {login ? null : (
                    <Link
                      style={{ textDecoration: 'underline' }}
                      to="/account/login"
                      onClick={() => setMenuHamburger(false)}
                    >
                      Novo aqui? Cadastre-se
                    </Link>
                  )}
                  {login && setLogin && setUId ? (
                    <li
                      onClick={() => {
                        setLogin(null);
                        setUId(null);
                        setMenuHamburger(false);
                      }}
                    >
                      Sair
                    </li>
                  ) : null}
                </ul>
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={accordion === 'panel3'}
              onChange={handleChange('panel3')}
              className={styles.Accordion}
            >
              <AccordionSummary className={styles.DrawerItemTitle}>
                Produtos
              </AccordionSummary>
              <AccordionDetails>
                <ul className={styles.infoItemDrawer}>
                  <Link
                    className={styles.Link}
                    to="/produtos/lancamento"
                    onClick={() => setMenuHamburger(false)}
                  >
                    Lançamentos
                  </Link>
                  <Link
                    className={styles.Link}
                    to="/produtos/signos"
                    onClick={() => setMenuHamburger(false)}
                  >
                    Signos
                  </Link>
                  <Link
                    className={styles.Link}
                    to="/produtos/acessorios"
                    onClick={() => setMenuHamburger(false)}
                  >
                    Acessórios
                  </Link>
                  <Link
                    className={styles.Link}
                    to="/produtos/kits"
                    onClick={() => setMenuHamburger(false)}
                  >
                    Kits
                  </Link>
                  <Link
                    className={styles.Link}
                    to="/produtos/pedras-naturais"
                    onClick={() => setMenuHamburger(false)}
                  >
                    Pedras Naturais
                  </Link>
                  <Link
                    className={styles.Link}
                    to="/produtos/o-que-deseja"
                    onClick={() => setMenuHamburger(false)}
                  >
                    O que deseja?
                  </Link>
                </ul>
              </AccordionDetails>
            </Accordion>
          </Drawer>
        }
      </div>
      <div className={styles.headerLeft}>
        {/* Menu Hamburguer Mobile */}
        <button
          className={styles.MenuHamburger}
          onClick={() => {
            setMenuHamburger(!menuHamburger);
          }}
        >
          <MenuRoundedIcon />
        </button>
        {/* Logo e inputPesquisa */}
        <Link to="/">
          <Logo className={styles.Logo} />
        </Link>
        <div className={styles.inputPesquisa}>
          <input type="text" placeholder="Olá, o que está procurando hoje?" />
          <Search />
        </div>
      </div>

      {/* Informações versão Desk e Tablet */}
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
            {login ? (
              <>
                <Link to="/account/pedidos/">Meus Pedidos</Link>
                <Link to="/account/pedidos-modal">Acompanhar Pedido</Link>
                <button
                  onClick={() => {
                    if (setLogin && setUId) {
                      setLogin(null);
                      setUId(null);
                    }
                  }}
                >
                  Sair
                </button>
              </>
            ) : null}

            {login ? null : (
              <>
                <Link to="/account/login">Entrar</Link>
                <Link to="/account/register/">Novo aqui? Cadastre-se</Link>
              </>
            )}
          </ul>
        </div>
        <div className={styles.headerRightItem}>
          {totalItems <= 0 ? <BagSad /> : <BagSmile />}
          <div className={styles.ellipse}>{totalItems}</div>
        </div>
      </nav>

      <button
        className={styles.ButtonPesquisa}
        onClick={() => {
          setInputPesquisa(!inputPesquisa);
        }}
      />
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
