import type { Metadata, Viewport } from 'next';
import './globals.css';
import Footer from './components/footer';

export const metadata: Metadata = {
  title: 'Репетитор по программированию онлайн',
  description: 'Репетитор по программированию онлайн. Доступны как индивидуальные занятия по веб-программированию, так и менторинг. Создаём сайты с нуля для любых целей.',
  other: {
    'yandex-verification': 'b84c98b2b82b3ada',
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
  return (
    <html lang='ru'>
      <body>
        {children}
        <Footer/>
      </body>
    </html>
  );
}