'use client';

import { useEffect, useState } from 'react';
import styles from './reviews.module.css';
import ReviewsStatic from './reviews-static';

export default function Reviews() {
  const [activeIndex, setActiveIndex] = useState(2);
  const [screenWidth, setScreenWidth] = useState(NaN);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
  }, [])

  const handleCircleClick = (index: number) => {
    setActiveIndex(index);
  };

  const calculateTransform = () => {
    let containerWidth;
    let gap;
    if (screenWidth > 1439) {
      containerWidth = 886;
      gap = 160;
    } else if (screenWidth > 540) {
      containerWidth = 797;
      gap = 144;
    } else {
      containerWidth = 370;
      gap = 72;
    }
    const offset = containerWidth + gap;
    return `translateX(calc(${(2 - activeIndex) * offset}px))`;
  };
  
  return <section id='reviews' className={`${styles.reviews} section`}>
    <h2 className={styles.title}>Что говорят обо мне клиенты?</h2>
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