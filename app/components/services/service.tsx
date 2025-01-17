import Link from 'next/link';
import styles from './service.module.css';

export default function Service(
  { id, title, content }:
  { id: string, title: string, content: string }
) {
  return <div className={styles.service}>
    <p>0{id}</p>
    <h3>{title}</h3>
    <p>{content}</p>
    <Link className={styles.button} href={''}>
      <p>Подробнее об услуге</p>
      <p>Подробнее об услуге</p>
    </Link>
  </div>
}