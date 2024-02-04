import React from 'react'
import { Link } from 'react-router-dom'
import styles from './NavBarProdutos.module.css'
const NavBarProdutos = () => {
  return (
    <nav style={{display:'flex', gap:'40px', justifyContent:'center'}}>
      <Link className={styles.Link} to='/produtos/lancamento'>Lançamentos</Link>
      <Link className={styles.Link} to='/produtos/signos'>Signos</Link>
      <Link className={styles.Link} to='/produtos/acessorios'>Acessórios</Link>
      <Link className={styles.Link} to='/produtos/kits'>Kits</Link>
      <Link className={styles.Link} to='/produtos/pedras-naturais'>Pedras Naturais</Link>
      <Link className={styles.Link} to='/produtos/o-que-deseja'>O que deseja?</Link>
    </nav>
  )
}

export default NavBarProdutos