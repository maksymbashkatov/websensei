import type { Metadata, Viewport } from 'next';
import './globals.css';
import Footer from './components/footer';

export const metadata: Metadata = {
  title: 'Репетитор по программированию онлайн',
  description: 'Репетитор по программированию онлайн. Доступны как индивидуальные занятия по веб-программированию, так и менторинг. Создаём сайты с нуля для любых целей.',
  other: {
    'yandex-verification': 'b84c98b2b82b3ada',
    'google-site-verification': '3Uq2zk1XUeAbOuwc87n4CoLHkJSI6_m7F8lX4-JZUOA'
  }
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'Репетитор по программированию онлайн',
    'description': 'Репетитор по программированию онлайн. Доступны как индивидуальные занятия по веб-программированию, так и менторинг. Создаём сайты с нуля для любых целей.'
  };

  return (
    <html lang='ru'>
      <head>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        {children}
        <Footer/>
      </body>
    </html>
  );
}