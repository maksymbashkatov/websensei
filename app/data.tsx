import styles from './uslugi/components/articles/article.module.css';
import MentorPoProgrammirovaniyu from './uslugi/components/articles/mentor-po-programmirovaniyu';
import RepetitorPoProgrammirovaniyu from './uslugi/components/articles/repetitor-po-programmirovaniyu';
import SozdanieVebProektaDlyaStudentov from './uslugi/components/articles/sozdanie-veb-proekta-dlya-studentov';
import SozdanieVebDroektaDlyaUchenikov from './uslugi/components/articles/sozdanie-veb-proekta-dlya-uchenikov';
import SozdanieVebProektaSNulya from './uslugi/components/articles/sozdanie-veb-proekta-s-nulya';

export const menu = [
  { id: 1, link: '#about-us', text: 'О нас' },
  { id: 2, link: '#services', text: 'Услуги' },
  { id: 3, link: '#reviews', text: 'Отзывы' },
  { id: 4, link: '#contacts', text: 'Контакты' }
]

export const prices = [
  { id: 1, price: 1200 },
  { id: 2, price: 7000 },
  { id: 3, price: 4000 },
  { id: 4, price: 6000 },
  { id: 5, price: 9000 }
]

function getPrice(id: number) {
  const price = prices.find((price) => price.id === id)?.price;
  return price ? price : 0;
}

export const services = [
  {
    id: 1,
    slug: 'repetitor-po-programmirovaniyu',
    metaTitle: 'Репетитор по веб-программированию онлайн – индивидуальные занятия',
    metaDescription: 'Хотите, чтобы ваш ребёнок стал программистом? Или вы студент, желающий карьеры в IT? Индивидуальное обучение – JavaScript, TypeScript, SQL, HTML и CSS.',
    title: 'Репетитор по программированию',
    description: 'Вы родитель и хотите, чтобы ваш ребёнок в будущем стал программистом? Вы студент или начинающий разработчик и вам нужен репетитор по веб-программированию? Поможем освоить ключевые веб-технологии с нуля, такие как JavaScript, TypeScript, SQL, HTML и CSS, с индивидуальным подходом, гибким графиком занятий и комфортным онлайн форматом. Наш опыт и профессионализм обеспечат эффективное и понятное обучение. Поможем решить любые задачи.',
    price: getPrice(1),
    article: <RepetitorPoProgrammirovaniyu styles={styles.article}/>
  },
  {
    id: 2,
    slug: 'mentor-po-programmirovaniyu',
    metaTitle: 'Ментор по веб-программированию онлайн – обучение с нуля',
    metaDescription: 'Персональное обучение ключевым веб-технологиям, от JavaScript до React. Индивидуальный план обучения, помощь и гибкие форматы менторства под ваши цели и бюджет.',
    title: 'Ментор по программированию',
    description: 'Нужен ментор по веб-программированию, который ускорит ваше развитие и поможет достичь желаемых результатов? Мы предлагаем вам персональное менторство по освоению ключевых веб-технологий, таких как JavaScript, TypeScript, SQL, HTML и CSS. Ментор поможет составить персональный план обучения и обеспечит поддержку на пути к конечному результату. Обсуждаются различные форматы менторства в зависимости от бюджета и целей.',
    price: getPrice(2),
    article: <MentorPoProgrammirovaniyu styles={styles.article}/>
  },
  {
    id: 3,
    slug: 'sozdanie-veb-proekta-dlya-studentov',
    metaTitle: 'Создание веб-проекта для студентов – скорая помощь в учёбе',
    metaDescription: 'Нужен сайт или веб-решение для контрольной, курсовой или диплома? Поможем качественным решением с использованием современных веб-технологий. Решаем SQL задачи.',
    title: 'Создание веб-проекта для студентов',
    description: 'Вы студент и вам нужно создать веб-проект, но не хватает знаний или времени на его реализацию? Обратитесь к нам за помощью в создании сайта для курсовой работы или диплома и мы гарантируем выполнение проекта в оговорённые сроки, с соблюдением всех требований к заданию. Реализуем проект в срок, гарантируя качество. Кроме того, разрабатываем и отдельные блоки сайта для сдачи контрольной или экзамена. Решаем задачи, связанные с веб-технологиями и базами данных.',
    price: getPrice(3),
    article: <SozdanieVebProektaDlyaStudentov styles={styles.article}></SozdanieVebProektaDlyaStudentov>
  },
  {
    id: 4,
    slug: 'sozdanie-veb-proekta-dlya-uchenikov',
    metaTitle: 'Создание веб-проекта для учеников – помощь репетитора онлайн',
    metaDescription: 'Помогаем школьникам IT-классов, а также просто юным программистам реализовывыть веб-проекты. Для заботливых родителей, поддерживающих развитие своих детей.',
    title: 'Создание веб-проекта для учеников',
    description: 'Хотите помочь вашему ребёнку сделать первые шаги в мире веб-разработки? Мы поможем создать учебный веб-проект, который вдохновит вашего ребёнка на освоение современных технологий и даст ему хороший старт в программировании. Поддержим как тех, кто уже выбрал IT-направление в школе, но сталкивается с трудностями, так и тех, кто хочет попробовать свои силы в программировании. Хотите вырастить перспективного веб-разработчика, тогда обращайтесь к нам!',
    price: getPrice(4),
    article: <SozdanieVebDroektaDlyaUchenikov styles={styles.article}/>
  },
  {
    id: 5,
    slug: 'sozdanie-veb-proekta-s-nulya',
    metaTitle: 'Создание веб-проекта с нуля – разработка сайта под ключ',
    metaDescription: 'Сайты под ключ: без шаблонов и конструкторов, с уникальным дизайном и кодом. SEO-оптимизация и современные технологии – TypeScript, React, Next.js и др.',
    title: 'Создание веб-проекта с нуля',
    description: 'Мы предлагаем создание сайта с нуля, разрабатывая дизайн под ваши индивидуальные требования. Применяем современные технологии и свежие подходы SEO оптимизации. Не используем конструкторы, каждая строка кода написана нашими программистами с нуля, что в свою очередь обеспечивает уникальность не только контента, но и кода, а значит улучшает SEO показатели. Разработаем сайт под ключ, будь то Landing Page, сайт визитка или другой веб-проект, в оговоренные сроки.',
    price: getPrice(5),
    article: <SozdanieVebProektaSNulya styles={styles.article}/>
  }
];