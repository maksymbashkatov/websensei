import styles from './logo.module.css';
import Link from 'next/link';

export default function Logo() {
  return <Link className={styles.logo} href='/'>
    <p className={styles.p1}>web</p>
    <p className={styles.p2}>sensei</p>
    <p className={styles.p3}>.online</p>
  </Link>
}