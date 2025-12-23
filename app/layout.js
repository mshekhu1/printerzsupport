import { Inter, Poppins } from 'next/font/google';
import Script from 'next/script';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/index.css';
import '../src/App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

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
    default: 'Printer Support - Expert Help for All Major Printer Brands | 24/7 Support',
    template: '%s | Printer Support'
  },
  description: 'Get expert printer support for all major brands. We offer comprehensive services including printer troubleshooting, setup, installation, and wireless configuration. 24/7 technical support available.',
  keywords: ['Printer Support', 'Printer Setup', 'Printer Installation', 'Printer Connect with wifi', 'Wireless Printer Setup', 'Printer Troubleshooting', 'HP Printer', 'Canon Printer', 'Epson Printer', 'Brother Printer'],
  authors: [{ name: 'Printer Support' }],
  creator: 'Printer Support',
  publisher: 'Printer Support',
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
    siteName: 'Printer Support',
    title: 'Printer Support - Expert Technical Help for All Printer Brands',
    description: 'Professional printer support services for all major brands. Get help with printer setup, installation, and troubleshooting.',
    images: [
      {
        url: '/hero-printer.svg',
        width: 1200,
        height: 630,
        alt: 'Printer Support',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Printer Support - Expert Technical Help for All Printer Brands',
    description: 'Professional printer support services for all major brands.',
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
    'phone': '+1-888-423-7757',
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
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
        <meta name="theme-color" content="#667eea" />
      </head>
      <body>
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

