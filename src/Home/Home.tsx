import React from 'react';
import Carousel from './Carousel';
import { ReactComponent as Crystal } from '../Assets/images/Cristais.svg';
import { ReactComponent as Truck } from '../Assets/images/Entrega Rápida.svg';
import { ReactComponent as Hands } from '../Assets/images/Cuidado Especial.svg';
import Diferencial from './Diferencial';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';
import ProdutosM from '../Components/ProductsComponents/ProdutosM';
import ProdutosG from '../Components/ProductsComponents/ProdutosG';
import Depoimentos from './Testimonials';

const Home = () => {
  const slides = [
    {
      backgroundUrl: `url(https://images.unsplash.com/photo-1616450121126-7c0b5e157524?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
      title: 'Frete Grátis',
      infos: [
        'Para Salvador - A partir de R$ 100',
        'Para Lauro De Freitas - A partir de R$ 150',
        'Outras localidades - A partir de R$ 200',
      ],
    },
    {
      backgroundUrl: `url(https://images.unsplash.com/photo-1597336465111-a392afd218bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
      title: 'Cupom de Desconto',
      infos: [
        'Utilize o cupom PRIMEIRACOMPRA',
        'para ter 10% de desconto na sua 1º compra',
      ],
    },
  ];

  return (
    <div className={styles.container}>
      <Carousel slides={slides} />
      <div className={styles.diferenciais}>
        <Diferencial
          style={{ width: '260px', height: '60px' }}
          titulo="Pedras Autênticas"
          descricao={`Cristais 100% naturais, sem queima ou tingimento`}
        >
          <Crystal />
        </Diferencial>

        <Diferencial
          style={{ width: '250px', height: '60px' }}
          titulo="Entrega Rápida"
          descricao={`Postagem realizada em até 48hrs`}
        >
          <Truck />
        </Diferencial>

        <Diferencial
          style={{ width: '350px', height: '60px' }}
          titulo="Cuidado Especial"
          descricao={`Selecionados com atenção especial para zelar pela sua energia de forma carinhosa.`}
        >
          <Hands />
        </Diferencial>
      </div>
      <div className={styles.itensMaisVendidos}>
        <Link to="/produtos/kits">Kits Energéticos</Link>
        <Link to="/produtos/acessorios/pulseiras">Pulseiras</Link>
        <Link to="/produtos/pedras-naturais">Pedras Naturais</Link>
      </div>
      <ProdutosM
        titulo="Destaques"
        quantidade={4}
        buscaPor={{ docProp: 'categoria', op: '==', docQuery: 'pulseira' }}
      />
      <ProdutosG
        titulo="Promoções"
        quantidade={10}
        buscaPor={{ docProp: 'desconto', op: '>=', docQuery: 0 }}
      />
      <Depoimentos />
    </div>
  );
};
export default Home;
