import Link from 'next/link';
import styles from './article.module.css';

export default function Article(
  { src, alt, children }:
  { src: string, alt: string, children: React.ReactNode }
) {
  return <div className={styles.article}>
    <img
      src={src}
      alt={alt}
    />
    {children}
    <Link
      href='https://t.me/websensei_online'
      target='_blank'
      rel='nofollow noopener noreferrer'
      className={styles.button}
    >
      <p>Записаться на первый урок</p>
      <p>Записаться на первый урок</p>
    </Link>
  </div>;
}