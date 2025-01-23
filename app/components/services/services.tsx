import Service from './service';
import styles from './services.module.css';
import { services } from '../../data';

export default function Services() {
  return <section id='services' className={styles.services}>
    <div className={`${styles.servicesContainer} container`}>
      <h2 className={styles.title}>
        <span>Предоставляемые</span>
        <span>услуги</span>
      </h2>
      {
        services.map((service) => <Service
          key={service.id}
          id={service.id}
          title={service.title}
          description={service.description}
          link={`/uslugi/${service.slug}`}
      />)
      }
    </div>
  </section>
}