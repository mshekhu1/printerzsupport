// Forum discussions data with questions and answers

export const forumDiscussions = [
  {
    id: 1,
    title: "HP Printer Offline Issue - Can't Print Anything",
    question: "My HP OfficeJet 9015e shows as offline and won't print. I've tried restarting both the printer and computer, but it still shows offline. The printer is connected via WiFi. Any solutions?",
    author: "Sarah M.",
    authorRole: "Member",
    date: "2024-12-20",
    category: "HP Printers",
    tags: ["HP", "Offline", "Wireless", "Troubleshooting"],
    views: 1247,
    replies: 8,
    solved: true,
    answers: [
      {
        id: 1,
        author: "TechSupport_John",
        authorRole: "Expert",
        date: "2024-12-20",
        content: "This is a common issue with HP printers. Try these steps:\n\n1. Go to Windows Settings > Devices > Printers & scanners\n2. Find your HP printer and right-click it\n3. Select 'Use printer online'\n4. If that doesn't work, restart the Print Spooler service\n5. For WiFi issues, try reconnecting the printer to your network using HP Smart app",
        helpful: 45,
        verified: true
      },
      {
        id: 2,
        author: "Mike_R",
        authorRole: "Member",
        date: "2024-12-20",
        content: "I had the same problem last week! What worked for me was:\n- Unplugging the printer for 30 seconds\n- Removing the printer from Windows\n- Re-adding it using the printer's IP address\n\nYou can find the IP address by printing a network configuration page from the printer's menu.",
        helpful: 32,
        verified: false
      },
      {
        id: 3,
        author: "PrinterGuru",
        authorRole: "Expert",
        date: "2024-12-21",
        content: "If you're still having issues, check if your router's 2.4GHz band is enabled. Many HP printers don't support 5GHz WiFi. Also, make sure your printer firmware is up to date through HP Smart.",
        helpful: 28,
        verified: true
      }
    ]
  },
  {
    id: 2,
    title: "Canon Printer Paper Jam Won't Clear",
    question: "My Canon PIXMA TR8620 keeps showing a paper jam error, but I can't see any paper stuck. I've checked all the trays and the back panel. The error code is 1403. Help!",
    author: "David K.",
    authorRole: "Member",
    date: "2024-12-19",
    category: "Canon Printers",
    tags: ["Canon", "Paper Jam", "Error Code"],
    views: 892,
    replies: 6,
    solved: true,
    answers: [
      {
        id: 1,
        author: "CanonExpert",
        authorRole: "Expert",
        date: "2024-12-19",
        content: "Error 1403 usually means there's a small piece of paper stuck in the paper path that's hard to see. Here's what to do:\n\n1. Turn off and unplug the printer\n2. Open all access doors (front, back, and paper tray)\n3. Use a flashlight to look for tiny paper fragments\n4. Gently remove any debris with tweezers (be careful not to damage rollers)\n5. Check the automatic document feeder if your model has one\n6. Power cycle the printer after cleaning",
        helpful: 38,
        verified: true
      },
      {
        id: 2,
        author: "Lisa_T",
        authorRole: "Member",
        date: "2024-12-19",
        content: "I had this exact issue! There was a tiny piece of paper stuck behind the rollers that I couldn't see. I used compressed air to blow it out, and that fixed it. Just make sure the printer is off when you do this.",
        helpful: 25,
        verified: false
      }
    ]
  },
  {
    id: 3,
    title: "Epson Printer Printing Blank Pages",
    question: "My Epson EcoTank ET-2720 is printing blank pages even though the ink levels show as full. I've run the cleaning cycle multiple times but nothing helps. What's wrong?",
    author: "Jennifer L.",
    authorRole: "Member",
    date: "2024-12-18",
    category: "Epson Printers",
    tags: ["Epson", "Blank Pages", "Ink", "Print Quality"],
    views: 1156,
    replies: 7,
    solved: false,
    answers: [
      {
        id: 1,
        author: "EpsonSupport",
        authorRole: "Expert",
        date: "2024-12-18",
        content: "Blank pages usually indicate clogged print heads. Try this:\n\n1. Run the print head cleaning utility (Epson Printer Utility)\n2. If that doesn't work, do a deep cleaning (uses more ink)\n3. Check if the ink is actually flowing - you can do a nozzle check\n4. Make sure you're using genuine Epson ink\n5. If the print heads are severely clogged, you may need to soak them or replace them",
        helpful: 42,
        verified: true
      },
      {
        id: 2,
        author: "PrintFixer",
        authorRole: "Member",
        date: "2024-12-18",
        content: "I had this problem and it turned out the ink wasn't actually full - the sensor was faulty. Try refilling the tanks even if they look full. Also, make sure the printer hasn't been sitting unused for a long time, as the ink can dry up.",
        helpful: 19,
        verified: false
      }
    ]
  },
  {
    id: 4,
    title: "Brother Printer Not Connecting to WiFi",
    question: "I'm trying to set up my Brother MFC-L2750DW wirelessly, but it won't connect to my WiFi network. I've entered the password correctly multiple times. The printer has a WPS button - should I use that instead?",
    author: "Robert P.",
    authorRole: "Member",
    date: "2024-12-17",
    category: "Brother Printers",
    tags: ["Brother", "WiFi", "Network", "Setup"],
    views: 743,
    replies: 5,
    solved: true,
    answers: [
      {
        id: 1,
        author: "NetworkPro",
        authorRole: "Expert",
        date: "2024-12-17",
        content: "Yes, WPS is often easier! Here's how:\n\n1. Press the WPS button on your router\n2. Within 2 minutes, press and hold the WPS button on your Brother printer for 2-3 seconds\n3. Wait for the WiFi light to stop blinking\n\nIf WPS doesn't work:\n- Make sure your router's 2.4GHz band is enabled (Brother printers typically don't support 5GHz)\n- Try using the Brother iPrint&Scan app for easier setup\n- Check if your WiFi password has special characters that might cause issues",
        helpful: 35,
        verified: true
      }
    ]
  },
  {
    id: 5,
    title: "Lexmark Printer Driver Installation Failed",
    question: "I'm trying to install drivers for my Lexmark MS421dn on Windows 11, but the installation keeps failing with error code 0x80070005. I've tried running as administrator and disabling antivirus. Any ideas?",
    author: "Amanda S.",
    authorRole: "Member",
    date: "2024-12-16",
    category: "Lexmark Printers",
    tags: ["Lexmark", "Drivers", "Windows 11", "Installation"],
    views: 634,
    replies: 4,
    solved: true,
    answers: [
      {
        id: 1,
        author: "WindowsExpert",
        authorRole: "Expert",
        date: "2024-12-16",
        content: "Error 0x80070005 is a permissions error. Try this:\n\n1. Completely uninstall any existing Lexmark drivers first\n2. Download the latest Windows 11 compatible drivers from Lexmark's website\n3. Right-click the installer and select 'Run as administrator'\n4. If it still fails, try installing via Windows Settings > Printers & scanners > Add printer\n5. Windows 11 might have built-in drivers that work better",
        helpful: 29,
        verified: true
      }
    ]
  },
  {
    id: 6,
    title: "Xerox Printer Showing 'Service Required' Error",
    question: "My Xerox VersaLink B405 has a red 'Service Required' light and won't print. The error message says 'Replace Maintenance Kit'. Is this something I can fix myself or do I need a technician?",
    author: "Michael B.",
    authorRole: "Member",
    date: "2024-12-15",
    category: "Xerox Printers",
    tags: ["Xerox", "Service", "Maintenance", "Error"],
    views: 521,
    replies: 3,
    solved: false,
    answers: [
      {
        id: 1,
        author: "XeroxTech",
        authorRole: "Expert",
        date: "2024-12-15",
        content: "The maintenance kit contains parts like rollers and fuser components that wear out over time. You can order a maintenance kit and replace it yourself if you're comfortable with printer maintenance. However, if you're not experienced, I'd recommend having a technician do it to avoid damaging the printer. The kit replacement is straightforward but requires opening the printer and following specific steps.",
        helpful: 18,
        verified: true
      }
    ]
  },
  {
    id: 7,
    title: "Samsung Printer Printing Faded Text",
    question: "My Samsung Xpress M2020W is printing very faded text, especially on the edges. I've replaced the toner cartridge, but it didn't help. The printer is only 6 months old.",
    author: "Patricia W.",
    authorRole: "Member",
    date: "2024-12-14",
    category: "Samsung Printers",
    tags: ["Samsung", "Faded", "Print Quality", "Toner"],
    views: 678,
    replies: 5,
    solved: true,
    answers: [
      {
        id: 1,
        author: "PrintQualityGuru",
        authorRole: "Expert",
        date: "2024-12-14",
        content: "Faded printing on a new printer usually indicates:\n\n1. Toner cartridge not properly seated - remove and reinstall it\n2. Low toner density setting - check printer settings and increase if needed\n3. Paper type mismatch - make sure you're using the correct paper type setting\n4. Transfer roller issue - may need cleaning or replacement\n5. Try running the printer's calibration/alignment utility\n\nSince it's new, it might be a defective toner cartridge. Try a different one if possible.",
        helpful: 31,
        verified: true
      }
    ]
  },
  {
    id: 8,
    title: "Wireless Printer Setup on Mac - Printer Not Found",
    question: "I'm trying to add my HP Envy 6055e to my MacBook Pro, but it doesn't show up in the Printers & Scanners list. The printer is connected to WiFi and works fine from my iPhone. What am I missing?",
    author: "Chris H.",
    authorRole: "Member",
    date: "2024-12-13",
    category: "Mac Support",
    tags: ["Mac", "Wireless", "HP", "Setup"],
    views: 945,
    replies: 6,
    solved: true,
    answers: [
      {
        id: 1,
        author: "MacPrinterExpert",
        authorRole: "Expert",
        date: "2024-12-13",
        content: "On Mac, you often need to add the printer manually:\n\n1. Go to System Preferences > Printers & Scanners\n2. Click the '+' button\n3. Select the 'IP' tab (not the default tab)\n4. Enter your printer's IP address (you can find this by printing a network configuration page from the printer)\n5. Select the protocol (usually 'HP Jetdirect - Socket' for HP printers)\n6. Click Add\n\nmacOS will automatically download the drivers. If it still doesn't work, make sure both devices are on the same network.",
        helpful: 41,
        verified: true
      }
    ]
  }
];

export const getDiscussionById = (id) => {
  return forumDiscussions.find(discussion => discussion.id === parseInt(id));
};

export const getDiscussionsByCategory = (category) => {
  return forumDiscussions.filter(discussion => discussion.category === category);
};

export const getDiscussionsByTag = (tag) => {
  return forumDiscussions.filter(discussion => 
    discussion.tags.some(t => t.toLowerCase() === tag.toLowerCase())
  );
};

export const categories = [
  "All Categories",
  "HP Printers",
  "Canon Printers",
  "Epson Printers",
  "Brother Printers",
  "Lexmark Printers",
  "Xerox Printers",
  "Samsung Printers",
  "Mac Support",
  "Windows Support",
  "General Troubleshooting"
];

