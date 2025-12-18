# Troubleshooting: Website Not Updating

## Quick Checklist

### ✅ Step 1: Verify Files Are Uploaded
Check if these files exist on your server:
- `index.html` (should be in root directory)
- `static/js/main.9a374976.js` (check the hash matches)
- `static/css/main.c19cf9b1.css` (check the hash matches)
- `sitemap.xml`
- `.htaccess`

**How to check:**
- Use FTP/File Manager to verify files are on server
- Check file dates - should be recent (today's date)

### ✅ Step 2: Clear All Caches

#### Browser Cache:
1. **Chrome/Edge:**
   - Press `Ctrl + Shift + Delete`
   - Select "Cached images and files"
   - Time range: "All time"
   - Click "Clear data"

2. **Firefox:**
   - Press `Ctrl + Shift + Delete`
   - Select "Cache"
   - Time range: "Everything"
   - Click "Clear Now"

3. **Safari:**
   - Safari menu → Preferences → Advanced
   - Check "Show Develop menu"
   - Develop → Empty Caches

#### Hard Refresh:
- **Windows:** `Ctrl + F5` or `Ctrl + Shift + R`
- **Mac:** `Cmd + Shift + R`

#### Test in Incognito/Private Mode:
- Open browser in private/incognito mode
- Visit your site - this bypasses cache

### ✅ Step 3: Clear CDN Cache (If Using CDN)

#### Cloudflare:
1. Log into Cloudflare dashboard
2. Go to Caching → Configuration
3. Click "Purge Everything"
4. Wait 30 seconds, then test

#### AWS CloudFront:
1. AWS Console → CloudFront
2. Select your distribution
3. Invalidations tab → Create Invalidation
4. Enter: `/*`
5. Wait for completion

#### Other CDNs:
- Check your CDN provider's cache purge option
- Purge all cached files

### ✅ Step 4: Verify File Hashes

**Current Build Hashes:**
- JS: `main.9a374976.js`
- CSS: `main.c19cf9b1.css`

**How to Check:**
1. View page source on your live site
2. Look for: `<script src="/static/js/main.XXXXX.js">`
3. If hash is different, files weren't uploaded correctly

**If hash is old:**
- Delete old files from server
- Upload new files from `build/` folder
- Verify new hash appears

### ✅ Step 5: Check Server Configuration

#### Verify .htaccess is Working:
1. Check if `.htaccess` file exists on server
2. Verify it's in root directory (same as index.html)
3. Check file permissions (should be 644)

#### Test Direct URL Access:
- Visit: `https://www.printerzsupport.com/blog`
- If you get 404 → `.htaccess` not working or missing
- If page loads → routing is working

### ✅ Step 6: Verify Upload Location

**Common Upload Locations:**
- `public_html/` (most common)
- `www/`
- `htdocs/`
- `html/`

**Make sure:**
- `index.html` is in the root (not in a subfolder)
- `static/` folder is in root (same level as index.html)
- All files from `build/` folder are uploaded

### ✅ Step 7: Check Server Error Logs

**Common Locations:**
- cPanel → Errors → Error Log
- `/var/log/apache2/error.log` (SSH)
- `/var/log/httpd/error_log` (SSH)

**Look for:**
- 404 errors
- Permission denied errors
- Rewrite module errors

## Common Issues & Solutions

### Issue 1: Old JavaScript File Loading
**Symptom:** Site looks the same, old features missing

**Solution:**
1. Delete old `static/js/main.XXXXX.js` files from server
2. Upload new `static/js/main.9a374976.js`
3. Clear browser cache
4. Hard refresh

### Issue 2: 404 Errors on Routes
**Symptom:** `/blog` or `/faq` shows 404 error

**Solution:**
1. Verify `.htaccess` file is uploaded
2. Check Apache mod_rewrite is enabled
3. Verify `.htaccess` is in root directory
4. Check file permissions (644)

### Issue 3: CSS Not Loading
**Symptom:** Site looks broken, no styles

**Solution:**
1. Check `static/css/main.c19cf9b1.css` exists on server
2. Verify file path in browser DevTools → Network tab
3. Check file permissions (644)
4. Clear CDN cache if using CDN

### Issue 4: Changes Not Visible
**Symptom:** Uploaded files but site unchanged

**Solution:**
1. **Verify you uploaded to correct directory**
2. Check file modification dates on server
3. Clear all caches (browser + CDN)
4. Test in incognito mode
5. Check if multiple domains/subdomains exist

## Verification Steps

### Test These URLs:
1. ✅ `https://www.printerzsupport.com/` - Home page
2. ✅ `https://www.printerzsupport.com/blog` - Blog page
3. ✅ `https://www.printerzsupport.com/faq` - FAQ page
4. ✅ `https://www.printerzsupport.com/sitemap.xml` - Sitemap

### Check Page Source:
1. Right-click → View Page Source
2. Look for: `<script src="/static/js/main.9a374976.js">`
3. If hash is different → files not updated
4. Look for new meta tags (should have SEO tags)

### Check Network Tab:
1. Open DevTools (F12)
2. Go to Network tab
3. Reload page
4. Check if files load with new hashes
5. Check for 404 errors

## Force Update Methods

### Method 1: Version Query String
Add to your URLs temporarily:
- `?v=2` or `?v=20241218`
- Forces browser to fetch new files

### Method 2: Delete Old Files First
1. Delete all old `static/` files from server
2. Upload new `static/` folder
3. Clear caches

### Method 3: Rename Static Folder
1. Rename old `static/` to `static_old/`
2. Upload new `static/` folder
3. Delete `static_old/` after verification

## Still Not Working?

1. **Contact your hosting provider:**
   - Ask them to check server cache
   - Verify file uploads
   - Check server configuration

2. **Check if using staging/production:**
   - Make sure you're uploading to correct environment
   - Verify domain/subdomain configuration

3. **Verify DNS:**
   - Check if domain points to correct server
   - Check for multiple A records

4. **Check for reverse proxy:**
   - Some setups use reverse proxy
   - May need to clear proxy cache

## Quick Test Commands

### Check File on Server (SSH):
```bash
ls -la /path/to/public_html/static/js/main.*
# Should show: main.9a374976.js
```

### Check .htaccess (SSH):
```bash
cat /path/to/public_html/.htaccess
# Should show rewrite rules
```

### Test URL (Command Line):
```bash
curl -I https://www.printerzsupport.com/blog
# Should return 200, not 404
```

---

**Remember:** After uploading files, always:
1. Clear browser cache
2. Clear CDN cache (if using)
3. Test in incognito mode
4. Verify file hashes match

