import { getOrganizationSchema } from '../../lib/utils/structuredData';
import '../../styles/pages/About.css';

export const metadata = {
  title: 'About Us',
  description: '24/7 HP printer support team with 10+ years helping customers fix offline errors, jams, drivers, WiFi issues, and error codes.',
  keywords: '24/7 HP printer support, about HP printer help, remote printer support',
  openGraph: {
    title: 'About Us | Printer Support',
    description: '24/7 HP printer support for homes and businesses.',
    url: 'https://www.printerzsupport.com/about',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.printerzsupport.com/about',
  },
};

export default function AboutPage() {
  const structuredData = getOrganizationSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="about-container animate__animated animate__fadeIn">
        <div className="container">
          <h1 className="animate__animated animate__fadeInDown">About Printer Support</h1>
          <p className="animate__animated animate__fadeInUp">
            We help people get their printers working again — without hauling hardware to a shop. Most fixes happen over the phone in a single session.
          </p>
          <p className="animate__animated animate__fadeInUp">
            Our technicians work with HP LaserJet, OfficeJet, DeskJet, and Envy models every day, along with other major brands. Offline errors, jams, driver failures, and WiFi setup are what we see most.
          </p>
          <p className="animate__animated animate__fadeInUp">
            We&apos;ve been doing this for more than 10 years, supporting home users, remote workers, and small offices across the US and Canada.
          </p>
          <h2 className="animate__animated animate__fadeInDown">How we work</h2>
          <p className="animate__animated animate__fadeInUp">
            You call, describe what&apos;s happening, and we walk you through diagnosis and repair remotely. We stay on the line until printing works again.
          </p>
          <h2 className="animate__animated animate__fadeInDown">What we care about</h2>
          <p className="animate__animated animate__fadeInUp">
            Clear communication, honest pricing, and fixes that last. If you&apos;re stuck on a printer problem, we&apos;re easy to reach — day or night.
          </p>
        </div>
      </div>
    </>
  );
}
