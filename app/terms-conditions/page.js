import Breadcrumb from '../components/Breadcrumb';
import '../../src/page-styles/About.css';

export const metadata = {
  title: 'Terms & Conditions - Printer Support | Service Terms & Legal',
  description: 'Read our Terms and Conditions to understand the rules and regulations for using Printer Support services. Learn about our service terms, user responsibilities, and legal agreements.',
  keywords: 'Terms and Conditions, Terms of Service, Legal Terms, Service Agreement, Printer Support Terms',
  openGraph: {
    title: 'Terms & Conditions - Printer Support',
    description: 'Read our Terms and Conditions to understand the rules for using our services.',
    url: 'https://www.printerzsupport.com/terms-conditions',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.printerzsupport.com/terms-conditions',
  },
};

export default function TermsConditionsPage() {
  const breadcrumbItems = [
    { name: 'Home', url: 'https://www.printerzsupport.com/' },
    { name: 'Terms & Conditions', url: 'https://www.printerzsupport.com/terms-conditions' }
  ];

  return (
    <div className="about-container animate__animated animate__fadeIn">
      <div className="container">
        <Breadcrumb items={breadcrumbItems} />
        <h1 className="animate__animated animate__fadeInDown">Terms & Conditions</h1>
        <p className="animate__animated animate__fadeInUp"><strong>Last Updated: December 18, 2024</strong></p>

        <div className="blog-post-content" style={{ marginTop: '2rem' }}>
          <p>Welcome to Printer Support. These Terms and Conditions ("Terms") govern your access to and use of our website and services. By accessing or using our services, you agree to be bound by these Terms. If you do not agree with any part of these Terms, you must not use our services.</p>

          <h2>1. Acceptance of Terms</h2>
          <p>By accessing or using Printer Support's website, services, or contacting our support team, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions, our Privacy Policy, and all applicable laws and regulations.</p>

          <h2>2. Description of Services</h2>
          <p>Printer Support provides technical support, troubleshooting, installation, configuration, and repair services for printers and related devices. Our services include:</p>
          <ul>
            <li>Remote technical support and troubleshooting</li>
            <li>Printer installation and setup assistance</li>
            <li>Wireless printer configuration</li>
            <li>Driver installation and updates</li>
            <li>Printer maintenance and optimization</li>
            <li>Diagnostic and repair services</li>
          </ul>
          <p>We reserve the right to modify, suspend, or discontinue any aspect of our services at any time without prior notice.</p>

          <h2>3. User Responsibilities</h2>
          <p>You agree to:</p>
          <ul>
            <li>Provide accurate, current, and complete information when requesting services</li>
            <li>Maintain the security of your account credentials and personal information</li>
            <li>Use our services only for lawful purposes and in accordance with these Terms</li>
            <li>Not attempt to gain unauthorized access to our systems or interfere with service operations</li>
            <li>Not use our services to transmit harmful code, viruses, or malicious software</li>
            <li>Comply with all applicable laws and regulations</li>
            <li>Respect intellectual property rights of Printer Support and third parties</li>
          </ul>

          <h2>4. Service Availability and Limitations</h2>
          <p>While we strive to provide reliable services, we do not guarantee:</p>
          <ul>
            <li>Uninterrupted or error-free service availability</li>
            <li>That all technical issues can be resolved remotely</li>
            <li>Compatibility with all printer models or software versions</li>
            <li>Specific outcomes or results from our services</li>
          </ul>
          <p>Some issues may require on-site service, hardware replacement, or manufacturer support, which may incur additional costs.</p>

          <h2>5. Payment Terms</h2>
          <p>Payment terms are as follows:</p>
          <ul>
            <li>Service fees are due at the time of service or as agreed in advance</li>
            <li>We accept major credit cards and other payment methods as specified</li>
            <li>All prices are in USD unless otherwise stated</li>
            <li>Refunds are subject to our Refund Policy</li>
            <li>We reserve the right to change pricing with reasonable notice</li>
            <li>Late payments may result in service suspension or termination</li>
          </ul>

          <h2>6. Intellectual Property</h2>
          <p>All content, materials, trademarks, logos, and intellectual property on our website and in our services are owned by Printer Support or our licensors. You may not:</p>
          <ul>
            <li>Copy, reproduce, or distribute our content without permission</li>
            <li>Use our trademarks or logos without authorization</li>
            <li>Reverse engineer or attempt to extract source code from our services</li>
            <li>Create derivative works based on our proprietary materials</li>
          </ul>

          <h2>7. Limitation of Liability</h2>
          <p>To the maximum extent permitted by law:</p>
          <ul>
            <li>Printer Support shall not be liable for any indirect, incidental, special, consequential, or punitive damages</li>
            <li>Our total liability for any claims shall not exceed the amount paid by you for the specific service in question</li>
            <li>We are not responsible for data loss, hardware damage, or business interruption resulting from our services</li>
            <li>You are responsible for backing up your data before receiving technical support</li>
          </ul>

          <h2>8. Warranty Disclaimer</h2>
          <p>Our services are provided "as is" and "as available" without warranties of any kind, either express or implied, including but not limited to:</p>
          <ul>
            <li>Warranties of merchantability or fitness for a particular purpose</li>
            <li>Warranties that services will meet your requirements</li>
            <li>Warranties regarding the accuracy or reliability of information provided</li>
          </ul>

          <h2>9. Indemnification</h2>
          <p>You agree to indemnify, defend, and hold harmless Printer Support, its officers, employees, and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from:</p>
          <ul>
            <li>Your use of our services</li>
            <li>Your violation of these Terms</li>
            <li>Your violation of any rights of another party</li>
            <li>Any content or information you provide</li>
          </ul>

          <h2>10. Third-Party Services and Links</h2>
          <p>Our website may contain links to third-party websites, services, or software. We are not responsible for:</p>
          <ul>
            <li>The content, privacy practices, or terms of third-party sites</li>
            <li>The availability or functionality of third-party services</li>
            <li>Any damages resulting from your use of third-party services</li>
          </ul>
          <p>Your use of third-party services is at your own risk and subject to their respective terms.</p>

          <h2>11. Termination</h2>
          <p>We reserve the right to terminate or suspend your access to our services immediately, without prior notice, for:</p>
          <ul>
            <li>Violation of these Terms and Conditions</li>
            <li>Fraudulent or illegal activity</li>
            <li>Non-payment of fees</li>
            <li>Any reason we deem necessary to protect our business or users</li>
          </ul>
          <p>Upon termination, your right to use our services will cease immediately.</p>

          <h2>12. Dispute Resolution</h2>
          <p>Any disputes arising from these Terms or our services shall be resolved through:</p>
          <ul>
            <li><strong>Negotiation:</strong> Parties agree to attempt good-faith negotiation for 30 days</li>
            <li><strong>Mediation:</strong> If negotiation fails, disputes may be resolved through mediation</li>
            <li><strong>Arbitration:</strong> Disputes may be subject to binding arbitration in accordance with applicable rules</li>
            <li><strong>Jurisdiction:</strong> These Terms are governed by the laws of the United States</li>
          </ul>

          <h2>13. Changes to Terms</h2>
          <p>We reserve the right to modify these Terms at any time. Material changes will be communicated by:</p>
          <ul>
            <li>Posting updated Terms on our website</li>
            <li>Updating the "Last Updated" date</li>
            <li>Providing notice via email when appropriate</li>
          </ul>
          <p>Your continued use of our services after changes constitutes acceptance of the updated Terms.</p>

          <h2>14. Severability</h2>
          <p>If any provision of these Terms is found to be invalid, illegal, or unenforceable, the remaining provisions shall continue in full force and effect.</p>

          <h2>15. Entire Agreement</h2>
          <p>These Terms, together with our Privacy Policy and Refund Policy, constitute the entire agreement between you and Printer Support regarding the use of our services.</p>

          <h2>16. Contact Information</h2>
          <p>If you have questions about these Terms and Conditions, please contact us:</p>
          <ul>
            <li><strong>Email:</strong> <a href="mailto:support@printerzsupport.com">support@printerzsupport.com</a></li>
            <li><strong>Phone:</strong> <a href="tel:+1-888-423-7757">+1-888-423-7757</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

