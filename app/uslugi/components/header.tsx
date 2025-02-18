import styles from './header.module.css';
import Logo from '../../components/logo';
import Link from 'next/link';

export default function Header(
  { title, price}: { title: string, price: string }
) {
  return <header className={styles.header}>
    <div className={`${styles.headerContainer} container`}>
      <Logo className={styles.logo}/>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.price}>
        <p>Цена</p>
        <p>от {price}</p>
      </div>
      <div className={styles.todo}>
        <Link
          href='https://t.me/websensei_online'
          target='_blank'
          rel='nofollow noopener noreferrer'
          className={styles.button}
        ><p>Написать</p>
        </Link>
        <p>нам, чтобы обсудить цену и условия</p>
      </div>
    </div>
  </header>;
}