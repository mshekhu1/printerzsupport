import { Inter, Poppins } from 'next/font/google';
import Script from 'next/script';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals/index.css';
import '../styles/globals/App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { PHONE_DISPLAY } from '../lib/constants/phone';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://www.printerzsupport.com'),
  title: {
    default: 'HP® Printer Support | Customer Service & Technical Support',
    template: '%s | HP® Printer Support'
  },
  description: 'Expert HP printer support with 24/7 customer service, customer support, and technical support for LaserJet, OfficeJet, DeskJet, and Envy. Fix offline errors, jams, drivers, WiFi, and print quality.',
  keywords: ['HP printer support', 'HP printer customer service', 'HP printer customer support', 'HP printer technical support', 'HP Printer Support', 'HP printer support number', 'HP Printer Setup', 'HP Printer Installation', 'HP LaserJet support', 'HP OfficeJet support'],
  authors: [{ name: 'HP Printer Support' }],
  creator: 'HP Printer Support',
  publisher: 'HP Printer Support',
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
    url: 'https://www.printerzsupport.com',
    siteName: 'HP Printer Support',
    title: 'HP Printer Support | Customer Service & Technical Support',
    description: 'HP printer support with expert customer service, customer support, and technical support. Remote help for setup, installation, and troubleshooting.',
    images: [
      {
        url: '/hero-printer.svg',
        width: 1200,
        height: 630,
        alt: 'HP printer support, customer service, and technical support',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HP Printer Support | Customer Service & Technical Support',
    description: 'HP printer support with expert customer service, customer support, and technical support.',
    images: ['/hero-printer.svg'],
  },
  alternates: {
    canonical: 'https://www.printerzsupport.com',
  },
  verification: {
    // Add your verification codes here when available
  },
  category: 'Technology',
  classification: 'Business',
  other: {
    'phone': PHONE_DISPLAY,
    'geo.region': 'US',
    'geo.placename': 'United States',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18054373796"
          strategy="afterInteractive"
        />
        <Script id="google-ads-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18054373796');
          `}
        </Script>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
        <meta name="theme-color" content="#667eea" />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WJ2NDBZ7"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <div className="App">
          <Navbar />
          <main>{children}</main>
          <Footer style={{ marginTop: '40px' }} />
        </div>
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js"
          strategy="lazyOnload"
        />
        {/* Tawk.to Script */}
        <Script
          id="tawk.to"
          strategy="afterInteractive"
        >
          {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/694aadb763e83a197f4510d8/1jd5rd5e4';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
            })();
          `}
        </Script>
      </body>
    </html>
  );
}

