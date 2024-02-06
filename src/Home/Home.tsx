import React from 'react';
import Carousel from './Carousel';

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
    <>
      <Carousel slides={slides} />
    </>
  );
};
export default Home;
