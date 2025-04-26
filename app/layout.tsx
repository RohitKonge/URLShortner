import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'URL Shortener',
  description: 'ShortURL allows to shorten long links from Instagram, Facebook, YouTube, Twitter, LinkedIn, WhatsApp, TikTok, blogs and sites',
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="google-site-verification" content="29_3z6RLHHthRxoN5dUVYuHPtrmiV36cEmXty1LmqS0" />
        <meta name="google-adsense-account" content="ca-pub-9940124413364828">
      </head>
      <body className="bg-gray-100 min-h-screen">
        <main className="container mx-auto px-4 py-10">
          {children}
        </main>
      </body>
    </html>
  );
} 
