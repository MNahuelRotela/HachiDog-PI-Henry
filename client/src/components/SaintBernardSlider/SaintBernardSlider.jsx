import React from 'react';
import { useState } from 'react';
import styles from './SaintBernardSlider.module.css';
import imagen1 from "../../img/saintbernardinfo1.png"
import imagen2 from "../../img/saintbernardinfo2.png"
import imagen3 from "../../img/saintbernardinfo3.png"

function GermanSlider() {
  const slidesData = [
    {
      image: imagen1,
      caption: 'Calm and easygoing, the Saint Bernard is a low-energy dog and a slow mover. It learns quickly but tends to respond methodically. The Saint is very affectionate and demonstrative toward family and fairly friendly toward strangers. It is generally good with other household pets, canine or feline, but it may not interact well with unfamiliar dogs.',
    },
    {
      image: imagen2,
      caption: 'In the year 1050, at a snowy pass within the Alps, a monk named Bernard of Menthon (later canonized) established a hospice to aid pilgrims journeying to Rome. At 8,000 feet above sea level, with drifts as high as 40 feet, crossing the pass was treacherous. Over several centuries the hospice monks developed powerful working dogs able to locate and rescue luckless travelers buried by drifts and avalanches.',
    },
    {
      image: imagen3,
      caption: 'In 1992, the iconic movie "Beethoven" was released, which tells the story of an average family that acquires a Saint Bernard dog. This movie marked a precedent for the Saint Bernard breed, since with the great popularity of the movie, everyone wanted a "Beethoven" dog. People start calling the Saint Bernard breed "Beethoven".',
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

export default GermanSlider;