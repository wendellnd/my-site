import { Inter } from 'next/font/google';
import { NAME } from '@/lib/content';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata = {
  title: `${NAME} — Software Engineer`,
  description:
    'Mid-level developer at Consumidor Positivo, focused on backend: GoLang, AWS, Serverless and Kubernetes.',
  icons: { icon: '/favicon.ico' },
  openGraph: {
    title: `${NAME} — Software Engineer`,
    description:
      'Mid-level developer at Consumidor Positivo, focused on backend: GoLang, AWS, Serverless and Kubernetes.',
    type: 'website',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#161826',
};

const RootLayout = ({ children }) => (
  <html lang="en" className={inter.variable}>
    <body>{children}</body>
  </html>
);

export default RootLayout;
