import styles from './contacts.module.css';
import { socials } from '../data';
import Link from 'next/link';

export default function Contacts() {
  return <section className={styles.contacts}>
    <div className={`${styles.contactsContainer} container`}>
      <h2>
        <span>Свяжитесь</span>
        <span>с нами прямо сейчас</span>
      </h2>
      <p>Хотите быстрее получить помощь в обучении или создании веб-проекта? Напишите нам в удобном для вас мессенджере, и наш менеджер оперативно свяжется с вами.</p>
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
  </section>
}