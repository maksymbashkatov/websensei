import type { Metadata, Viewport } from 'next';
import './globals.css';
import Footer from './components/footer';

export const metadata: Metadata = {
  title: 'WebSensei APP',
  description: 'Test description',
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