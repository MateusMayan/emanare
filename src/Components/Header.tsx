import { useContext, useState} from 'react'
import styles from './Header.module.css'
import {ReactComponent as Logo} from '../Assets/images/Logo.svg'
import {ReactComponent as Search} from '../Assets/icons/search.svg'
import {ReactComponent as PatchQuestion} from '../Assets/icons/patch-question.svg'
import {ReactComponent as Heart} from '../Assets/icons/suit-heart.svg'
import {ReactComponent as Account} from '../Assets/icons/single-neutral-actions.svg'
import {ReactComponent as BagSad} from '../Assets/icons/shopping-bag-sad.svg'
import {ReactComponent as BagSmile} from '../Assets/icons/shopping-bag-smile.svg'
import { UserContext } from '../UserContext'


const Header = () => {
  const {docId, uId, login, pedidos, quantidade, loading, error} = useContext(UserContext) 
 
   console.log(uId)
   console.log(docId)
   console.log(login)
   console.log(pedidos)
   console.log(quantidade)
   
   return (
    
    <header className={styles.header}>
      <div className={styles.headerLeft}>
      <Logo/>
      <div className={styles.inputPesquisa}>
      <input type="text" placeholder='Olá, o que está procurando hoje?'/>
      <Search/>
      </div>
      </div>

      <nav className={styles.headerRight}>
      <div className={styles.headerRightItem}>
        <PatchQuestion/>
        <p id={styles.atendimentos}>Atendimentos</p>
          <ul id={styles.infoAtendimento}>
            <li>Telefone:</li>
            <li>(71) 98647-9532</li>
            <li>Whatsapp:</li>
            <li>(71) 98647-9532</li>
            <li>E-mail:</li>
            <li>emanare@gmail.com</li>
          </ul>
      </div>     
      <div className={styles.headerRightItem}>
        <Heart/>
        <p>Favoritos</p>
      </div>    
      <div className={styles.headerRightItem}>
        <Account/>
        <p id={styles.minhaConta}>Minha Conta</p>
        <ul id={styles.infoConta}>
            { login ? <li>Olá, {login.nome}</li> : <li>Olá, Visitante</li>}
            <li>Meus Pedidos</li>
            <li>Acompanhar Pedido</li>
            <li>Entrar</li>
            <li>Novo Aqui? <span>Cadastre-se</span></li>
          </ul>
      </div>    
      <div className={styles.headerRightItem}>
        {quantidade <= 0 ? <BagSad/> : <BagSmile/>}
        <div className={styles.ellipse}>{quantidade}</div>
      </div>         
      </nav>
    </header>
  )
}

export default Header