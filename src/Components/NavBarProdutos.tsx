import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBarProdutos.module.css';
const NavBarProdutos = () => {
  return (
    <nav
      style={{
        display: 'flex',
        gap: '40px',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Link className={styles.Link} to="/produtos/lancamento">
        Lançamentos
      </Link>

      <div id={styles.Signos}>
        <Link className={styles.Link} to="/produtos/signos">
          Signos
        </Link>
        <ul id={styles.infoSignos}>
          <Link className={styles.LinkSecundario} to="/signos/aquario">
            Aquário
          </Link>
          <Link className={styles.LinkSecundario} to="/signos/aries">
            Áries
          </Link>
          <Link className={styles.LinkSecundario} to="/signos/cancer">
            Câncer
          </Link>
          <Link className={styles.LinkSecundario} to="/signos/capricornio">
            Capricórnio
          </Link>
          <Link className={styles.LinkSecundario} to="/signos/escorpiao">
            Escorpião
          </Link>
          <Link className={styles.LinkSecundario} to="/signos/gemeos">
            Gêmeos
          </Link>
          <Link className={styles.LinkSecundario} to="/signos/leao">
            Leão
          </Link>
          <Link className={styles.LinkSecundario} to="/signos/libra">
            Libra
          </Link>
          <Link className={styles.LinkSecundario} to="/signos/peixe">
            Peixe
          </Link>
          <Link className={styles.LinkSecundario} to="/signos/sagitario">
            Sagitário
          </Link>
          <Link className={styles.LinkSecundario} to="/signos/touro">
            Touro
          </Link>
          <Link className={styles.LinkSecundario} to="/signos/virgem">
            Virgem
          </Link>
        </ul>
      </div>

      <div id={styles.Acessorios}>
        <Link className={styles.Link} to="/produtos/acessorios">
          Acessórios
        </Link>
        <ul id={styles.infoAcessorios}>
          <Link className={styles.LinkSecundario} to="/acessorios/aneis">
            Anéis
          </Link>
          <Link className={styles.LinkSecundario} to="/acessorios/braceletes">
            Braceletes
          </Link>
          <Link className={styles.LinkSecundario} to="/acessorios/brincos">
            Brincos
          </Link>
          <Link className={styles.LinkSecundario} to="/acessorios/chaveiros">
            Chaveiros
          </Link>
          <Link className={styles.LinkSecundario} to="/acessorios/chokers">
            Chokers
          </Link>
          <Link className={styles.LinkSecundario} to="/acessorios/colares">
            Colares
          </Link>
          <Link className={styles.LinkSecundario} to="/acessorios/correntes">
            Correntes
          </Link>
          <Link className={styles.LinkSecundario} to="/acessorios/pingentes">
            Pingentes
          </Link>
          <Link className={styles.LinkSecundario} to="/acessorios/pulseiras">
            Pulseiras
          </Link>
        </ul>
      </div>
      <Link className={styles.Link} to="/produtos/kits">
        Kits
      </Link>
      <div id={styles.PedrasNaturais}>
        <Link className={styles.Link} to="/produtos/pedras-naturais">
          Pedras Naturais
        </Link>
        <ul id={styles.infoPedrasNaturais}>
          <Link
            className={styles.LinkSecundario}
            to="/pedras-naturais/amazonita"
          >
            Amazonita
          </Link>
          <Link
            className={styles.LinkSecundario}
            to="/pedras-naturais/ametista"
          >
            Ametista
          </Link>
          <Link className={styles.LinkSecundario} to="/pedras-naturais/calcita">
            Calcita
          </Link>
          <Link className={styles.LinkSecundario} to="/pedras-naturais/citrino">
            Citrino
          </Link>
          <Link className={styles.LinkSecundario} to="/pedras-naturais/jaspe">
            Jaspe
          </Link>
          <Link
            className={styles.LinkSecundario}
            to="/pedras-naturais/olho-de-tigre"
          >
            Olho de Tigre
          </Link>
          <Link className={styles.LinkSecundario} to="/pedras-naturais/onix">
            Ônix
          </Link>
          <Link className={styles.LinkSecundario} to="/pedras-naturais/pirita">
            Pirita
          </Link>
          <Link className={styles.LinkSecundario} to="/pedras-naturais/quartzo">
            Quartzo
          </Link>
          <Link
            className={styles.LinkSecundario}
            to="/pedras-naturais/selenita"
          >
            Selenita
          </Link>
          <Link
            className={styles.LinkSecundario}
            to="/pedras-naturais/sodalita"
          >
            Sodalita
          </Link>
          <Link
            className={styles.LinkSecundario}
            to="/pedras-naturais/turmalina"
          >
            Turmalina
          </Link>
        </ul>
      </div>

      <div id={styles.OQueDeseja}>
        <Link className={styles.Link} to="/produtos/o-que-deseja">
          O que deseja?
        </Link>
        <ul id={styles.infoOQueDeseja}>
          <Link
            className={styles.LinkSecundario}
            to="/o-que-deseja/alegria-vitalidade"
          >
            Alegria E Vitalidade
          </Link>
          <Link className={styles.LinkSecundario} to="/o-que-deseja/amor">
            Amor
          </Link>
          <Link className={styles.LinkSecundario} to="/o-que-deseja/calma-paz">
            Calma e Paz / Ansiedade
          </Link>
          <Link className={styles.LinkSecundario} to="/o-que-deseja/autoestima">
            Autoestima
          </Link>
          <Link
            className={styles.LinkSecundario}
            to="/o-que-deseja/estudo-trabalho"
          >
            Estudo e Trabalho
          </Link>
          <Link
            className={styles.LinkSecundario}
            to="/o-que-deseja/forca-coragem"
          >
            Força e Coragem
          </Link>
          <Link
            className={styles.LinkSecundario}
            to="/o-que-deseja/intuicao-fe-conexao"
          >
            Intuição, Fé e Conexão
          </Link>
          <Link
            className={styles.LinkSecundario}
            to="/o-que-deseja/prosperidade"
          >
            Prosperidade
          </Link>
          <Link className={styles.LinkSecundario} to="/o-que-deseja/protecao">
            Proteção
          </Link>
          <Link className={styles.LinkSecundario} to="/o-que-deseja/saude">
            Saúde
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default NavBarProdutos;
