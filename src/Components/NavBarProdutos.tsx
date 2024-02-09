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
          <Link className={styles.LinkSecundario} to="produtos/signos/aquario">
            Aquário
          </Link>
          <Link className={styles.LinkSecundario} to="produtos/signos/aries">
            Áries
          </Link>
          <Link className={styles.LinkSecundario} to="produtos/signos/cancer">
            Câncer
          </Link>
          <Link
            className={styles.LinkSecundario}
            to="produtos/signos/capricornio"
          >
            Capricórnio
          </Link>
          <Link
            className={styles.LinkSecundario}
            to="produtos/signos/escorpiao"
          >
            Escorpião
          </Link>
          <Link className={styles.LinkSecundario} to="produtos/signos/gemeos">
            Gêmeos
          </Link>
          <Link className={styles.LinkSecundario} to="produtos/signos/leao">
            Leão
          </Link>
          <Link className={styles.LinkSecundario} to="produtos/signos/libra">
            Libra
          </Link>
          <Link className={styles.LinkSecundario} to="produtos/signos/peixe">
            Peixe
          </Link>
          <Link
            className={styles.LinkSecundario}
            to="produtos/signos/sagitario"
          >
            Sagitário
          </Link>
          <Link className={styles.LinkSecundario} to="produtos/signos/touro">
            Touro
          </Link>
          <Link className={styles.LinkSecundario} to="produtos/signos/virgem">
            Virgem
          </Link>
        </ul>
      </div>

      <div id={styles.Acessorios}>
        <Link className={styles.Link} to="/produtos/acessorios">
          Acessórios
        </Link>
        <ul id={styles.infoAcessorios}>
          <Link
            className={styles.LinkSecundario}
            to="produtos/acessorios/aneis"
          >
            Anéis
          </Link>
          <Link
            className={styles.LinkSecundario}
            to="produtos/acessorios/braceletes"
          >
            Braceletes
          </Link>
          <Link
            className={styles.LinkSecundario}
            to="produtos/acessorios/brincos"
          >
            Brincos
          </Link>
          <Link
            className={styles.LinkSecundario}
            to="produtos/acessorios/chaveiros"
          >
            Chaveiros
          </Link>
          <Link
            className={styles.LinkSecundario}
            to="produtos/acessorios/chokers"
          >
            Chokers
          </Link>
          <Link
            className={styles.LinkSecundario}
            to="produtos/acessorios/colares"
          >
            Colares
          </Link>
          <Link
            className={styles.LinkSecundario}
            to="produtos/acessorios/correntes"
          >
            Correntes
          </Link>
          <Link
            className={styles.LinkSecundario}
            to="produtos/acessorios/pingentes"
          >
            Pingentes
          </Link>
          <Link
            className={styles.LinkSecundario}
            to="produtos/acessorios/pulseiras"
          >
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
            to="produtos/pedras-naturais/amazonita"
          >
            Amazonita
          </Link>
          <Link
            className={styles.LinkSecundario}
            to="produtos/pedras-naturais/ametista"
          >
            Ametista
          </Link>
          <Link
            className={styles.LinkSecundario}
            to="produtos/pedras-naturais/calcita"
          >
            Calcita
          </Link>
          <Link
            className={styles.LinkSecundario}
            to="produtos/pedras-naturais/citrino"
          >
            Citrino
          </Link>
          <Link
            className={styles.LinkSecundario}
            to="produtos/pedras-naturais/jaspe"
          >
            Jaspe
          </Link>
          <Link
            className={styles.LinkSecundario}
            to="produtos/pedras-naturais/olho-de-tigre"
          >
            Olho de Tigre
          </Link>
          <Link
            className={styles.LinkSecundario}
            to="produtos/pedras-naturais/onix"
          >
            Ônix
          </Link>
          <Link
            className={styles.LinkSecundario}
            to="produtos/pedras-naturais/pirita"
          >
            Pirita
          </Link>
          <Link
            className={styles.LinkSecundario}
            to="produtos/pedras-naturais/quartzo"
          >
            Quartzo
          </Link>
          <Link
            className={styles.LinkSecundario}
            to="produtos/pedras-naturais/selenita"
          >
            Selenita
          </Link>
          <Link
            className={styles.LinkSecundario}
            to="produtos/pedras-naturais/sodalita"
          >
            Sodalita
          </Link>
          <Link
            className={styles.LinkSecundario}
            to="produtos/pedras-naturais/turmalina"
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
            to="produtos/o-que-deseja/alegria-vitalidade"
          >
            Alegria E Vitalidade
          </Link>
          <Link
            className={styles.LinkSecundario}
            to="produtos/o-que-deseja/amor"
          >
            Amor
          </Link>
          <Link
            className={styles.LinkSecundario}
            to="produtos/o-que-deseja/calma-paz"
          >
            Calma e Paz / Ansiedade
          </Link>
          <Link
            className={styles.LinkSecundario}
            to="produtos/o-que-deseja/autoestima"
          >
            Autoestima
          </Link>
          <Link
            className={styles.LinkSecundario}
            to="produtos/o-que-deseja/estudo-trabalho"
          >
            Estudo e Trabalho
          </Link>
          <Link
            className={styles.LinkSecundario}
            to="produtos/o-que-deseja/forca-coragem"
          >
            Força e Coragem
          </Link>
          <Link
            className={styles.LinkSecundario}
            to="produtos/o-que-deseja/intuicao-fe-conexao"
          >
            Intuição, Fé e Conexão
          </Link>
          <Link
            className={styles.LinkSecundario}
            to="produtos/o-que-deseja/prosperidade"
          >
            Prosperidade
          </Link>
          <Link
            className={styles.LinkSecundario}
            to="produtos/o-que-deseja/protecao"
          >
            Proteção
          </Link>
          <Link
            className={styles.LinkSecundario}
            to="produtos/o-que-deseja/saude"
          >
            Saúde
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default NavBarProdutos;
