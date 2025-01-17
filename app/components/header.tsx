import Link from 'next/link';
import styles from './header.module.css';
import { menu } from '../data';
import Telegram from './social-icons/telegram';
import WhatsApp from './social-icons/whatsapp';
import VKontakte from './social-icons/vkontakte';
import Facebook from './social-icons/facebook';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerTop}>
        <div className={`${styles.headerTopContainer} container`}>
          <Link className={styles.logo} href='/'>
            <p className={styles.p1}>web</p>
            <p className={styles.p2}>sensei</p>
            <p className={styles.p3}>.online</p>
          </Link>
          <nav className={styles.menu}>
            {
              menu.map((m) =>
              <Link className={styles.menuItem} href={m.link} key={m.id}>
                {m.text}
              </Link>)
            }
          </nav>
          <div className={styles.socials}>
            <Link href={''}><Telegram fill={'#262626'}/></Link>
            <Link href={''}><WhatsApp/></Link>
            <Link href={''}><VKontakte fill={'#262626'}/></Link>
            <Link href={''}><Facebook fill={'#262626'}/></Link>
          </div>
        </div>
      </div>
      <div className={styles.headerMain}>
        <div className={`${styles.headerMainContainer} container`}>
          <div className={styles.mainTitle}>
            <h1>
              <span className={styles.s1}>Репетитор и ментор</span>
              <span className={styles.s2}>по веб-программированию онлайн</span>
            </h1>
            <h2>Индивидуальные занятия и менторинг по веб-программированию. Научим программировать и создавать веб-проекты с нуля.</h2>
          </div>
          <Link className={styles.button} href=''>Хочу учиться</Link>
        </div>
      </div>
    </header>
  );
}