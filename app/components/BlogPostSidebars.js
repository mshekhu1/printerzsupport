'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import '../../styles/components/BlogPostSidebars.css';

// All FAQs for non-brand pages
const allFAQs = [
  {
    question: "How do I fix my printer when it shows 'offline' status?",
    answer: "To fix a printer showing as offline, first check the printer's power and connection. For USB printers, ensure the cable is securely connected. For network printers, verify the printer is on the same network. In Windows, go to Settings > Devices > Printers, right-click your printer, and select 'Use printer online'. You may also need to restart the print spooler service or reinstall printer drivers.",
    link: "/faq"
  },
  {
    question: "How do I connect my printer to WiFi?",
    answer: "To connect your printer to WiFi, first ensure your printer supports wireless connectivity. Access your printer's settings menu (usually via the control panel or LCD screen), navigate to Network or Wireless settings, select your WiFi network, and enter the password. Alternatively, use your printer manufacturer's setup software on your computer, which can guide you through the wireless setup process step by step.",
    link: "/faq"
  },
  {
    question: "Why is my printer not printing even though it's connected?",
    answer: "If your printer is connected but not printing, check several things: ensure the printer has paper and ink/toner, clear any paper jams, verify the printer is set as the default printer, check for error messages on the printer display, restart both the printer and your computer, update or reinstall printer drivers, and check the print queue for stuck print jobs that need to be cleared.",
    link: "/faq"
  },
  {
    question: "How do I install printer drivers on Windows?",
    answer: "To install printer drivers on Windows, you can use Windows Update (Settings > Update & Security > Windows Update), download drivers from your printer manufacturer's website, use the installation CD that came with your printer, or let Windows automatically detect and install drivers when you connect the printer. For network printers, use the 'Add Printer' wizard in Settings > Devices > Printers.",
    link: "/faq"
  },
  {
    question: "What should I do if my printer keeps jamming paper?",
    answer: "If your printer keeps jamming, first turn off and unplug the printer. Gently remove any stuck paper (pull in the direction of paper flow, never force it). Check for torn pieces of paper, clean the paper path with a lint-free cloth, ensure you're using the correct paper type and size, don't overload the paper tray, and make sure the paper guides are properly adjusted. If jams persist, there may be a mechanical issue requiring professional repair.",
    link: "/faq"
  },
  {
    question: "How do I fix poor print quality or faded prints?",
    answer: "To fix poor print quality, first run your printer's cleaning cycle (usually found in printer settings or maintenance menu). Check ink/toner levels and replace if low. Clean the print heads (for inkjet printers) using the printer's utility software. Ensure you're using the correct paper type settings. For laser printers, try removing and shaking the toner cartridge. If issues persist, the print heads or toner cartridge may need replacement.",
    link: "/faq"
  },
  {
    question: "Can I get help with printer setup over the phone?",
    answer: "Yes! Our expert technicians are available 24/7 to help you with printer setup, installation, troubleshooting, and any other printer-related issues. Call us at +1-888-423-7757 for immediate assistance. We can guide you through wireless setup, driver installation, network configuration, and resolve any printer problems you're experiencing.",
    link: "/faq"
  },
  {
    question: "How do I set up a wireless printer on Mac?",
    answer: "To set up a wireless printer on Mac, first ensure your printer is connected to the same WiFi network as your Mac. Go to System Preferences > Printers & Scanners, click the '+' button, select your printer from the list, and click Add. If your printer doesn't appear, click 'IP' tab and enter your printer's IP address. macOS will automatically download the necessary drivers. You can also use AirPrint if your printer supports it.",
    link: "/faq"
  },
  {
    question: "What printer brands do you support?",
    answer: "We provide expert support for all major printer brands including HP, Canon, Epson, Brother, Lexmark, Samsung, Xerox, and more. Our technicians are experienced with both inkjet and laser printers, as well as multifunction printers (print, scan, copy, fax). We can help with setup, installation, troubleshooting, repairs, and maintenance for virtually any printer model.",
    link: "/faq"
  },
  {
    question: "How much does printer support cost?",
    answer: "Our printer support services are competitively priced and vary based on the specific service needed. We offer affordable solutions for printer setup, installation, troubleshooting, and repairs. Contact us at +1-888-423-7757 or email support@printerzsupport.com for a quote. We provide transparent pricing with no hidden fees, and our goal is to get your printer working quickly and affordably.",
    link: "/faq"
  },
  {
    question: "Do you offer remote printer support?",
    answer: "Yes, we offer remote support services where our technicians can access your computer (with your permission) to help diagnose and fix printer issues, install drivers, configure settings, and troubleshoot problems. This is a convenient and efficient way to resolve printer issues without needing an on-site visit. Remote support is available 24/7 for your convenience.",
    link: "/faq"
  },
  {
    question: "How do I know if my printer needs repair or just maintenance?",
    answer: "Signs your printer needs repair include persistent error messages, mechanical failures (paper jams that won't clear, broken parts), unusual noises, complete failure to print, or repeated problems after troubleshooting. Maintenance issues are usually resolved by cleaning, updating drivers, clearing print queues, or replacing consumables (ink/toner). If basic troubleshooting doesn't resolve the issue, it may need professional repair. Our technicians can help diagnose the problem.",
    link: "/faq"
  }
];

