import Header from '../components/header';
import type { Metadata } from 'next';
import styles from './page.module.css';
import { services } from '../../data';
import Service from '../components/service';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  return {
    title: service?.title,
  };
}

export default async function ServicePage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return <div>Услуга не найдена</div>;
  }

  return <>
    <Header title={service.title} price={service.price}/>
    <main className={`${styles.main} container section`}>
      {service.article}
      <aside className={styles.more}>
        <h2>Что ещё мы предлагаем</h2>
        {
          (services.filter((e) => e.slug !== slug)).map((service) => <Service
            key={service.id}
            title={service.title}
            description={service.description}
            link={service.slug}
          />)
        }
      </aside>
    </main>
  </>;
}