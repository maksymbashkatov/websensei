import Link from 'next/link';
import styles from './service.module.css';

export default function Service(
  { title, link }:
  { title: string, link: string }
) {
  return <div className={styles.service}>
    <h3>{title}</h3>
    <Link className={styles.button} href={link}>
      <p>Подробнее об услуге</p>
    </Link>
  </div>
}