import React from 'react';
import { useState } from 'react';
import styles from './DogoSlider.module.css';
import imagen1 from "../../img/dogo1.gif"
import imagen2 from "../../img/dogo2.png"
import imagen3 from "../../img/dogo3.png"

function DogoSlider() {
  const slidesData = [
    {
      image: imagen1,
      caption: 'As its name indicates, the origin of the Dogo Argentino is linked to the province of Córdoba, located in this Latin American country. The popularity of the fights between canines in the year 1920 caused that the doctor Antonio Nores Martínez, began the search for a resistant and robust dog, representative of a good fight.',
    },
    {
      image: imagen2,
      caption: 'Argentines are very proud of everything that belongs to their culture, and above all, of their inventions and achievements. The Argentine bulldog is one of them, putting them at the same level of pride as the tango, the world cups, the mate or the pen.',
    },
    {
      image: imagen3,
      caption: 'Dont be intimidated by my appearance. I am very loyal and friendly. Remember that everything depends on how you take care of me and treat me',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const showSlide = (index) => {
    setCurrentIndex(index);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slidesData.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slidesData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className={styles.slider}>
      {slidesData.map((slide, index) => (
        <div
          className={`${styles.slide} ${
            index === currentIndex ? styles.active : ''
          }`}
          key={index}
        >
          <img src={slide.image} alt={`Imagen ${index + 1}`} />
          <div className={styles.caption}>{slide.caption}</div>
        </div>
      ))}
    <div className={styles['button-wrapper']}>
      <button onClick={prevSlide} className={styles.prev}></button>
      <button onClick={nextSlide} className={styles.next}></button>
      </div>
    </div>
  );
}

export default DogoSlider;
