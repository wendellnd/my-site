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
  // suppressHydrationWarning: the script below adds `js` to this element before
  // React hydrates, so the server and client class lists intentionally differ.
  <html lang="en" className={inter.variable} suppressHydrationWarning>
    <head>
      {/* Marks the document as scripted before first paint, so the scroll
          reveals only hide their content when JS can reveal it again. */}
      <script
        dangerouslySetInnerHTML={{
          __html: "document.documentElement.classList.add('js')",
        }}
      />
    </head>
    <body>{children}</body>
  </html>
);

export default RootLayout;
