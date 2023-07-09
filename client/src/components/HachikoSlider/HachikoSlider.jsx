import React from 'react';
import { useState } from 'react';
import styles from './HachikoSlider.module.css';
import imagen1 from "../../img/hachikoinfo11.png"
import imagen2 from "../../img/hachikoinfo2.png"
import imagen3 from "../../img/hachikoinfo3.gif"

function HachikoSlider() {
  const slidesData = [
    {
      image: imagen1,
      caption: 'Welcome to shibuya station. One of Japan`s unofficial landmarks, the Hachiko statue in Shibuya is a tribute to the loyal Akita dog who waited at Shibuya station every day for his owner, even after his death. In honor of him we also name this website',
    },
    {
      image: imagen2,
      caption: 'Hachiko was an Akita Inu dog born on a farm in 1923 and later adopted by Hidesaburo Ueno, a professor of agriculture at the University of Tokyo. The two fell into a daily routine: Ueno and Hachiko would walk together to the Shibuya train station, where Ueno would pet Hachiko goodbye before getting on the train to work. Hachiko, who also became known as Hachi, would then spend the day waiting for Ueno to come back. In the meantime, local shopkeepers and station workers would keep an eye on him and often give him treats while he held his vigil for Ueno. This routine continued for several years until one day, tragedy ensued. Ueno never came home from work, as he suffered a brain hemorrhage and died. Of course, Hachi had no idea about this, so the loyal dog continued to wait for his owner’s return. Every day like clockwork, when the train would appear, so would Hachi, searching for Ueno. Hachi’s fidelity earned him the nickname “the faithful dog.” Hachi never gave up hope and continued to wait for more than nine years for his owner to return. Finally, one morning, on March 8, 1935, Hachiko was found dead. It is believed that he died due to natural causes.',
    },
    {
      image: imagen3,
      caption: 'Hachi: A Dog`s Tale, released in August 2009, is an American movie starring actor Richard Gere, directed by Lasse Hallström, about Hachikō and his relationship with an American professor & his family following the same basic story, but a little different, for example Hachiko was a gift to professor Ueno, this part is entirely different in the American version.[40] The movie was filmed in Woonsocket, Rhode Island, primarily in and around the Woonsocket Depot Square area and also featured Joan Allen and Jason Alexander. The role of Hachi was played by three Akitas – Leyla, Chico and Forrest. Mark Harden describes how he and his team trained the three dogs in the book, "Animal Stars: Behind the Scenes with Your Favorite Animal Actors. After the movie was completed, Harden adopted Chico.',
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

export default HachikoSlider;
