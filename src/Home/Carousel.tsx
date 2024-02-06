import React, { useState, useEffect } from 'react';
import styles from './Carousel.module.css';
import { ReactComponent as SetaEsquerda } from '../Assets/icons/arrow-left.svg';
import { ReactComponent as SetaDireita } from '../Assets/icons/arrow-right.svg';

interface Slide {
  title: string;
  backgroundUrl: string;
  infos: string[];
}

interface CarouselProps {
  slides: Slide[];
  interval?: number;
}

const Carousel: React.FC<CarouselProps> = ({ slides, interval = 3000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, interval);

    return () => clearInterval(intervalId);
  }, [slides.length, interval, currentSlide]);

  const setPreviewSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length,
    );
  };

  const setNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  return (
    <div className={styles.carousel}>
      <div className={styles.bg}></div>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={index === currentSlide ? styles.slideActive : styles.slide}
          style={{
            backgroundImage: `${slide.backgroundUrl}`,
          }}
        >
          <div className={styles.slideContent}>
            <h2 className={styles.title}>{slide.title}</h2>
            <ul>
              {slide.infos.map((info, i) => (
                <li className={styles.titleH3} key={i}>
                  {info}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
      <div className={styles.buttons}>
        <button onClick={setPreviewSlide}>
          <SetaEsquerda />
        </button>
        <button onClick={setNextSlide}>
          <SetaDireita />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
