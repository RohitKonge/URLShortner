import './globals.css';
import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'URL Shortener',
  description: 'ShortURL allows to shorten long links from Instagram, Facebook, YouTube, Twitter, LinkedIn, WhatsApp, TikTok, blogs and sites',
  icons: {
    icon: '/favicon.svg',
  },
  other: {
    'google-site-verification': '29_3z6RLHHthRxoN5dUVYuHPtrmiV36cEmXty1LmqS0',
    'google-adsense-account': 'ca-pub-9940124413364828',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 min-h-screen">
        {/* Google Tag Manager Scripts */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-N2W53PV8BD"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-N2W53PV8BD');
          `}
        </Script>

        <main className="container mx-auto px-4 py-10">
          {children}
        </main>
      </body>
    </html>
  );
}
