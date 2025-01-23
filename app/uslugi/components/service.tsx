import Link from 'next/link';
import styles from './service.module.css';

export default function Service(
  { title, description, link }:
  { title: string, description: string, link: string }
) {
  return <div className={styles.service}>
    <h3>{title}</h3>
    <p>{description}</p>
    <Link className={styles.button} href={link}>
      <p>Подробнее об услуге</p>
      <p>Подробнее об услуге</p>
    </Link>
  </div>
}