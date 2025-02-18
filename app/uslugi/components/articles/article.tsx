import styles from './article.module.css';

export default function Article({ children }: { children: React.ReactNode } ) {
  return <div className={styles.article}>{children}</div>;
}