import Link from 'next/link';
import styles from './header.module.css';
import { menu } from '../data';
import Telegram from './social-icons/telegram';
import WhatsApp from './social-icons/whatsapp';
import VKontakte from './social-icons/vkontakte';
import Facebook from './social-icons/facebook';
import Logo from './logo';

export default function Header(
  { isMenuOpen, toggleMenu }: { isMenuOpen: boolean, toggleMenu: any }
) {
  return <header className={styles.header}>
    <div className={styles.headerTop}>
      <div className={`${styles.headerTopContainer} container`}>
        <Logo className={styles.logo}></Logo>
        <nav className={styles.menu}>
          {
            menu.map((m) =>
            <Link className={styles.menuItem} href={m.link} key={m.id}>
              {m.text}
            </Link>)
          }
        </nav>
        <div className={styles.socials}>
          <Link
            href='https://t.me/websensei_online'
            target='_blank'
            rel='nofollow noopener noreferrer'
          ><Telegram fill={'#262626'}/></Link>
          <Link href={''}><WhatsApp/></Link>
          <Link href={''}><VKontakte fill={'#262626'}/></Link>
          <Link href={''}><Facebook fill={'#262626'}/></Link>
        </div>
        <div className={styles.mobMenuButton} onClick={toggleMenu}>
          {
            [1, 2, 3].map((e) => <div
              key={e}
              className={`${styles.mobMenuLine} ${isMenuOpen ? styles.mobMenuLineOpen: ''}`}
            >
            </div>)
          }
        </div>
      </div>
    </div>
    <div className={styles.headerMain}>
      <div className={`${styles.headerMainContainer} container`}>
        <div className={styles.mainTitle}>
          <h1>
            <span className={styles.s1}>Репетитор и ментор</span>
            <span className={styles.s2}> по веб-программированию онлайн</span>
          </h1>
          <h2>Индивидуальные занятия и менторинг по веб-программированию. Научим программировать и создавать веб-проекты с нуля.</h2>
        </div>
        <Link
          className={styles.button}
          href='https://t.me/websensei_online'
          target='_blank'
          rel='nofollow noopener noreferrer'
        >Хочу учиться</Link>
      </div>
    </div>
    <div className={`${styles.mobMenu} ${isMenuOpen ? styles.mobMenuOpen : ''}`}>
      <div className={styles.mobMenuContent}>
        {
          menu.map((m) =>
          <Link className={styles.menuItem} href={m.link} key={m.id} onClick={toggleMenu}>
            {m.text}
          </Link>)
        }
      </div>
    </div>
  </header>;
}