# Build Folder Upload Guide

**Date:** December 18, 2024  
**Build Status:** ✅ Ready to upload  
**Build Location:** `build/` folder

## Quick Upload Checklist

- [x] Build completed successfully
- [x] `.htaccess` file created (for React Router)
- [x] All files optimized and ready
- [ ] Connect to web server via FTP/SFTP
- [ ] Upload all files from `build/` folder
- [ ] Verify `.htaccess` uploaded (may be hidden)
- [ ] Clear browser cache
- [ ] Test website

## Step-by-Step Upload Instructions

### Method 1: Using FileZilla (Recommended for Windows)

1. **Download FileZilla** (if not installed)
   - Visit: https://filezilla-project.org/
   - Download FileZilla Client

2. **Connect to Your Server**
   - Open FileZilla
   - Enter your FTP credentials:
     - **Host:** Your server IP or FTP hostname (e.g., `ftp.printerzsupport.com`)
     - **Username:** Your FTP username
     - **Password:** Your FTP password
     - **Port:** 21 (FTP) or 22 (SFTP)
   - Click "Quickconnect"

3. **Navigate to Website Root**
   - On the right side (Remote site), navigate to:
     - `public_html/` (most common)
     - `www/`
     - `htdocs/`
     - Or your domain's root folder

4. **Upload Files**
   - On the left side (Local site), navigate to: `C:\Users\Shekhu\Documents\Apps\printerzsupport\build`
   - Select ALL files and folders in the `build/` folder
   - Drag and drop to the remote site (right side)
   - Or right-click → Upload

5. **Important: Upload .htaccess**
   - `.htaccess` may be hidden by default
   - In FileZilla: Server → Force show hidden files
   - Make sure `.htaccess` is uploaded to the root

6. **Verify Upload**
   - Check that all files are uploaded
   - Verify file dates are recent
   - Ensure `index.html` is in the root directory

### Method 2: Using cPanel File Manager

1. **Log into cPanel**
   - Go to your hosting provider's cPanel login
   - Enter your credentials

2. **Open File Manager**
   - Find and click "File Manager" icon
   - Navigate to `public_html` or your domain folder

3. **Upload Files**
   - Click "Upload" button
   - Select all files from `build/` folder
   - Wait for upload to complete

4. **Extract if Needed**
   - If you uploaded a ZIP file, extract it
   - Move all files to root directory

5. **Upload .htaccess**
   - Click "Upload" again
   - Select `.htaccess` file
   - Make sure it's in the root directory

### Method 3: Using WinSCP (Windows)

1. **Download WinSCP** (if not installed)
   - Visit: https://winscp.net/
   - Download and install

2. **Connect to Server**
   - Open WinSCP
   - Enter connection details:
     - **File protocol:** SFTP or FTP
     - **Host name:** Your server IP or hostname
     - **User name:** Your FTP username
     - **Password:** Your FTP password
   - Click "Login"

3. **Upload Files**
   - Left panel: Navigate to `build/` folder
   - Right panel: Navigate to `public_html/` or root
   - Select all files and drag to right panel
   - Confirm upload

## Files to Upload

### Root Directory Files:
```
build/
├── index.html          ✅ Must be in root
├── .htaccess          ✅ Critical for React Router
├── favicon.ico
├── favicon.svg
├── hero-printer.svg
├── logo192.png
├── logo512.png
├── manifest.json
├── robots.txt
├── sitemap.xml
└── static/            ✅ Entire folder
    ├── css/
    │   ├── main.c088945e.css
    │   └── main.c088945e.css.map
    └── js/
        ├── 453.4e6ff1af.chunk.js
        ├── 453.4e6ff1af.chunk.js.map
        ├── main.e054a99f.js
        ├── main.e054a99f.js.LICENSE.txt
        └── main.e054a99f.js.map
```

## Critical Files

### 1. `.htaccess` File
- **Purpose:** Enables React Router to work correctly
- **Location:** Must be in root directory (same as `index.html`)
- **Visibility:** May be hidden - enable "Show hidden files"
- **Without it:** Routes like `/blog` and `/faq` will show 404 errors

### 2. `index.html`
- **Purpose:** Main entry point for React app
- **Location:** Must be in root directory
- **Critical:** Without it, website won't load

### 3. `static/` Folder
- **Purpose:** Contains all CSS and JavaScript files
- **Location:** Must be in root directory (same level as `index.html`)
- **Structure:** Keep the folder structure intact

## After Upload - Verification Steps

### 1. Test Homepage
- Visit: `https://www.printerzsupport.com/`
- Should load without errors
- Check browser console (F12) for errors

### 2. Test Routes
- Visit: `https://www.printerzsupport.com/blog`
- Visit: `https://www.printerzsupport.com/faq`
- Visit: `https://www.printerzsupport.com/services`
- All should load correctly (not 404)

### 3. Verify File Hashes
- Right-click → View Page Source
- Look for: `main.e054a99f.js` and `main.c088945e.css`
- If you see old hashes → files not uploaded correctly

### 4. Check Sitemap
- Visit: `https://www.printerzsupport.com/sitemap.xml`
- Should display XML sitemap

### 5. Clear Caches
- **Browser:** Press `Ctrl+F5` (hard refresh)
- **CDN:** If using Cloudflare, purge cache
- **Server:** Some hosts cache - wait 5-10 minutes

## Troubleshooting

### Issue: Routes Show 404
**Solution:**
- Verify `.htaccess` is uploaded
- Check file is in root directory
- Ensure Apache mod_rewrite is enabled
- Check file permissions (should be 644)

### Issue: Old Content Still Showing
**Solution:**
- Clear browser cache (Ctrl+F5)
- Clear CDN cache (if using Cloudflare)
- Verify new file hashes in page source
- Check file upload dates on server

### Issue: CSS/JS Not Loading
**Solution:**
- Verify `static/` folder is uploaded
- Check file paths in browser DevTools → Network
- Verify file permissions (644)
- Check `.htaccess` compression rules

### Issue: Website Shows Blank Page
**Solution:**
- Check browser console for errors (F12)
- Verify `index.html` is in root
- Check `static/js/main.e054a99f.js` exists
- Verify JavaScript is enabled

## File Permissions

After upload, set correct permissions:
- **Files:** 644 (rw-r--r--)
- **Folders:** 755 (rwxr-xr-x)
- **`.htaccess`:** 644

## Quick Command Reference

### Using SCP (if you have SSH access):
```bash
scp -r build/* username@your-server.com:/var/www/html/
```

### Using rsync (if you have SSH access):
```bash
rsync -avz build/ username@your-server.com:/var/www/html/
```

## Next Steps After Upload

1. ✅ Verify all pages load correctly
2. ✅ Test on mobile devices
3. ✅ Check SEO meta tags (View Page Source)
4. ✅ Submit sitemap to Google Search Console
5. ✅ Monitor for any errors

## Support

If you encounter issues:
1. Check server error logs (cPanel → Errors)
2. Verify file uploads completed
3. Check browser console for errors
4. Verify `.htaccess` is present and correct

---

**Build Location:** `C:\Users\Shekhu\Documents\Apps\printerzsupport\build`  
**Ready to Upload:** ✅ Yes  
**Total Files:** All optimized and ready

