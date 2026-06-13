export const metadata = {
  title: 'Blog',
  description: 'Step-by-step guides and troubleshooting tips for HP printers. Learn how to fix offline errors, set up WiFi, install drivers, and keep your printer running smoothly.',
  keywords: 'HP printer guides, printer troubleshooting tips, HP printer setup, printer driver help',
  openGraph: {
    title: 'HP Printer Support Blog',
    description: 'Practical guides and troubleshooting tips for HP and other printers.',
    url: 'https://www.printerzsupport.com/blog',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.printerzsupport.com/blog',
  },
};

export default function BlogLayout({ children }) {
  return children;
}
