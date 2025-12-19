# Complete Guide: Replace React.js with Next.js on Server

## 📋 Overview

This guide will help you replace your existing React.js website with the new Next.js version on your remote server.

**Key Differences:**
- **React Build:** `build/` folder with `static/` subfolder
- **Next.js Build:** `out/` folder with `_next/` subfolder
- **File Structure:** Next.js uses different file organization

---

## ✅ Step 1: Build Your Next.js Project

Make sure you have a fresh build:

```bash
# Navigate to project directory
cd C:\Users\Shekhu\Documents\Apps\printerzsupport

# Create optimized build
npm run build
```

**Expected Output:**
- Build completes successfully
- `out/` folder is created with all static files
- No errors in the build process

---

## 🗑️ Step 2: Backup Current Site (Recommended)

**Before deleting anything, backup your current site:**

### Option A: Download via FTP
1. Connect to your server via FTP (FileZilla, WinSCP, etc.)
2. Download entire `public_html/` or website root folder
3. Save to a backup location on your computer

### Option B: cPanel Backup
1. Log into cPanel
2. Go to **Backup** section
3. Download **Home Directory** backup

---

## 🧹 Step 3: Clean Server - Delete Old React Files

**Connect to your server and delete these old React.js files:**

### Files/Folders to DELETE:

1. **Old React Build Folder:**
   - `build/` folder (entire folder)
   - `static/` folder (if in root)

2. **Old HTML Files:**
   - Old `index.html` (will be replaced)
   - Any old page HTML files

3. **Old Assets:**
   - Old CSS files (e.g., `main.*.css`)
   - Old JS files (e.g., `main.*.js`)
   - Old chunk files

4. **Keep These (if they exist):**
   - `.htaccess` file (if you have custom rules)
   - Custom configuration files
   - Database files (if any)

### How to Delete:

**Via FTP (FileZilla/WinSCP):**
1. Connect to server
2. Navigate to `public_html/` or website root
3. Select files/folders to delete
4. Right-click → Delete

**Via cPanel File Manager:**
1. Log into cPanel
2. Open **File Manager**
3. Navigate to `public_html`
4. Select files/folders
5. Click **Delete**

---

## 📤 Step 4: Upload Next.js Build Files

### What to Upload:

Upload **ALL contents** from the `out/` folder to your server's root directory.

### Upload Methods:

#### Method 1: FTP Client (FileZilla/WinSCP) - Recommended

1. **Connect to Server:**
   - Host: Your server IP or domain
   - Username: Your FTP username
   - Password: Your FTP password
   - Port: 21 (FTP) or 22 (SFTP)

