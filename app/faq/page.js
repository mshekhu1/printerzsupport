'use client';

import { useState } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import { getFAQSchema } from '../../lib/utils/structuredData';
import '../../styles/pages/FAQ.css';

export default function FAQPage() {
  const breadcrumbItems = [
    { name: 'Home', url: 'https://www.printerzsupport.com/' },
    { name: 'FAQ', url: 'https://www.printerzsupport.com/faq' }
  ];
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How do I fix my printer when it shows 'offline' status?",
      answer: "To fix a printer showing as offline, first check the printer's power and connection. For USB printers, ensure the cable is securely connected. For network printers, verify the printer is on the same network. In Windows, go to Settings > Devices > Printers, right-click your printer, and select 'Use printer online'. You may also need to restart the print spooler service or reinstall printer drivers."
    },
    {
      question: "How do I connect my printer to WiFi?",
      answer: "To connect your printer to WiFi, first ensure your printer supports wireless connectivity. Access your printer's settings menu (usually via the control panel or LCD screen), navigate to Network or Wireless settings, select your WiFi network, and enter the password. Alternatively, use your printer manufacturer's setup software on your computer, which can guide you through the wireless setup process step by step."
    },
    {
      question: "Why is my printer not printing even though it's connected?",
      answer: "If your printer is connected but not printing, check several things: ensure the printer has paper and ink/toner, clear any paper jams, verify the printer is set as the default printer, check for error messages on the printer display, restart both the printer and your computer, update or reinstall printer drivers, and check the print queue for stuck print jobs that need to be cleared."
    },
    {
      question: "How do I install printer drivers on Windows?",
      answer: "To install printer drivers on Windows, you can use Windows Update (Settings > Update & Security > Windows Update), download drivers from your printer manufacturer's website, use the installation CD that came with your printer, or let Windows automatically detect and install drivers when you connect the printer. For network printers, use the 'Add Printer' wizard in Settings > Devices > Printers."
    },
    {
      question: "What should I do if my printer keeps jamming paper?",
      answer: "If your printer keeps jamming, first turn off and unplug the printer. Gently remove any stuck paper (pull in the direction of paper flow, never force it). Check for torn pieces of paper, clean the paper path with a lint-free cloth, ensure you're using the correct paper type and size, don't overload the paper tray, and make sure the paper guides are properly adjusted. If jams persist, there may be a mechanical issue requiring professional repair."
    },
    {
      question: "How do I fix poor print quality or faded prints?",
      answer: "To fix poor print quality, first run your printer's cleaning cycle (usually found in printer settings or maintenance menu). Check ink/toner levels and replace if low. Clean the print heads (for inkjet printers) using the printer's utility software. Ensure you're using the correct paper type settings. For laser printers, try removing and shaking the toner cartridge. If issues persist, the print heads or toner cartridge may need replacement."
    },
    {
      question: "Can I get help with printer setup over the phone?",
      answer: "Yes! Our expert technicians are available 24/7 to help you with printer setup, installation, troubleshooting, and any other printer-related issues. Call us at +1-888-423-7757 for immediate assistance. We can guide you through wireless setup, driver installation, network configuration, and resolve any printer problems you're experiencing."
    },
    {
      question: "How do I set up a wireless printer on Mac?",
      answer: "To set up a wireless printer on Mac, first ensure your printer is connected to the same WiFi network as your Mac. Go to System Preferences > Printers & Scanners, click the '+' button, select your printer from the list, and click Add. If your printer doesn't appear, click 'IP' tab and enter your printer's IP address. macOS will automatically download the necessary drivers. You can also use AirPrint if your printer supports it."
    },
    {
      question: "What printer brands do you support?",
      answer: "We provide expert support for all major printer brands including HP, Canon, Epson, Brother, Lexmark, Samsung, Xerox, and more. Our technicians are experienced with both inkjet and laser printers, as well as multifunction printers (print, scan, copy, fax). We can help with setup, installation, troubleshooting, repairs, and maintenance for virtually any printer model."
    },
    {
      question: "How much does printer support cost?",
      answer: "Our printer support services are competitively priced and vary based on the specific service needed. We offer affordable solutions for printer setup, installation, troubleshooting, and repairs. Contact us at +1-888-423-7757 or email support@printerzsupport.com for a quote. We provide transparent pricing with no hidden fees, and our goal is to get your printer working quickly and affordably."
    },
    {
      question: "Do you offer remote printer support?",
      answer: "Yes, we offer remote support services where our technicians can access your computer (with your permission) to help diagnose and fix printer issues, install drivers, configure settings, and troubleshoot problems. This is a convenient and efficient way to resolve printer issues without needing an on-site visit. Remote support is available 24/7 for your convenience."
    },
    {
      question: "How do I know if my printer needs repair or just maintenance?",
      answer: "Signs your printer needs repair include persistent error messages, mechanical failures (paper jams that won't clear, broken parts), unusual noises, complete failure to print, or repeated problems after troubleshooting. Maintenance issues are usually resolved by cleaning, updating drivers, clearing print queues, or replacing consumables (ink/toner). If basic troubleshooting doesn't resolve the issue, it may need professional repair. Our technicians can help diagnose the problem."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqSchema = getFAQSchema(faqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="faq-container">
        <Breadcrumb items={breadcrumbItems} />
        <div className="container">
          <div className="faq-header">
            <h1>Frequently Asked Questions</h1>
            <p>Find answers to common printer questions</p>
          </div>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className={`faq-item ${openIndex === index ? 'open' : ''}`}>
                <button
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                >
                  <span className="faq-question-text">{faq.question}</span>
                  <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
                </button>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

