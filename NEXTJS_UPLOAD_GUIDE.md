# Next.js Build Upload Guide

**Date:** December 19, 2024  
**Build Status:** ✅ Optimized production build ready  
**Build Location:** `out/` folder

## Build Summary

✅ **Build Completed Successfully**
- All pages generated as static HTML
- 18 routes pre-rendered
- Optimized and minified
- SEO-optimized with metadata

## Files to Upload

### Build Output Location
```
out/
├── index.html
├── about.html
├── services.html
├── contact.html
├── blog.html
├── faq.html
├── robots.txt
├── sitemap.xml
├── blog/
│   ├── how-to-fix-printer-offline-issues.html
│   ├── wireless-printer-setup-guide.html
│   └── [8 blog posts]
├── _next/
│   ├── static/
│   │   ├── css/ (optimized CSS files)
│   │   └── chunks/ (optimized JS files)
│   └── [other Next.js assets]
└── [other static assets]
```

## Upload Instructions

### Method 1: FTP/SFTP (Recommended)

1. **Connect to Your Server**
   - Use FileZilla, WinSCP, or any FTP client
   - Connect to your hosting server

2. **Navigate to Website Root**
   - Go to `public_html/`, `www/`, or your domain's root folder

3. **Upload All Files**
   - Upload **ALL contents** from the `out/` folder
   - Make sure `index.html` is in the root directory
   - Upload the entire `_next/` folder
   - Upload `robots.txt` and `sitemap.xml`

4. **Important Notes:**
   - Upload all files and folders from `out/` directory
   - Keep the folder structure intact
   - Don't upload the `out` folder itself, just its contents

### Method 2: cPanel File Manager

1. Log into cPanel
2. Open File Manager
3. Navigate to `public_html`
4. Upload all files from `out/` folder
5. Extract if needed and move to root

### Method 3: Command Line (SSH/SCP)

```bash
scp -r out/* username@your-server.com:/var/www/html/
```

## Key Differences from React Build

### Next.js Static Export:
- ✅ All pages are pre-rendered as static HTML
- ✅ Better SEO (server-side rendering)
- ✅ Faster initial page load
- ✅ Automatic code splitting
- ✅ Optimized images and fonts

### File Structure:
- `out/` folder contains all static files (instead of `build/`)
- `_next/` folder contains optimized assets (instead of `static/`)
- All HTML files are in the root (for main pages)

## After Upload - Verification

1. **Test Homepage:**
   - Visit: `https://www.printerzsupport.com/`
   - Should load immediately

2. **Test Routes:**
   - `/about` - About page
   - `/services` - Services page
   - `/blog` - Blog listing
   - `/blog/[slug]` - Individual blog posts
   - `/faq` - FAQ page
   - `/contact` - Contact page

3. **Check SEO Files:**
   - `/sitemap.xml` - Should display XML
   - `/robots.txt` - Should display text

4. **Verify Performance:**
   - Check page source for optimized assets
   - Verify fonts are loading (Inter & Poppins)
   - Check that animations work

## Server Configuration

### For Apache (.htaccess)

If you need client-side routing support, create `.htaccess` in the root:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>
```

### For Nginx

```nginx
location / {
  try_files $uri $uri.html $uri/ /index.html;
}
```

## Troubleshooting

### Issue: 404 on Routes
**Solution:** Configure server to redirect all routes to `index.html` (see .htaccess above)

### Issue: CSS/JS Not Loading
**Solution:** 
- Verify `_next/` folder is uploaded
- Check file paths in browser DevTools
- Verify file permissions (644 for files, 755 for folders)

### Issue: Images Not Loading
**Solution:**
- Check image paths in `public/` folder
- Verify images are uploaded to root
- Check file permissions

## Build Information

- **Framework:** Next.js 14.2.0
- **Output:** Static HTML export
- **Total Routes:** 18 pages
- **Blog Posts:** 8 pre-rendered
- **Optimization:** Enabled (compression, minification)

## Next Steps

1. ✅ Build completed
2. ⏳ Upload files to server
3. ⏳ Verify all pages work
4. ⏳ Test on mobile devices
5. ⏳ Submit sitemap to Google Search Console

---

**Build Location:** `C:\Users\Shekhu\Documents\Apps\printerzsupport\out`  
**Ready to Upload:** ✅ Yes  
**All files optimized and ready for production!**

