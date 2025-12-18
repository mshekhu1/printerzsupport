# Deployment Guide for Printer Support Website

## Current Status
✅ Build completed successfully in `/build` folder
❌ Live site at https://www.printerzsupport.com/ needs to be updated

## Quick Deployment Steps

### Option 1: Manual FTP/SFTP Upload (Most Common)
1. **Connect to your hosting server** via FTP/SFTP (FileZilla, WinSCP, etc.)
2. **Navigate to your website's root directory** (usually `public_html`, `www`, or `htdocs`)
3. **Upload the entire `/build` folder contents** to the root directory
   - Upload all files from `build/` folder
   - Make sure `index.html` is in the root
   - Upload `static/` folder with all its contents
   - Upload `sitemap.xml`, `robots.txt`, `manifest.json`, etc.

### Option 2: cPanel File Manager
1. Log into your cPanel
2. Open **File Manager**
3. Navigate to `public_html` or your domain's root folder
4. **Delete old files** (or backup first)
5. **Upload** all files from the `build/` folder
6. Extract if needed and move files to root

### Option 3: Git Deployment (If using GitHub/Netlify/Vercel)
```bash
# If using Git
git add .
git commit -m "Update with SEO optimizations and blog"
git push origin main

# Netlify/Vercel will auto-deploy
```

### Option 4: Command Line (SSH)
```bash
# Connect via SSH
ssh user@your-server.com

# Navigate to website directory
cd /var/www/html  # or your website path

# Upload build folder (from local machine)
scp -r build/* user@your-server.com:/var/www/html/
```

## Important Files to Deploy

Make sure these files are uploaded:
- ✅ `index.html` (main entry point)
- ✅ `static/` folder (all CSS and JS files)
- ✅ `sitemap.xml` (SEO)
- ✅ `robots.txt` (SEO)
- ✅ `manifest.json` (PWA)
- ✅ All images (favicon, logos, hero-printer.svg)

## After Deployment

### 1. Clear Browser Cache
- **Chrome/Edge**: Ctrl+Shift+Delete → Clear cached images and files
- **Firefox**: Ctrl+Shift+Delete → Cache
- Or use **Incognito/Private mode** to test

### 2. Clear CDN Cache (If using CDN)
- Cloudflare: Purge Everything in Caching settings
- AWS CloudFront: Invalidate cache
- Other CDNs: Check their cache purge options

### 3. Verify Deployment
Visit these URLs to verify:
- https://www.printerzsupport.com/ (Home)
- https://www.printerzsupport.com/blog (Blog)
- https://www.printerzsupport.com/faq (FAQ)
- https://www.printerzsupport.com/sitemap.xml (Sitemap)

### 4. Check File Dates
- Right-click → View Page Source
- Check if JavaScript/CSS files have new hash names
- New build should have: `main.9a374976.js` (your new hash)

## Troubleshooting

### Site Still Shows Old Content?
1. **Hard Refresh**: Ctrl+F5 (Windows) or Cmd+Shift+R (Mac)
2. **Clear Browser Cache**: See step 1 above
3. **Check CDN Cache**: Purge if using CDN
4. **Verify Files Uploaded**: Check file dates on server
5. **Check .htaccess**: Ensure it's routing to index.html correctly

### React Router 404 Errors?
Add this `.htaccess` file to your root directory:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

### Files Not Loading?
- Check file permissions (should be 644 for files, 755 for folders)
- Verify paths are correct (case-sensitive on Linux servers)
- Check server error logs

## Deployment Checklist

- [ ] Build completed successfully (`npm run build`)
- [ ] All files from `build/` folder uploaded to server
- [ ] `index.html` is in root directory
- [ ] `static/` folder uploaded with all contents
- [ ] `sitemap.xml` accessible at `/sitemap.xml`
- [ ] `robots.txt` accessible at `/robots.txt`
- [ ] Browser cache cleared
- [ ] CDN cache purged (if applicable)
- [ ] Tested all pages (Home, About, Services, Blog, FAQ, Contact)
- [ ] Tested blog post pages
- [ ] Verified SEO meta tags in page source
- [ ] Checked structured data with Google Rich Results Test

## Testing After Deployment

1. **View Page Source** - Check for new meta tags
2. **Google Rich Results Test**: https://search.google.com/test/rich-results
3. **PageSpeed Insights**: https://pagespeed.web.dev/
4. **Mobile-Friendly Test**: https://search.google.com/test/mobile-friendly

## Need Help?

If you're still having issues:
1. Check your hosting provider's documentation
2. Contact your hosting support
3. Verify you have the correct file permissions
4. Check server error logs

---

**Note**: The build folder contains all optimized files ready for production. Just upload it to your server!

