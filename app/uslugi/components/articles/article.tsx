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
  </div>;
}