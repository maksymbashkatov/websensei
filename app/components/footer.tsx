import Link from 'next/link';
import styles from './footer.module.css';
import { services, menu } from '../data';

export default function Footer() {
  return <footer>
    <div className={`${styles.footer} container section`}>
      <div className={`${styles.services} ${styles.nav}`}>
        <h3>Предоставляемые услуги</h3>
        {
          services.map((service) =>
            <Link href={`/uslugi/${service.slug}`} key={service.id}>{service.title}</Link>
          )
        }
      </div>
      <div className={`${styles.menu} ${styles.nav}`}>
        <h3 className={styles.h3S}>Меню</h3>
        {
          menu.map((item) =>
            <Link href={item.link} key={item.id}>{item.text}</Link>
          )
        }
      </div>
      <div className={styles.copyright}>
        <p>© 2025 websensei.online</p>
        <p>Все права защищены. Материалы данного сайта можно использовать только при указании ссылки на источник.</p>
      </div>
    </div>
  </footer>
}