2. **Navigate to Website Root:**
   - Local (left panel): Navigate to `C:\Users\Shekhu\Documents\Apps\printerzsupport\out\`
   - Remote (right panel): Navigate to `public_html/` or your website root

3. **Upload All Files:**
   - Select ALL files and folders in `out/` folder
   - Drag and drop to remote panel
   - OR right-click → Upload
   - Wait for upload to complete

4. **Important:**
   - Upload the **contents** of `out/` folder, not the `out` folder itself
   - `index.html` should be in the root directory
   - `_next/` folder should be in the root directory

#### Method 2: cPanel File Manager

1. **Log into cPanel**
2. **Open File Manager**
3. **Navigate to `public_html`**
4. **Click Upload button**
5. **Select all files from `out/` folder:**
   - Select multiple files (Ctrl+Click or Shift+Click)
   - Upload in batches if needed
6. **Upload folders:**
   - Upload `_next/` folder (entire folder)
   - Upload `blog/` folder (entire folder)
   - Upload other page folders if they exist

#### Method 3: Command Line (SSH/SCP)

```bash
# Upload all files from out/ folder to server
scp -r out/* username@your-server.com:/var/www/html/

# Or using SFTP
sftp username@your-server.com
cd /var/www/html/
put -r out/*
```

---

## 📁 Step 5: File Structure Verification

After upload, your server root should look like this:

```
public_html/ (or website root)
├── index.html                    ✅ Main homepage
├── about.html                    ✅ About page
├── services.html                 ✅ Services page
├── contact.html                  ✅ Contact page
├── blog.html                     ✅ Blog listing
├── faq.html                      ✅ FAQ page
├── robots.txt                    ✅ SEO file
├── sitemap.xml                   ✅ SEO file
├── favicon.ico                   ✅ Favicon
├── manifest.json                 ✅ PWA manifest
├── hero-printer.svg              ✅ Hero image
├── _next/                        ✅ Next.js assets folder
│   ├── static/
│   │   ├── chunks/              (JS files)
│   │   └── css/                 (CSS files)
│   └── [other Next.js files]
├── blog/                         ✅ Blog posts folder
│   ├── how-to-fix-printer-offline-issues.html
│   ├── wireless-printer-setup-guide.html
│   └── [other blog posts]
└── [other page folders if exist]
```

---

## ✅ Step 6: Verify Upload

### 1. Check File Dates
- All files should show today's date
- If files show old dates → upload didn't complete

### 2. Test Website URLs

Visit these URLs to verify everything works:

- ✅ `https://www.printerzsupport.com/` - Homepage
- ✅ `https://www.printerzsupport.com/about` - About page
- ✅ `https://www.printerzsupport.com/services` - Services page
- ✅ `https://www.printerzsupport.com/blog` - Blog listing
- ✅ `https://www.printerzsupport.com/blog/how-to-fix-printer-offline-issues` - Blog post
- ✅ `https://www.printerzsupport.com/faq` - FAQ page
- ✅ `https://www.printerzsupport.com/contact` - Contact page
- ✅ `https://www.printerzsupport.com/sitemap.xml` - Sitemap
- ✅ `https://www.printerzsupport.com/robots.txt` - Robots file

### 3. Check Browser Console

1. Open website in browser
2. Press `F12` to open Developer Tools
3. Go to **Console** tab
4. Check for errors:
   - ❌ No 404 errors for CSS files
   - ❌ No 404 errors for JS files
   - ❌ No 404 errors for fonts
   - ✅ All assets load correctly

### 4. Check Network Tab

1. Open Developer Tools (`F12`)
2. Go to **Network** tab
3. Refresh page (`Ctrl+F5`)
4. Check that all files load with status `200 OK`

---

## 🔄 Step 7: Clear Caches

### Browser Cache:
- **Hard Refresh:** `Ctrl+F5` (Windows) or `Cmd+Shift+R` (Mac)
- **Or use Incognito/Private mode** to test

### CDN Cache (if using Cloudflare or similar):
1. Log into CDN dashboard
2. Go to **Caching** section
3. Click **Purge Everything** or **Clear All Cache**
4. Wait 30 seconds
5. Test website again

### Server Cache:
- Some hosting providers cache files
- Wait 5-10 minutes if changes don't appear immediately
- Contact hosting support if needed

---

## 🚨 Troubleshooting

### Issue: 404 Errors on Pages

**Problem:** Pages like `/about` show 404 error

**Solution:**
- Verify `about.html` exists in root directory
- Check file permissions (should be 644)
- Clear browser cache
- Check server error logs

### Issue: CSS/JS Not Loading

**Problem:** Website loads but styles are broken

**Solution:**
1. Check `_next/` folder is uploaded correctly
2. Verify file paths in browser DevTools → Network tab
3. Check file permissions (644 for files, 755 for folders)
4. Verify `_next/static/` folder structure is intact

### Issue: Old Content Still Showing

**Problem:** Website shows old React.js content

**Solution:**
1. Hard refresh browser (`Ctrl+F5`)
2. Clear CDN cache (if using Cloudflare)
3. Verify new files are actually uploaded (check file dates)
4. Check if server has caching enabled

### Issue: Images Not Loading

**Problem:** Images from `public/` folder not showing

**Solution:**
1. Verify images are in root directory (not in `public/` subfolder)
2. Check image file paths in HTML source
3. Verify file permissions (644)
4. Check image file names match exactly (case-sensitive)

---

## 📊 Comparison: React vs Next.js

### React.js Build Structure:
```
build/
├── index.html
├── static/
│   ├── css/
│   │   └── main.*.css
│   └── js/
│       └── main.*.js
└── [other files]
```

### Next.js Build Structure:
```
out/
├── index.html
├── about.html
├── services.html
├── _next/
│   ├── static/
│   │   ├── chunks/    (JS files)
│   │   └── css/       (CSS files)
│   └── [other files]
└── [other files]
```

**Key Differences:**
- ✅ Next.js generates separate HTML files for each page
- ✅ Next.js uses `_next/` instead of `static/`
- ✅ Next.js has better SEO (pre-rendered HTML)
- ✅ Next.js has automatic code splitting

---

## ✅ Final Checklist

Before considering the migration complete:

- [ ] Fresh Next.js build created (`npm run build`)
- [ ] Old React.js files deleted from server
- [ ] All files from `out/` folder uploaded
- [ ] `index.html` is in root directory
- [ ] `_next/` folder is in root directory
- [ ] `robots.txt` and `sitemap.xml` uploaded
- [ ] All pages load correctly (no 404 errors)
- [ ] CSS and JS files load correctly
- [ ] Images display correctly
- [ ] Browser console shows no errors
- [ ] Caches cleared (browser and CDN)
- [ ] Website tested on mobile devices

---

## 🎉 Success!

If all steps are completed and verified, your Next.js website is now live and replacing your React.js website!

**Benefits you now have:**
- ✅ Better SEO (server-side rendering)
- ✅ Faster page loads
- ✅ Better performance scores
- ✅ Automatic code splitting
- ✅ Optimized images and fonts

---

## 📞 Need Help?

If you encounter issues:
1. Check browser console for errors
2. Verify file uploads completed
3. Check file permissions
4. Clear all caches
5. Contact hosting support if needed

