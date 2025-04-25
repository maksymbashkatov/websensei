import type { Metadata, Viewport } from 'next';
import './globals.css';
import Footer from './components/footer';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Репетитор по программированию онлайн',
  description: 'Индивидуальные занятия по ключевым веб-технологиям: JavaScript, TypeScript, HTML, CSS и SQL. Обучение от профессионала с практическим опытом свыше восьми лет.',
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
      <head>
        <Script id='yandex-metrika' strategy='afterInteractive'>
          {`
            (function(m,e,t,r,i,k,a){
              m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j=0; j < document.scripts.length; j++) {
                if(document.scripts[j].src === r) { return; }
              }
              k=e.createElement(t), a=e.getElementsByTagName(t)[0];
              k.async=1; k.src=r; a.parentNode.insertBefore(k,a);
            })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

            ym(100014236, "init", {
                 clickmap:true,
                 trackLinks:true,
                 accurateTrackBounce:true
            });
          `}
        </Script>
        <noscript>
          <div>
            <img src='https://mc.yandex.ru/watch/100014236' style={{ position: 'absolute', left: '-9999px' }} alt='' />
          </div>
        </noscript>
      </head>
      <body>
        {children}
        <Footer/>
      </body>
    </html>
  );
}