import Breadcrumb from '../components/Breadcrumb';
import '../../src/page-styles/About.css';

export const metadata = {
  title: 'Privacy Policy - Printer Support | Data Protection & Privacy',
  description: 'Read our Privacy Policy to understand how Printer Support collects, uses, and protects your personal information. We are committed to protecting your privacy and data security.',
  keywords: 'Privacy Policy, Data Protection, Privacy Statement, Data Security, Printer Support Privacy',
  openGraph: {
    title: 'Privacy Policy - Printer Support',
    description: 'Read our Privacy Policy to understand how we protect your personal information.',
    url: 'https://www.printerzsupport.com/privacy-policy',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.printerzsupport.com/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  const breadcrumbItems = [
    { name: 'Home', url: 'https://www.printerzsupport.com/' },
    { name: 'Privacy Policy', url: 'https://www.printerzsupport.com/privacy-policy' }
  ];

  return (
    <div className="about-container animate__animated animate__fadeIn">
      <div className="container">
        <Breadcrumb items={breadcrumbItems} />
        <h1 className="animate__animated animate__fadeInDown">Privacy Policy</h1>
        <p className="animate__animated animate__fadeInUp"><strong>Last Updated: December 18, 2024</strong></p>

        <div className="blog-post-content" style={{ marginTop: '2rem' }}>
          <p>At Printer Support ("we," "our," or "us"), we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.</p>

          <h2>1. Information We Collect</h2>
          <p>We collect information that you provide directly to us, including:</p>
          <ul>
            <li><strong>Personal Information:</strong> Name, email address, and phone number when you contact us or request services</li>
            <li><strong>Payment Information:</strong> Credit card details and billing information (processed securely through third-party payment processors)</li>
            <li><strong>Technical Information:</strong> IP address, browser type, device information, and usage data collected automatically</li>
            <li><strong>Communication Records:</strong> Records of your communications with our support team, including chat logs and email correspondence</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>We use the collected information for the following purposes:</p>
          <ul>
            <li>To provide, maintain, and improve our printer support services</li>
            <li>To process your service requests and payments</li>
            <li>To communicate with you about your account, services, and support requests</li>
            <li>To send you technical updates, service notifications, and marketing communications (with your consent)</li>
            <li>To analyze website usage and improve user experience</li>
            <li>To detect, prevent, and address technical issues and security threats</li>
            <li>To comply with legal obligations and enforce our terms of service</li>
          </ul>

          <h2>3. Information Sharing and Disclosure</h2>
          <p>We do not sell your personal information. We may share your information only in the following circumstances:</p>
          <ul>
            <li><strong>Service Providers:</strong> With trusted third-party service providers who assist us in operating our website and providing services (payment processors, hosting providers, analytics services)</li>
            <li><strong>Legal Requirements:</strong> When required by law, court order, or government regulation</li>
            <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets (with notice to users)</li>
            <li><strong>Protection of Rights:</strong> To protect our rights, property, or safety, or that of our users or others</li>
            <li><strong>With Your Consent:</strong> When you explicitly authorize us to share your information</li>
          </ul>

          <h2>4. Data Security</h2>
          <p>We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:</p>
          <ul>
            <li>Encryption of sensitive data in transit and at rest</li>
            <li>Secure payment processing through PCI-compliant providers</li>
            <li>Regular security assessments and updates</li>
            <li>Access controls and authentication procedures</li>
            <li>Employee training on data protection practices</li>
          </ul>
          <p>However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.</p>

          <h2>5. Cookies and Tracking Technologies</h2>
          <p>We use cookies, web beacons, and similar tracking technologies to collect information about your browsing behavior and preferences. You can control cookie settings through your browser preferences. Types of cookies we use include:</p>
          <ul>
            <li><strong>Essential Cookies:</strong> Required for website functionality</li>
            <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our website</li>
            <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements (with your consent)</li>
          </ul>

          <h2>6. Your Rights and Choices</h2>
          <p>Depending on your location, you may have the following rights regarding your personal information:</p>
          <ul>
            <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
            <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
            <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal requirements)</li>
            <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications at any time</li>
            <li><strong>Data Portability:</strong> Request transfer of your data to another service provider</li>
            <li><strong>Objection:</strong> Object to processing of your personal information for certain purposes</li>
          </ul>
          <p>To exercise these rights, please contact us at <a href="mailto:support@printerzsupport.com">support@printerzsupport.com</a> or call us at <a href="tel:+1-888-423-7757">+1-888-423-7757</a>.</p>

          <h2>7. Children's Privacy</h2>
          <p>Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us immediately.</p>

          <h2>8. Third-Party Links</h2>
          <p>Our website may contain links to third-party websites or services. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any information.</p>

          <h2>9. Data Retention</h2>
          <p>We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When information is no longer needed, we will securely delete or anonymize it.</p>

          <h2>10. International Data Transfers</h2>
          <p>Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.</p>

          <h2>11. Changes to This Privacy Policy</h2>
          <p>We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. Your continued use of our services after such changes constitutes acceptance of the updated policy.</p>

          <h2>12. Contact Us</h2>
          <p>If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:</p>
          <ul>
            <li><strong>Email:</strong> <a href="mailto:support@printerzsupport.com">support@printerzsupport.com</a></li>
            <li><strong>Phone:</strong> <a href="tel:+1-888-423-7757">+1-888-423-7757</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

