# Clean Upload Guide for Next.js Build

This guide shows you how to do a clean upload - removing old files and uploading fresh build.

## Step 1: Clean Local Build

### Remove Old Build Files
```bash
# Remove previous build
Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force out -ErrorAction SilentlyContinue

# Create fresh build
npm run build
```

## Step 2: Clean Server Before Upload

### Option A: Delete Old Files via FTP (Recommended)

**Using FileZilla:**
1. Connect to your server
2. Navigate to `public_html/` or website root
3. **Delete these old files/folders:**
   - Old `index.html` (if exists)
   - Old `static/` folder (from React build)
   - Old `build/` folder (if exists)
   - Old `_next/` folder (if exists from previous Next.js build)
   - Old CSS/JS files with different hashes

4. **Keep these (if they exist):**
   - `.htaccess` file (if you have one)
   - `robots.txt` (will be replaced)
   - `sitemap.xml` (will be replaced)
   - `public/` folder assets (images, etc.)

### Option B: Backup Then Clean

1. **Backup current site:**
   ```bash
   # Via FTP, download current site to backup folder
   ```

2. **Delete everything in public_html:**
   - Delete all files and folders
   - Keep only `.htaccess` if needed

3. **Upload fresh build:**
   - Upload all files from `out/` folder

## Step 3: Upload Process

### Clean Upload Checklist

1. ✅ **Clean local build** (remove `.next` and `out` folders)
2. ✅ **Create fresh build** (`npm run build`)
3. ✅ **Connect to server** via FTP/SFTP
4. ✅ **Backup current site** (optional but recommended)
5. ✅ **Delete old files** from server:
   - Old HTML files
   - Old `_next/` or `static/` folders
   - Old CSS/JS files
6. ✅ **Upload new files** from `out/` folder
7. ✅ **Verify upload** - check file dates
8. ✅ **Test website** - visit all pages

## Step 4: Files to Delete on Server

### From Old React Build:
- `static/` folder
- `build/` folder
- Old `main.*.js` files
- Old `main.*.css` files

### From Previous Next.js Build:
- `_next/` folder (old version)
- Old HTML files with different structure

### Keep These:
- `.htaccess` (if configured)
- Custom configuration files
- Database files (if any)

## Step 5: Upload New Files

### What to Upload from `out/` folder:

**Root Files:**
```
index.html
about.html
services.html
contact.html
blog.html
faq.html
robots.txt
sitemap.xml
favicon.ico
manifest.json
```

**Folders:**
```
_next/          (entire folder - contains optimized assets)
blog/           (all blog post HTML files)
about/          (if exists)
services/       (if exists)
contact/        (if exists)
faq/            (if exists)
```

## Step 6: Verification After Upload

### Check File Dates
- All files should have today's date
- If old dates → files not uploaded correctly

### Test Pages
1. Homepage: `https://www.printerzsupport.com/`
2. Blog: `https://www.printerzsupport.com/blog`
3. Sitemap: `https://www.printerzsupport.com/sitemap.xml`
4. Robots: `https://www.printerzsupport.com/robots.txt`

### Check Browser Console
- Press F12 → Console tab
- Look for 404 errors on CSS/JS files
- If errors → files not uploaded correctly

### Verify Assets
- Check page source (Ctrl+U)
- Look for `_next/static/` paths
- Verify CSS and JS files load

## Troubleshooting

### Issue: Old Files Still Showing
**Solution:**
1. Clear browser cache (Ctrl+F5)
2. Clear CDN cache (if using Cloudflare)
3. Verify new files are actually uploaded
4. Check file modification dates on server

### Issue: 404 Errors
**Solution:**
1. Verify `_next/` folder is uploaded
2. Check file permissions (644 for files, 755 for folders)
3. Verify folder structure matches `out/` folder

### Issue: Styles Not Loading
**Solution:**
1. Check `_next/static/css/` folder exists
2. Verify CSS files are in the folder
3. Check browser console for 404 errors
4. Verify file paths in page source

## Quick Clean Upload Script

### PowerShell Script:
```powershell
# Clean local build
Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force out -ErrorAction SilentlyContinue

# Build fresh
npm run build

# Verify build
Write-Host "Build complete! Files ready in 'out/' folder"
Write-Host "Upload all contents from 'out/' to your server root"
```

## Best Practices

1. **Always backup** before deleting old files
2. **Upload during low traffic** times
3. **Test immediately** after upload
4. **Keep backup** of previous version
5. **Verify all pages** work before announcing

## Summary

**Clean Upload = Fresh Build + Clean Server + Fresh Upload**

1. Clean local: Remove `.next` and `out` folders
2. Build fresh: `npm run build`
3. Clean server: Delete old files/folders
4. Upload fresh: Upload all from `out/` folder
5. Verify: Test all pages and assets

---

**Ready for clean upload!** 🚀

