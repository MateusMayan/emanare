import React from 'react'
import styles from './Header.module.css'
import {ReactComponent as Logo} from '../Assets/images/Logo.svg'
import {ReactComponent as Search} from '../Assets/icons/search.svg'
import {ReactComponent as PatchQuestion} from '../Assets/icons/patch-question.svg'
import {ReactComponent as Heart} from '../Assets/icons/suit-heart.svg'
import {ReactComponent as Account} from '../Assets/icons/single-neutral-actions.svg'
import {ReactComponent as BagSad} from '../Assets/icons/shopping-bag-sad.svg'
import {ReactComponent as BagSmile} from '../Assets/icons/shopping-bag-smile.svg'


const Header = () => {
   const [carrinho, setCarrinho] = React.useState(0)

   function handleClick() {
    setCarrinho(carrinho + 1)
   }
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
        <p>Atendimentos</p>
      </div>     
      <div className={styles.headerRightItem}>
        <Heart/>
        <p>Favoritos</p>
      </div>    
      <div className={styles.headerRightItem}>
        <Account/>
        <p>Minha Conta</p>
      </div>    
      <div className={styles.headerRightItem}>
        {carrinho <= 0 ? <BagSad onClick={handleClick}/> : <BagSmile onClick={handleClick}/>}
        <div className={styles.ellipse}>{carrinho}</div>
      </div>         
      </nav>
    </header>
  )
}

export default Header