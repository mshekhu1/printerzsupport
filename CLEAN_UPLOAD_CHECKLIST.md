# Clean Upload Checklist ✅

## ✅ Step 1: Local Clean Build (DONE)
- [x] Removed old `.next` folder
- [x] Removed old `out` folder  
- [x] Created fresh build
- [x] Build completed successfully

## ⏳ Step 2: Server Cleanup (DO THIS)

### Before Uploading, Delete These on Server:

**Old React Build Files:**
- [ ] `static/` folder (if exists)
- [ ] `build/` folder (if exists)
- [ ] Old `main.*.js` files
- [ ] Old `main.*.css` files

**Old Next.js Files:**
- [ ] Old `_next/` folder (if exists)
- [ ] Old HTML files with different structure

**Keep These:**
- [ ] `.htaccess` file (if you have one configured)
- [ ] Custom configuration files

## ⏳ Step 3: Upload New Files

### Upload ALL contents from `out/` folder:

**Root Files:**
- [ ] `index.html`
- [ ] `about.html`
- [ ] `services.html`
- [ ] `contact.html`
- [ ] `blog.html`
- [ ] `faq.html`
- [ ] `robots.txt`
- [ ] `sitemap.xml`
- [ ] `favicon.ico`
- [ ] `manifest.json`

**Folders:**
- [ ] `_next/` (entire folder - contains all optimized assets)
- [ ] `blog/` (all blog post HTML files)
- [ ] `about/`, `services/`, `contact/`, `faq/` (if exist)

## ⏳ Step 4: Verification

### Test These URLs:
- [ ] `https://www.printerzsupport.com/` - Homepage loads
- [ ] `https://www.printerzsupport.com/about` - About page
- [ ] `https://www.printerzsupport.com/services` - Services page
- [ ] `https://www.printerzsupport.com/blog` - Blog listing
- [ ] `https://www.printerzsupport.com/blog/[any-slug]` - Blog post
- [ ] `https://www.printerzsupport.com/faq` - FAQ page
- [ ] `https://www.printerzsupport.com/contact` - Contact page
- [ ] `https://www.printerzsupport.com/sitemap.xml` - Sitemap
- [ ] `https://www.printerzsupport.com/robots.txt` - Robots

### Check Browser Console:
- [ ] No 404 errors for CSS files
- [ ] No 404 errors for JS files
- [ ] No 404 errors for fonts
- [ ] All assets load correctly

### Verify File Dates:
- [ ] All files show today's date on server
- [ ] New `_next/` folder exists with today's date

## Quick Commands

### Clean Build (Already Done):
```powershell
Remove-Item -Recurse -Force .next, out -ErrorAction SilentlyContinue
npm run build
```

### Verify Build:
```powershell
Test-Path out\index.html
Get-ChildItem out | Select-Object Name
```

---

**Current Status:** ✅ Fresh build ready in `out/` folder  
**Next Step:** Clean server and upload new files

