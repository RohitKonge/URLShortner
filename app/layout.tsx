import './globals.css';
import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  metadataBase: new URL('https://shorturl.press'),
  title: {
    default: 'ShortURL - Free URL Shortener | Short URLs & Link Shortener',
    template: '%s | ShortURL'
  },
  description: 'Free URL shortener to create perfect URLs for your business. ShortURL allows you to create and share branded links with custom domains at scale ✓ Professional ✓ Fast ✓ Secure',
  keywords: 'url shortener, link shortener, short url, shorten url, url shorter, link shorter, bitly alternative, tinyurl alternative',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://shorturl.press',
    siteName: 'ShortURL',
    title: 'ShortURL - Free URL Shortener | Short URLs & Link Shortener',
    description: 'Free URL shortener to create perfect URLs for your business. Create and share branded links with custom domains at scale.',
    images: [
      {
        url: 'https://shorturl.press/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ShortURL - URL Shortener'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ShortURL - Free URL Shortener | Short URLs & Link Shortener',
    description: 'Free URL shortener to create perfect URLs for your business. Create and share branded links with custom domains at scale.',
    images: ['https://shorturl.press/og-image.jpg'],
    creator: '@shorturl_press'
  },
  verification: {
    google: '29_3z6RLHHthRxoN5dUVYuHPtrmiV36cEmXty1LmqS0',
    other: {
      'facebook-domain-verification': '[your-facebook-verification-code]'
    }
  },
  alternates: {
    canonical: 'https://shorturl.press'
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
  },
  manifest: '/site.webmanifest',
  other: {
    'google-site-verification': '29_3z6RLHHthRxoN5dUVYuHPtrmiV36cEmXty1LmqS0',
    'google-adsense-account': 'ca-pub-5209063942780531',
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
        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "ShortURL",
              "url": "https://shorturl.press",
              "description": "Free URL shortener to create perfect URLs for your business. Create and share branded links with custom domains at scale.",
              "applicationCategory": "WebApplication",
              "operatingSystem": "All",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "creator": {
                "@type": "Organization",
                "name": "ShortURL",
                "url": "https://shorturl.press"
              }
            }
          `}
        </script>
      </head>
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