// Brand-specific FAQs
const brandSpecificFAQs = {
  hp: [
    {
      question: "How do I fix my HP printer when it shows offline status?",
      answer: "To fix HP printer offline issues, check HP printer power and USB/WiFi connections. In Windows Settings > Devices > Printers, right-click your HP printer and select 'Use printer online'. Restart the Print Spooler service or reinstall HP printer drivers if needed. For wireless HP printers, ensure they're connected to the same WiFi network. Use HP Smart app to reconnect your HP printer to the network.",
      link: "/faq"
    },
    {
      question: "How do I connect my HP printer to WiFi network?",
      answer: "To connect HP printer to WiFi, use the HP Smart app on your phone or computer. Alternatively, access your HP printer's control panel, navigate to Network or Wireless settings, select your WiFi network, and enter the password. For HP LaserJet and OfficeJet models, you can also use WPS button method. Ensure your HP printer supports 2.4GHz WiFi networks.",
      link: "/faq"
    },
    {
      question: "Why is my HP printer not printing even though it's connected?",
      answer: "If your HP printer is connected but not printing, check HP printer paper and ink/toner levels, clear any paper jams, verify the HP printer is set as default printer, check for HP error codes on printer display, restart both HP printer and computer, update HP printer drivers from HP website, and clear stuck print jobs in HP print queue.",
      link: "/faq"
    },
    {
      question: "How do I install HP printer drivers on Windows?",
      answer: "To install HP printer drivers, download HP Smart from Microsoft Store or HP's official website. Alternatively, use Windows Update (Settings > Update & Security > Windows Update), download HP printer drivers from HP Support website, or use the installation CD that came with your HP printer. HP Smart will automatically detect and install drivers for your HP printer model.",
      link: "/faq"
    },
    {
      question: "What HP printer error codes mean and how to fix them?",
      answer: "Common HP printer error codes include 0x83d00002 (HP printer offline), 0x610000d4 (HP paper jam), 0x6100004e (HP ink cartridge issue), and 49.4C02 (HP firmware error). Fix HP error codes by checking HP printer status, clearing paper jams, replacing HP ink cartridges, updating HP printer firmware, or restarting your HP printer. Use HP Smart app for automated HP error code resolution.",
      link: "/faq"
    },
    {
      question: "How do I fix HP printer print quality issues?",
      answer: "To fix HP printer print quality, run HP printer cleaning cycle from HP Smart app or printer control panel. Check HP ink or toner levels and replace if low. Clean HP print heads using HP Printer Assistant. Ensure correct paper type settings for your HP printer. For HP laser printers, try removing and shaking the HP toner cartridge. If HP print quality issues persist, HP print heads or HP toner cartridge may need replacement.",
      link: "/faq"
    }
  ],
  canon: [
    {
      question: "How do I fix my Canon printer when it shows offline status?",
      answer: "To fix Canon printer offline issues, check Canon printer power and USB/WiFi connections. In Windows Settings > Devices > Printers, right-click your Canon printer and select 'Use printer online'. Restart the Print Spooler service or reinstall Canon printer drivers if needed. For wireless Canon printers, ensure they're connected to the same WiFi network. Use Canon PRINT app to reconnect your Canon printer.",
      link: "/faq"
    },
    {
      question: "How do I connect my Canon printer to WiFi network?",
      answer: "To connect Canon printer to WiFi, use Canon PRINT app on your phone or computer. Alternatively, access your Canon printer's control panel, navigate to Network or Wireless settings, select your WiFi network, and enter the password. For Canon PIXMA and imageCLASS models, you can use WPS button method. Ensure your Canon printer supports 2.4GHz WiFi networks.",
      link: "/faq"
    },
    {
      question: "Why is my Canon printer not printing even though it's connected?",
      answer: "If your Canon printer is connected but not printing, check Canon printer paper and ink levels, clear any paper jams, verify the Canon printer is set as default printer, check for Canon error codes on printer display, restart both Canon printer and computer, update Canon printer drivers from Canon website, and clear stuck print jobs in Canon print queue.",
      link: "/faq"
    },
    {
      question: "How do I install Canon printer drivers on Windows?",
      answer: "To install Canon printer drivers, download Canon PRINT from Microsoft Store or Canon's official website. Alternatively, use Windows Update (Settings > Update & Security > Windows Update), download Canon printer drivers from Canon Support website, or use the installation CD that came with your Canon printer. Canon Easy-WebPrint EX can help with Canon driver installation.",
      link: "/faq"
    },
    {
      question: "What Canon printer error codes mean and how to fix them?",
      answer: "Common Canon printer error codes include E05 (Canon paper jam), E13 (Canon ink cartridge issue), E16 (Canon waste ink full), and 5100 (Canon print head error). Fix Canon error codes by checking Canon printer status, clearing paper jams, replacing Canon ink cartridges, resetting Canon waste ink counter, or updating Canon printer firmware. Use Canon IJ Printer Utility for Canon error code resolution.",
      link: "/faq"
    },
    {
      question: "How do I fix Canon printer print quality issues?",
      answer: "To fix Canon printer print quality, run Canon printer cleaning cycle from Canon PRINT app or printer control panel. Check Canon ink levels and replace if low. Clean Canon print heads using Canon IJ Printer Utility. Ensure correct paper type settings for your Canon printer. For Canon PIXMA models, perform deep cleaning if print quality is poor. If Canon print quality issues persist, Canon print heads may need replacement.",
      link: "/faq"
    }
  ],
  epson: [
    {
      question: "How do I fix my Epson printer when it shows offline status?",
      answer: "To fix Epson printer offline issues, check Epson printer power and USB/WiFi connections. In Windows Settings > Devices > Printers, right-click your Epson printer and select 'Use printer online'. Restart the Print Spooler service or reinstall Epson printer drivers if needed. For wireless Epson printers, ensure they're connected to the same WiFi network. Use Epson Connect app to reconnect your Epson printer.",
      link: "/faq"
    },
    {
      question: "How do I connect my Epson printer to WiFi network?",
      answer: "To connect Epson printer to WiFi, use Epson Connect app on your phone or computer. Alternatively, access your Epson printer's control panel, navigate to Network or Wireless settings, select your WiFi network, and enter the password. For Epson EcoTank and Expression models, you can use WPS button method. Ensure your Epson printer supports 2.4GHz WiFi networks.",
      link: "/faq"
    },
    {
      question: "Why is my Epson printer not printing even though it's connected?",
      answer: "If your Epson printer is connected but not printing, check Epson printer paper and ink levels, clear any paper jams, verify the Epson printer is set as default printer, check for Epson error codes on printer display, restart both Epson printer and computer, update Epson printer drivers from Epson website, and clear stuck print jobs in Epson print queue.",
      link: "/faq"
    },
    {
      question: "How do I install Epson printer drivers on Windows?",
      answer: "To install Epson printer drivers, download Epson Printer Utility from Epson's official website. Alternatively, use Windows Update (Settings > Update & Security > Windows Update), download Epson printer drivers from Epson Support website, or use the installation CD that came with your Epson printer. Epson Printer Utility will help with Epson driver installation and setup.",
      link: "/faq"
    },
    {
      question: "What Epson printer error codes mean and how to fix them?",
      answer: "Common Epson printer error codes include 0x97 (Epson waste ink pad full), 0xEA (Epson paper jam), 0xF1 (Epson ink cartridge issue), and 0x9A (Epson print head error). Fix Epson error codes by checking Epson printer status, clearing paper jams, replacing Epson ink cartridges, resetting Epson waste ink counter using Epson Service Utility, or updating Epson printer firmware.",
      link: "/faq"
    },
    {
      question: "How do I fix Epson printer print quality issues?",
      answer: "To fix Epson printer print quality, run Epson printer cleaning cycle from Epson Printer Utility or printer control panel. Check Epson ink levels and replace if low. Clean Epson print heads using Epson Printer Utility. Ensure correct paper type settings for your Epson printer. For Epson EcoTank models, check ink levels in tanks. If Epson print quality issues persist, Epson print heads may need replacement.",
      link: "/faq"
    }
  ],
  brother: [
    {
      question: "How do I fix my Brother printer when it shows offline status?",
      answer: "To fix Brother printer offline issues, check Brother printer power and USB/WiFi connections. In Windows Settings > Devices > Printers, right-click your Brother printer and select 'Use printer online'. Restart the Print Spooler service or reinstall Brother printer drivers if needed. For wireless Brother printers, ensure they're connected to the same WiFi network. Use Brother iPrint&Scan app to reconnect your Brother printer.",
      link: "/faq"
    },
    {
      question: "How do I connect my Brother printer to WiFi network?",
      answer: "To connect Brother printer to WiFi, use Brother iPrint&Scan app on your phone or computer. Alternatively, access your Brother printer's control panel, navigate to Network or Wireless settings, select your WiFi network, and enter the password. For Brother MFC and HL models, you can use WPS button method. Ensure your Brother printer supports 2.4GHz WiFi networks.",
      link: "/faq"
    },
    {
      question: "Why is my Brother printer not printing even though it's connected?",
      answer: "If your Brother printer is connected but not printing, check Brother printer paper and ink/toner levels, clear any paper jams, verify the Brother printer is set as default printer, check for Brother error codes on printer display, restart both Brother printer and computer, update Brother printer drivers from Brother website, and clear stuck print jobs in Brother print queue.",
      link: "/faq"
    },
    {
      question: "How do I install Brother printer drivers on Windows?",
      answer: "To install Brother printer drivers, download Brother Printer Utility from Brother's official website. Alternatively, use Windows Update (Settings > Update & Security > Windows Update), download Brother printer drivers from Brother Support website, or use the installation CD that came with your Brother printer. Brother Printer Utility will help with Brother driver installation and network setup.",
      link: "/faq"
    },
    {
      question: "What Brother printer error codes mean and how to fix them?",
      answer: "Common Brother printer error codes include 46 (Brother paper jam), 50 (Brother toner low), 51 (Brother drum unit issue), and 52 (Brother fuser error). Fix Brother error codes by checking Brother printer status, clearing paper jams, replacing Brother toner cartridges, replacing Brother drum unit, or resetting Brother printer. Use Brother ControlCenter for Brother error code resolution.",
      link: "/faq"
    },
    {
      question: "How do I fix Brother printer print quality issues?",
      answer: "To fix Brother printer print quality, run Brother printer cleaning cycle from Brother Printer Utility or printer control panel. Check Brother toner levels and replace if low. Clean Brother print heads using Brother Printer Utility. Ensure correct paper type settings for your Brother printer. For Brother laser printers, try removing and shaking the Brother toner cartridge. If Brother print quality issues persist, Brother drum unit may need replacement.",
      link: "/faq"
    }
  ],
  lexmark: [
    {
      question: "How do I fix my Lexmark printer when it shows offline status?",
      answer: "To fix Lexmark printer offline issues, check Lexmark printer power and USB/WiFi connections. In Windows Settings > Devices > Printers, right-click your Lexmark printer and select 'Use printer online'. Restart the Print Spooler service or reinstall Lexmark printer drivers if needed. For wireless Lexmark printers, ensure they're connected to the same WiFi network.",
      link: "/faq"
    },
    {
      question: "How do I connect my Lexmark printer to WiFi network?",
      answer: "To connect Lexmark printer to WiFi, access your Lexmark printer's control panel, navigate to Network or Wireless settings, select your WiFi network, and enter the password. For Lexmark MS and CS series models, you can use WPS button method. Ensure your Lexmark printer supports 2.4GHz WiFi networks.",
      link: "/faq"
    },
    {
      question: "How do I install Lexmark printer drivers on Windows?",
      answer: "To install Lexmark printer drivers, download Lexmark Printer Software from Lexmark's official website. Alternatively, use Windows Update (Settings > Update & Security > Windows Update), download Lexmark printer drivers from Lexmark Support website, or use the installation CD that came with your Lexmark printer.",
      link: "/faq"
    },
    {
      question: "What Lexmark printer error codes mean and how to fix them?",
      answer: "Common Lexmark printer error codes include 250 (Lexmark paper jam), 310 (Lexmark toner low), 340 (Lexmark drum unit issue), and 800 (Lexmark fuser error). Fix Lexmark error codes by checking Lexmark printer status, clearing paper jams, replacing Lexmark toner cartridges, or replacing Lexmark drum unit.",
      link: "/faq"
    },
    {
      question: "How do I fix Lexmark printer print quality issues?",
      answer: "To fix Lexmark printer print quality, run Lexmark printer cleaning cycle from printer control panel. Check Lexmark toner levels and replace if low. Clean Lexmark print heads using Lexmark Printer Software. Ensure correct paper type settings for your Lexmark printer. If Lexmark print quality issues persist, Lexmark drum unit may need replacement.",
      link: "/faq"
    },
    {
      question: "How do I set up Lexmark network printer?",
      answer: "To set up Lexmark network printer, connect your Lexmark printer to your network via Ethernet or WiFi. Use Lexmark Printer Software to detect and install your Lexmark network printer. Enter your Lexmark printer's IP address if it doesn't appear automatically. Configure Lexmark printer settings through Lexmark Smart Solutions software.",
      link: "/faq"
    }
  ],
  xerox: [
    {
      question: "How do I fix my Xerox printer when it shows offline status?",
      answer: "To fix Xerox printer offline issues, check Xerox printer power and network connections. In Windows Settings > Devices > Printers, right-click your Xerox printer and select 'Use printer online'. Restart the Print Spooler service or reinstall Xerox printer drivers if needed. For network Xerox printers, verify network connectivity and IP address.",
      link: "/faq"
    },
    {
      question: "How do I connect my Xerox printer to network?",
      answer: "To connect Xerox printer to network, use Xerox CentreWare or Xerox Mobile Print app. Configure your Xerox printer's network settings through the control panel, navigate to Network settings, select your network, and enter credentials. For Xerox VersaLink and WorkCentre models, you can use automatic network detection.",
      link: "/faq"
    },
    {
      question: "How do I install Xerox printer drivers on Windows?",
      answer: "To install Xerox printer drivers, download Xerox Print Drivers from Xerox's official website. Alternatively, use Windows Update (Settings > Update & Security > Windows Update), download Xerox printer drivers from Xerox Support website, or use Xerox CentreWare for automated Xerox driver installation and network setup.",
      link: "/faq"
    },
    {
      question: "What Xerox printer error codes mean and how to fix them?",
      answer: "Common Xerox printer error codes include 016-733 (Xerox paper jam), 016-740 (Xerox toner low), 016-747 (Xerox drum unit issue), and 016-750 (Xerox fuser error). Fix Xerox error codes by checking Xerox printer status, clearing paper jams, replacing Xerox toner cartridges, or replacing Xerox drum unit. Use Xerox CentreWare for error resolution.",
      link: "/faq"
    },
    {
      question: "How do I fix Xerox printer print quality issues?",
      answer: "To fix Xerox printer print quality, run Xerox printer cleaning cycle from Xerox CentreWare or printer control panel. Check Xerox toner levels and replace if low. Clean Xerox print components using Xerox maintenance utilities. Ensure correct paper type settings for your Xerox printer. If Xerox print quality issues persist, Xerox drum unit or fuser may need replacement.",
      link: "/faq"
    },
    {
      question: "How do I configure Xerox printer for enterprise use?",
      answer: "To configure Xerox printer for enterprise use, use Xerox CentreWare for centralized management. Set up Xerox printer security settings, configure Xerox print queues, enable Xerox user authentication, and configure Xerox printer monitoring. Use Xerox Mobile Print for mobile printing capabilities across your organization.",
      link: "/faq"
    }
  ],
  samsung: [
    {
      question: "How do I fix my Samsung printer when it shows offline status?",
      answer: "To fix Samsung printer offline issues, check Samsung printer power and USB/WiFi connections. In Windows Settings > Devices > Printers, right-click your Samsung printer and select 'Use printer online'. Restart the Print Spooler service or reinstall Samsung printer drivers if needed. For wireless Samsung printers, ensure they're connected to the same WiFi network.",
      link: "/faq"
    },
    {
      question: "How do I connect my Samsung printer to WiFi network?",
      answer: "To connect Samsung printer to WiFi, use Samsung Mobile Print app on your phone or computer. Alternatively, access your Samsung printer's control panel, navigate to Network or Wireless settings, select your WiFi network, and enter the password. For Samsung Xpress and ProXpress models, you can use WPS button method.",
      link: "/faq"
    },
    {
      question: "How do I install Samsung printer drivers on Windows?",
      answer: "To install Samsung printer drivers, download Samsung Printer Software from Samsung's official website. Alternatively, use Windows Update (Settings > Update & Security > Windows Update), download Samsung printer drivers from Samsung Support website, or use Samsung Easy Printer Manager for automated Samsung driver installation.",
      link: "/faq"
    },
    {
      question: "What Samsung printer error codes mean and how to fix them?",
      answer: "Common Samsung printer error codes include 11-1111 (Samsung paper jam), 11-1212 (Samsung toner low), 11-1313 (Samsung drum unit issue), and 11-1414 (Samsung fuser error). Fix Samsung error codes by checking Samsung printer status, clearing paper jams, replacing Samsung toner cartridges, or replacing Samsung drum unit.",
      link: "/faq"
    },
    {
      question: "How do I fix Samsung printer print quality issues?",
      answer: "To fix Samsung printer print quality, run Samsung printer cleaning cycle from Samsung Easy Printer Manager or printer control panel. Check Samsung toner levels and replace if low. Clean Samsung print components using Samsung Printer Software. Ensure correct paper type settings for your Samsung printer. If Samsung print quality issues persist, Samsung drum unit may need replacement.",
      link: "/faq"
    },
    {
      question: "How do I use Samsung Mobile Print app?",
      answer: "To use Samsung Mobile Print app, download it from App Store or Google Play. Connect your Samsung printer to the same WiFi network as your mobile device. Open Samsung Mobile Print app, select your Samsung printer, and print documents or photos directly from your mobile device. Samsung Mobile Print supports printing from cloud services and email attachments.",
      link: "/faq"
    }
  ]
};

