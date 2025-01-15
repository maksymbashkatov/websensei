import Link from 'next/link';
import styles from './footer.module.css';

const services = [
  { id: 1, link: '', text: 'Репетитор по программированию' },
  { id: 2, link: '', text: 'Ментор по программированию' },
  { id: 3, link: '', text: 'Создание веб-проекта для студентов' },
  { id: 4, link: '', text: 'Создание веб-проекта для учеников' },
  { id: 5, link: '', text: 'Создание веб-проекта с нуля' }
];

const menu = [
  { id: 1, link: '', text: 'О нас' },
  { id: 2, link: '', text: 'Услуги' },
  { id: 3, link: '', text: 'Отзывы' },
  { id: 4, link: '', text: 'Контакты' }
];

export default function Footer() {
  return <footer>
    <div className={`${styles.footer} container section`}>
      <div className={`${styles.services} ${styles.nav}`}>
        <h3>Предоставляемые услуги</h3>
        {
          services.map((service) =>
            <Link href={service.link} key={service.id}>{service.text}</Link>
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