import React from 'react'
import styles from './Header.module.css'
import {ReactComponent as Logo} from '../Assets/images/Logo.svg'
import {ReactComponent as Search} from '../Assets/icons/search.svg'
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>
      <Logo/>
      <div className={styles.inputPesquisa}>
      <input type="text" placeholder='Olá, o que está procurando hoje?'/>
      <Search/>
      </div>
      </div>
      <div className={styles.headerRight}>
        
      </div>
    </header>
  )
}

export default Header