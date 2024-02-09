import React from 'react';
import Carousel from './Carousel';
import styles from './Home.module.css';
import { ReactComponent as Crystal } from '../Assets/images/Cristais.svg';
import { ReactComponent as Truck } from '../Assets/images/Entrega Rápida.svg';
import { ReactComponent as Hands } from '../Assets/images/Cuidado Especial.svg';

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
        <div className={styles.diferencial}>
          <Crystal className={styles.diferencialIcons} />
          <div className={styles.diferencialInfos}>
            <h3>Pedras Autênticas</h3>
            <p>
              Cristais 100% naturais,
              <br /> sem queima ou tingimento
            </p>
          </div>
        </div>

        <div className={styles.diferencial}>
          <Truck className={styles.diferencialIcons} />
          <div className={styles.diferencialInfos}>
            <h3>Entrega Rápida</h3>
            <p>
              Postagem realizada em <br /> até 48hrs
            </p>
          </div>
        </div>

        <div className={styles.diferencial}>
          <Hands className={styles.diferencialIcons} />
          <div className={styles.diferencialInfos}>
            <h3>Cuidado Especial</h3>
            <p>
              Selecionados com atenção especial para <br /> zelar pela sua
              energia de forma carinhosa.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
