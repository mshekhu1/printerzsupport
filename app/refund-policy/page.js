import Breadcrumb from '../components/Breadcrumb';
import '../../styles/pages/About.css';

export const metadata = {
  title: 'Refund Policy - Printer Support | Money-Back Guarantee & Returns',
  description: 'Read our Refund Policy to understand our money-back guarantee, refund eligibility, and return process. We are committed to customer satisfaction and fair refund practices.',
  keywords: 'Refund Policy, Money Back Guarantee, Return Policy, Refund Terms, Printer Support Refund',
  openGraph: {
    title: 'Refund Policy - Printer Support',
    description: 'Read our Refund Policy to understand our money-back guarantee and refund process.',
    url: 'https://www.printerzsupport.com/refund-policy',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.printerzsupport.com/refund-policy',
  },
};

export default function RefundPolicyPage() {
  const breadcrumbItems = [
    { name: 'Home', url: 'https://www.printerzsupport.com/' },
    { name: 'Refund Policy', url: 'https://www.printerzsupport.com/refund-policy' }
  ];

  return (
    <div className="about-container animate__animated animate__fadeIn">
      <div className="container">
        <Breadcrumb items={breadcrumbItems} />
        <h1 className="animate__animated animate__fadeInDown">Refund Policy</h1>
        <p className="animate__animated animate__fadeInUp"><strong>Last Updated: December 18, 2024</strong></p>

        <div className="blog-post-content" style={{ marginTop: '2rem' }}>
          <p>At Printer Support, we are committed to providing high-quality services and ensuring customer satisfaction. This Refund Policy outlines the terms and conditions under which refunds may be issued for our services.</p>

          <h2>1. Refund Eligibility</h2>
          <p>Refunds may be available under the following circumstances:</p>
          <ul>
            <li><strong>Service Not Provided:</strong> If we are unable to provide the requested service due to technical limitations or other reasons beyond our control</li>
            <li><strong>Service Not Completed:</strong> If the service was not completed as agreed and we are unable to resolve the issue</li>
            <li><strong>Duplicate Charges:</strong> If you were charged multiple times for the same service</li>
            <li><strong>Billing Errors:</strong> If there was an error in billing or pricing</li>
            <li><strong>Service Cancellation:</strong> If you cancel a scheduled service at least 24 hours before the scheduled time</li>
          </ul>

          <h2>2. Refund Timeframes</h2>
          <p>Refund requests must be submitted within the following timeframes:</p>
          <ul>
            <li><strong>Service Issues:</strong> Within 30 days of service completion or attempted service</li>
            <li><strong>Billing Errors:</strong> Within 90 days of the charge date</li>
            <li><strong>Duplicate Charges:</strong> Within 60 days of the charge date</li>
            <li><strong>Service Cancellation:</strong> Before the scheduled service time (minimum 24 hours notice required)</li>
          </ul>
          <p>Refund requests submitted after these timeframes may not be eligible for processing.</p>

          <h2>3. Non-Refundable Services</h2>
          <p>The following services and situations are generally not eligible for refunds:</p>
          <ul>
            <li>Services that were successfully completed as agreed</li>
            <li>Issues caused by customer error, negligence, or failure to follow instructions</li>
            <li>Hardware failures or damage requiring manufacturer warranty service</li>
            <li>Services where the issue was resolved but the customer is unsatisfied with the solution</li>
            <li>Third-party software or hardware purchases made through our services</li>
            <li>Services cancelled less than 24 hours before the scheduled time</li>
            <li>No-show appointments or missed scheduled service times</li>
          </ul>

          <h2>4. Partial Refunds</h2>
          <p>In certain situations, partial refunds may be issued:</p>
          <ul>
            <li>If the service was partially completed but the main issue remains unresolved</li>
            <li>If additional charges were applied incorrectly</li>
            <li>If service time was significantly less than estimated or paid for</li>
            <li>If we determine that a partial refund is appropriate based on the circumstances</li>
          </ul>
          <p>Partial refund amounts will be determined on a case-by-case basis.</p>

          <h2>5. How to Request a Refund</h2>
          <p>To request a refund, please contact us through one of the following methods:</p>
          <ul>
            <li><strong>Email:</strong> Send a detailed refund request to <a href="mailto:support@printerzsupport.com">support@printerzsupport.com</a> with:
              <ul>
                <li>Your name and contact information</li>
                <li>Service date and transaction details</li>
                <li>Reason for refund request</li>
                <li>Any supporting documentation</li>
              </ul>
            </li>
            <li><strong>Phone:</strong> Call us at <a href="tel:+1-888-423-7757">+1-888-423-7757</a> and speak with our customer service team</li>
            <li><strong>Online:</strong> Use our contact form on the website</li>
          </ul>
          <p>Please include as much detail as possible to help us process your request quickly.</p>

          <h2>6. Refund Processing</h2>
          <p>Once your refund request is received:</p>
          <ul>
            <li>We will review your request within 2-3 business days</li>
            <li>We may contact you for additional information if needed</li>
            <li>If approved, refunds will be processed within 5-10 business days</li>
            <li>Refunds will be issued to the original payment method used</li>
            <li>You will receive confirmation once the refund has been processed</li>
          </ul>
          <p>Processing times may vary depending on your payment method and financial institution.</p>

          <h2>7. Refund Methods</h2>
          <p>Refunds will be issued using the same payment method used for the original transaction:</p>
          <ul>
            <li><strong>Credit/Debit Cards:</strong> Refunded to the original card (may take 5-10 business days to appear)</li>
            <li><strong>PayPal:</strong> Refunded to your PayPal account (typically 3-5 business days)</li>
            <li><strong>Other Payment Methods:</strong> Processed according to the payment provider's policies</li>
          </ul>
          <p>If the original payment method is no longer available, we will work with you to arrange an alternative refund method.</p>

          <h2>8. Service Guarantee</h2>
          <p>We stand behind our services and offer the following guarantee:</p>
          <ul>
            <li>If we are unable to resolve your printer issue, we will work with you to find a solution</li>
            <li>If no solution can be found and the issue is within our service scope, a refund may be considered</li>
            <li>We will make reasonable efforts to resolve issues before considering refunds</li>
            <li>Some issues may require manufacturer support or hardware replacement, which are outside our service scope</li>
          </ul>

          <h2>9. Disputes and Appeals</h2>
          <p>If your refund request is denied, you may:</p>
          <ul>
            <li>Request a review of the decision by providing additional information</li>
            <li>Speak with a supervisor or manager</li>
            <li>Request mediation or alternative dispute resolution</li>
          </ul>
          <p>We are committed to fair resolution of all disputes and will work with you to find a satisfactory outcome.</p>

          <h2>10. Chargebacks</h2>
          <p>If you initiate a chargeback with your credit card company or bank:</p>
          <ul>
            <li>We will investigate the chargeback and provide relevant documentation</li>
            <li>Chargebacks may result in account suspension or termination</li>
            <li>We encourage you to contact us first to resolve issues before initiating chargebacks</li>
            <li>We reserve the right to dispute chargebacks that we believe are invalid</li>
          </ul>

          <h2>11. Subscription and Recurring Services</h2>
          <p>For subscription or recurring service plans:</p>
          <ul>
            <li>You may cancel your subscription at any time</li>
            <li>Refunds for unused portions of subscription periods are evaluated on a case-by-case basis</li>
            <li>Cancellation must be requested before the next billing cycle to avoid charges</li>
            <li>No refunds for the current billing period unless service was not provided</li>
          </ul>

          <h2>12. Third-Party Services</h2>
          <p>For services involving third-party products or software:</p>
          <ul>
            <li>Refunds for third-party purchases are subject to the third party's refund policy</li>
            <li>We are not responsible for refunds of third-party products or services</li>
            <li>Service fees for third-party installations may be refundable if service was not completed</li>
          </ul>

          <h2>13. Changes to Refund Policy</h2>
          <p>We reserve the right to modify this Refund Policy at any time. Changes will be:</p>
          <ul>
            <li>Posted on this page with an updated "Last Updated" date</li>
            <li>Communicated to customers when significant changes are made</li>
            <li>Applied to refund requests submitted after the policy update</li>
          </ul>
          <p>Your continued use of our services after policy changes constitutes acceptance of the updated policy.</p>

          <h2>14. Contact Us</h2>
          <p>If you have questions about our Refund Policy or need to request a refund, please contact us:</p>
          <ul>
            <li><strong>Email:</strong> <a href="mailto:support@printerzsupport.com">support@printerzsupport.com</a></li>
            <li><strong>Phone:</strong> <a href="tel:+1-888-423-7757">+1-888-423-7757</a></li>
            <li><strong>Hours:</strong> 24/7 Support Available</li>
          </ul>
          <p>We are committed to resolving refund requests fairly and promptly. Our customer service team is available to assist you with any questions or concerns.</p>
        </div>
      </div>
    </div>
  );
}

