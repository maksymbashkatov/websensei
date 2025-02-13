import type { Metadata, Viewport } from 'next';
import './globals.css';
import Footer from './components/footer';

export const metadata: Metadata = {
  title: 'Репетитор по программированию онлайн',
  description: 'Репетитор по программированию онлайн. Доступны как индивидуальные занятия по веб-программированию, так и менторинг. Создаём сайты с нуля для любых целей.',
  alternates: {
    canonical: `https://websensei.online`,
  },
  icons: [
    { rel: 'icon', url: '/favicon.ico' },
    { rel: 'icon', url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    { rel: 'icon', url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
    { rel: 'apple-touch-icon', url: '/apple-touch-icon.png', sizes: '180x180' }
  ],
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
  return (
    <html lang='ru'>
      <body>
        {children}
        <Footer/>
      </body>
    </html>
  );
}