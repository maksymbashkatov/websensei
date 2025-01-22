import RepetitorPoProgrammirovaniyu from '../components/articles/repetitor-po-programmirovaniyu';
import Header from '../components/header';
import type { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {};

const services = [
  {
    slug: 'repetitor-po-programmirovaniyu',
    title: 'Репетитор по программированию',
    price: 1200,
    article: <RepetitorPoProgrammirovaniyu/>
  },
  {
    slug: 'mentor-po-programmirovaniyu',
    title: 'Ментор по программированию',
    price: 1200,
    article: 'Описание услуги 2'
  },
  {
    slug: 'sozdanie-veb-proekta-dlya-studentov',
    title: 'Создание веб-проекта для студентов',
    price: 1200,
    article: 'Описание услуги 3'
  },
  {
    slug: 'sozdanie-veb-proekta-dlya-uchenikov',
    title: 'Создание веб-проекта для учеников',
    price: 1200,
    article: 'Описание услуги 3'
  },
  {
    slug: 'sozdanie-veb-proekta-s-nulya',
    title: 'Создание веб-проекта с нуля',
    price: 1200,
    article: 'Описание услуги 3'
  }
];

export default async function ServicePage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  metadata.title = service?.title;

  if (!service) {
    return <div>Услуга не найдена</div>;
  }

  return (<>
    <Header title={service.title} price={service.price}/>
    <main className={`${styles.main} container section`}>
      {service.article}
    </main>
  </>
  );
}