export default function BlogPostSidebars({ children, brand = null, relatedPosts = [] }) {
  const [blogPosts, setBlogPosts] = useState([]);
  const [headings, setHeadings] = useState([]);
  const [activeHeading, setActiveHeading] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const contentRef = useRef(null);

  useEffect(() => {
    fetch('/data/blogPosts.json')
      .then(res => res.json())
      .then(setBlogPosts);
  }, []);

  useEffect(() => {
    // Extract headings from the blog post content
    const extractHeadings = () => {
      if (contentRef.current) {
        const headingElements = contentRef.current.querySelectorAll('h2, h3');
        const extractedHeadings = Array.from(headingElements).map((heading, index) => {
          // Generate ID if not present
          let id = heading.id;
          if (!id) {
            id = heading.textContent
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, '-')
              .replace(/^-|-$/g, '') || `heading-${index}`;
            heading.id = id;
          }
          return {
            id,
            text: heading.textContent,
            level: heading.tagName.toLowerCase()
          };
        });
        setHeadings(extractedHeadings);
        
        // Set first heading as active initially
        if (extractedHeadings.length > 0) {
          setActiveHeading(extractedHeadings[0].id);
        }
      }
    };

    // Try immediately and after a short delay to ensure DOM is ready
    extractHeadings();
    const timer = setTimeout(extractHeadings, 200);
    const timer2 = setTimeout(extractHeadings, 500);

    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
    };
  }, [children]);

  useEffect(() => {
    // Handle scroll to update active heading
    const handleScroll = () => {
      if (headings.length === 0) return;

      const scrollPosition = window.scrollY + 200; // Offset for sticky header

      for (let i = headings.length - 1; i >= 0; i--) {
        const element = document.getElementById(headings[i].id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveHeading(headings[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [headings]);

  const scrollToHeading = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 120; // Offset for sticky header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveHeading(id);
    }
  };

  return (
    <div className="blog-post-with-sidebars">
      <div className="container-fluid">
        <div className="row">
          {/* Main Content - FIRST in HTML for SEO (but visually positioned in center) */}
          <main className={`blog-post-main-content ${(headings.length > 0 || relatedPosts.length > 0) ? 'col-lg-6' : 'col-lg-9'} ${(headings.length > 0 || relatedPosts.length > 0) ? 'order-lg-2' : 'order-lg-1'}`} ref={contentRef}>
            {children}
          </main>

          {/* Left Sidebar - Table of Contents and Related Articles - AFTER main content in HTML */}
          {(headings.length > 0 || relatedPosts.length > 0) && (
            <aside className="col-lg-3 blog-toc-sidebar order-lg-1">
              {headings.length > 0 && (
                <div className="blog-toc-container">
                  <h3 className="blog-toc-title">Table of Contents</h3>
                  <nav className="blog-toc-nav">
                    <ul className="blog-toc-list">
                      {headings.map((heading) => (
                        <li
                          key={heading.id}
                          className={`blog-toc-item ${heading.level === 'h3' ? 'blog-toc-item-nested' : ''} ${activeHeading === heading.id ? 'active' : ''}`}
                        >
                          <a
                            href={`#${heading.id}`}
                            onClick={(e) => {
                              e.preventDefault();
                              scrollToHeading(heading.id);
                            }}
                            className="blog-toc-link"
                          >
                            {heading.text}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              )}
              
              {relatedPosts.length > 0 && (
                <div className="blog-related-articles-sidebar">
                  <h3 className="blog-related-articles-title">Related Articles</h3>
                  <div className="blog-related-articles-search" role="search" aria-label="Search related articles">
                    <label htmlFor="sidebar-search-input" className="sr-only">
                      Search all articles
                    </label>
                    <input
                      id="sidebar-search-input"
                      type="search"
                      className="blog-related-articles-search-input"
                      placeholder="Search all articles..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      aria-label="Search all articles"
                    />
                    <span className="blog-related-articles-search-icon" aria-hidden="true">🔍</span>
                  </div>
                  <div className="blog-related-articles-list">
                    {(() => {
                      // If search query exists, search all blog posts; otherwise show related posts
                      const postsToShow = searchQuery.trim() 
                        ? blogPosts.filter(post => {
                            const query = searchQuery.toLowerCase().trim();
                            // Remove HTML tags from content for searching
                            const contentText = post.content ? post.content.replace(/<[^>]*>/g, '').toLowerCase() : '';
                            return (
                              post.title.toLowerCase().includes(query) ||
                              post.excerpt.toLowerCase().includes(query) ||
                              (post.keywords && post.keywords.toLowerCase().includes(query)) ||
                              contentText.includes(query)
                            );
                          }).slice(0, 10) // Limit to 10 results for sidebar
                        : relatedPosts;

                      if (postsToShow.length === 0 && searchQuery.trim()) {
                        return (
                          <div id="sidebar-no-results" className="blog-related-articles-no-results" role="status" aria-live="polite">
                            No articles found matching "{searchQuery}"
                          </div>
                        );
                      }

                      return postsToShow.map((post) => (
                        <Link 
                          key={post.id} 
                          href={`/blog/${post.slug}`} 
                          className="blog-related-article-item"
                        >
                          <h4>{post.title}</h4>
                          <p>{post.excerpt}</p>
                        </Link>
                      ));
                    })()}
                    {searchQuery.trim() && blogPosts.filter(post => {
                      const query = searchQuery.toLowerCase().trim();
                      const contentText = post.content ? post.content.replace(/<[^>]*>/g, '').toLowerCase() : '';
                      return (
                        post.title.toLowerCase().includes(query) ||
                        post.excerpt.toLowerCase().includes(query) ||
                        (post.keywords && post.keywords.toLowerCase().includes(query)) ||
                        contentText.includes(query)
                      );
                    }).length > 10 && (
                      <Link 
                        href={`/blog?search=${encodeURIComponent(searchQuery)}`}
                        className="blog-related-articles-view-all"
                      >
                        View All Results →
                      </Link>
                    )}
                  </div>
                </div>
              )}
            </aside>
          )}

          {/* Right Sidebar - FAQ - AFTER main content in HTML */}
          <aside className={`col-lg-3 blog-faq-sidebar ${(headings.length === 0 && relatedPosts.length === 0) ? 'offset-lg-0' : ''} order-lg-3`}>
            <div className="blog-faq-sidebar-container">
              <h3 className="blog-faq-sidebar-title">
                {brand ? `${brand.toUpperCase()} Printer FAQs` : 'Related FAQs'}
              </h3>
              <div className="blog-faq-sidebar-list">
                {(brand && brandSpecificFAQs[brand.toLowerCase()] 
                  ? brandSpecificFAQs[brand.toLowerCase()] 
                  : allFAQs
                ).slice(0, 6).map((faq, index) => (
                  <div key={index} className="blog-faq-sidebar-item">
                    <h4 className="blog-faq-sidebar-question">
                      <Link href={faq.link || '/faq'}>
                        {faq.question}
                      </Link>
                    </h4>
                    <p className="blog-faq-sidebar-answer">{faq.answer}</p>
                  </div>
                ))}
              </div>
              <div className="blog-faq-sidebar-cta">
                <Link href="/faq" className="btn btn-primary">
                  View All FAQs
                </Link>
                <a href="tel:+1-888-423-7757" className="btn btn-outline-primary">
                  Call Support: +1-888-423-7757
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}


