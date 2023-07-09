import React from 'react';
import { useState } from 'react';
import styles from './PoodleSlider.module.css';
import imagen1 from "../../img/poodleinfo1.png"
import imagen2 from "../../img/poodleinfo2.png"
import imagen3 from "../../img/poodleinfo3.png"

function GermanSlider() {
  const slidesData = [
    {
      image: imagen1,
      caption: 'The poodle is a breed of dog that until the fifteenth century was considered the exclusive use of aristocrats and nobles. It was a water retriever dog until the Renaissance: they retrieved already hunted prey that had fallen into the water, such as ducks and swans. Today they are frequently found in beauty dog ​​shows. There are four varieties: large, medium, dwarf and toy. Apart from the common poodle, there is also the Cordelé variety.',
    },
    {
      image: imagen2,
      caption: 'As we have already said, the poodle used to be a very exclusive and elegant breed. Little by little it stopped being so exclusive and even people with few resources were able to acquire a poodle. If we walk, for example, through some streets in Argentina, we can see many poodles, which are not given the necessary care, leaving the elegance and sophistication of this breed in the past.',
    },
    {
      image: imagen3,
      caption: 'Poodles can be an excellent company. They are very intelligent and expressive. They are easy to train and can be raised in various environments and small spaces. That makes them very adaptable. If you give them the necessary affection, they can become like faithful children and companions for you.',
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