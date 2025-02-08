import Header from '../components/header';
import type { Metadata } from 'next';
import styles from './page.module.css';
import { services } from '../../data';
import Service from '../components/service';

interface MyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: MyPageProps): Promise<Metadata> {
  const resolvedParams = Promise.resolve(params) as Promise<{ slug: string }>;
  const { slug } = await resolvedParams;
  const service = services.find((item) => item.slug === slug);
  return {
    title: service?.metaTitle,
    description: service?.metaDescription
  };
}

export default async function ServicePage({ params }: MyPageProps) {
  const resolvedParams = Promise.resolve(params) as Promise<{ slug: string }>;
  const { slug } = await resolvedParams;
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
            link={`/uslugi/${service.slug}`}
          />)
        }
      </aside>
    </main>
  </>;
}