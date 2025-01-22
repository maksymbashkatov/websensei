import styles from './header.module.css';
import Logo from '../../components/logo';
import Link from 'next/link';

export default function Header(
  { title, price}: { title: string, price: number }
) {
  return (
    <header className={styles.header}>
      <div className={`${styles.headerContainer} container`}>
        <Logo/>
        <div className={styles.info}>
          <h1 className={styles.title}>{title}</h1>
          <div className={styles.price}>
            <p>Цена</p>
            <p>от {price} RUB</p>
          </div>
          <Link href='' className={styles.button}>
            <p>Написать</p>
          </Link>
          <p>нам, чтобы обсудить цену и условия</p>
        </div>
      </div>
    </header>
  );
}