import React from 'react';
import { useState } from 'react';
import styles from './GermanSlider.module.css';
import imagen1 from "../../img/germaninfo1.png"
import imagen2 from "../../img/germaninfo2.png"
import imagen3 from "../../img/germaninfo3.png"

function GermanSlider() {
  const slidesData = [
    {
      image: imagen1,
      caption: 'Generally considered dogkind`s finest all-purpose worker, the German Shepherd Dog is a large, agile, muscular dog of noble character and high intelligence. Loyal, confident, courageous, and steady, the German Shepherd is truly a dog lover`s delight. ',
    },
    {
      image: imagen2,
      caption: 'German shepherd dogs are among the most intelligent dogs in the world, making them easy to train and highly loyal and trustworthy. They are also powerful, formidable animals that are calm under pressure and not overly aggressive, making them the perfect police partner.Typically, police dogs need at least a year of training before they`re ready for deployment. With the average cost of a puppy used for police work as high as $2,500, along with the cost of a year’s worth of training, it can be an expensive undertaking. and this is another reason that German sheperd are the perfect dogs for the job, as they are adaptable and easily trainable.',
    },
    {
      image: imagen3,
      caption: 'German Shepherds can be a very good breed to take care of your home and family. They will not only protect your home from intruders and thieves, but also protect your children at all times, create a very solid and friendly bond with them. You can play with it and be sure that it will not hurt any member of your family, since they have a strong sense of recognition.',
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
