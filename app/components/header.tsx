import Link from 'next/link';
import styles from './header.module.css';
import Telegram from './social-icons/telegram';
import WhatsApp from './social-icons/whatsapp';
import VKontakte from './social-icons/vkontakte';
import Facebook from './social-icons/facebook';

const menu = [
  {id: 1, link: '', text: 'О нас'},
  {id: 2, link: '', text: 'Услуги'},
  {id: 3, link: '', text: 'Отзывы'},
  {id: 4, link: '', text: 'Контакты'}
]

const socials = [
  {
    id: 1,
    link: 'Telegram',
    icon: <Telegram telegramIconStyle={styles.telegramIcon}></Telegram>,
  },
  {
    id: 2,
    link: 'WhatsApp',
    icon: <WhatsApp whatsappIconStyle={styles.whatsappIcon}></WhatsApp>,
  },
  {
    id: 3,
    link: 'ВКонтакте',
    icon: <VKontakte
            vkontakteIconStyle={styles.vkontakteIcon}
            vkontakteIconBackStyle={styles.vkontakteIconBack}
          />,
  },
  {
    id: 4,
    link: 'Facebook',
    icon: <Facebook
            facebookIconStyle={styles.facebookIcon}
            facebookIconBackStyle={styles.facebookIconBack}
          />,
  }
];

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
            {
              socials.map((social) =>
              <Link href={social.link} key={social.id}>
                {social.icon}
              </Link>
              )
            }
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