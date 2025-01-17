import styles from './contacts.module.css';
import Link from 'next/link';
import Telegram from './social-icons/telegram';
import WhatsApp from './social-icons/whatsapp';
import VKontakte from './social-icons/vkontakte';
import Facebook from './social-icons/facebook';

export default function Contacts() {
  return <section className={styles.contacts}>
    <div className={`${styles.contactsContainer} container`}>
      <h2>
        <span>Свяжитесь</span>
        <span>с нами прямо сейчас</span>
      </h2>
      <p>Хотите быстрее получить помощь в обучении или создании веб-проекта? Напишите нам в удобном для вас мессенджере, и наш менеджер оперативно свяжется с вами.</p>
      <div className={styles.socials}>
        <Link href={''}><Telegram fill={'#000'}/></Link>
        <Link href={''}><WhatsApp/></Link>
        <Link href={''}><VKontakte fill={'#000'}/></Link>
        <Link href={''}><Facebook fill={'#000'}/></Link>
      </div>
    </div>
  </section>
}