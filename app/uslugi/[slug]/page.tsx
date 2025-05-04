import Header from '../components/header';
import type { Metadata } from 'next';
import styles from './page.module.css';
import { services } from '../../data';
import Service from '../components/service';
import { headers } from 'next/headers';
import RepetitorPoProgrammirovaniyuJavaScript from '../components/articles/repetitor-po-programmirovaniyu-javascript';
import RepetitorPoProgrammirovaniyuTypeScript from '../components/articles/repetitor-po-programmirovaniyu-typescript';
import RepetitorPoVebVyorstke from '../components/articles/repetitor-po-veb-vyorstke';
import RepetitorPoProgrammirovaniyuSQL from '../components/articles/repetitor-po-programmirovaniyu-sql';
import MentorPoProgrammirovaniyu from '../components/articles/mentor-po-programmirovaniyu';
import SozdanieVebProektaDlyaUchyoby from '../components/articles/sozdanie-veb-proekta-dlya-uchyoby';

async function getCountry() {
  const headersList = await headers();
  const ip = headersList.get('x-real-ip') || '';
  if (!ip) {
    return 'RU';
  }

  const response = await fetch(
    `https://ipinfo.io/${ip}?token=060430e67a21e3`,
    { next: { revalidate: 604800 } }
  );

  if (!response.ok) {
    return 'RU';
  } else {
    const country = (await response.json()).country;
    return country ? country : 'RU';
  }
}

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
    description: service?.metaDescription,
    alternates: {
      canonical: `https://websensei.online/uslugi/${service?.slug}`,
    }
  };
}

export default async function ServicePage({ params }: MyPageProps) {
  const resolvedParams = Promise.resolve(params) as Promise<{ slug: string }>;
  const { slug } = await resolvedParams;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return <div>Услуга не найдена</div>;
  }

  const country = await getCountry();
  let price: number | string = service.price;
  let cost = price / 80;
  let currency = 'EUR';

  if (country === 'RU') {
    cost = price;
    currency = 'RUB';
  } else if (country === 'BY') {
    cost = price / 30;
    currency = 'BYN';
  } else if (country === 'US') {
    cost = price / 75;
    currency = 'USD';
  }

  price = `${Math.round(cost)} ${currency}`;

  return <>
    <Header title={service.title} price={price}/>
    <main className={`${styles.main} container section`}>
      {
        service.id === 1 ? <RepetitorPoProgrammirovaniyuJavaScript price={price}/> :
        service.id === 2 ? <RepetitorPoProgrammirovaniyuTypeScript price={price}/> :
        service.id === 3 ? <RepetitorPoVebVyorstke price={price}/> :
        service.id === 4 ? <RepetitorPoProgrammirovaniyuSQL price={price}/> :
        service.id === 5 ? <MentorPoProgrammirovaniyu price={price}/> :
        <SozdanieVebProektaDlyaUchyoby price={price}/>
      }
      <aside className={styles.more}>
        <h2>Ещё услуги для вас</h2>
        {
          (services.filter((e) => e.slug !== slug)).map((service) => <Service
            key={service.id}
            title={service.title}
            link={`/uslugi/${service.slug}`}
          />)
        }
      </aside>
    </main>
  </>;
}