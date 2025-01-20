'use client';

import { useState } from 'react';
import styles from './reviews.module.css';
import ReviewsStatic from './reviews-static';

export default function Reviews() {
  const [activeIndex, setActiveIndex] = useState(2);

  const handleCircleClick = (index: number) => {
    setActiveIndex(index);
  };

  const calculateTransform = () => {
    const offset = 886 + 160;
    return `translateX(calc(${(2 - activeIndex) * offset}px))`;
  };
  
  return <section id='reviews' className={`${styles.reviews} section`}>
  <h2 className={styles.title}>Что говорят о нас клиенты?</h2>
  <div className={styles.reviewsContainer} style={{ transform: calculateTransform() }}>
    <ReviewsStatic
      activeIndex={activeIndex}
      activeReview={styles.activeReview}
      inactiveReview={styles.inactiveReview}
    />
  </div>
  <div className={styles.circlesContainer}>
    {
      [1, 2, 3].map((index) => <div
        key={index}
        className={
          `${styles.circle} ${activeIndex === index ? styles.activeCircle : ''}`
        }
        onClick={() => handleCircleClick(index)}
      ></div>)
    }
  </div>
</section>
}