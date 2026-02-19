# 🚀 Deployment Checklist - Ufuk Hijau

Gunakan checklist ini sebelum melakukan deployment ke production.

## 📋 Pre-Deployment

### Content & Configuration
- [ ] Ganti nomor WhatsApp di `script.js` (baris 42)
- [ ] Update informasi kontak di footer (email, telepon, alamat)
- [ ] Update domain di `sitemap.xml` (ganti `ufukhijau.com`)
- [ ] Update domain di `.htaccess` (jika menggunakan redirect)
- [ ] Verifikasi semua link internal bekerja dengan baik

### Images & Assets
- [ ] Tambahkan gambar hero WebP ke `images/hero-solar.webp`
- [ ] Pastikan gambar berukuran optimal (500x400px desktop, 400x300px mobile)
- [ ] Compress gambar dengan quality 80% untuk WebP
- [ ] Test lazy loading di DevTools Network tab

### Code Quality
- [ ] Cek console untuk error messages (F12)
- [ ] Validasi HTML di https://validator.w3.org/
- [ ] Validasi CSS di https://jigsaw.w3.org/css-validator/
- [ ] Test semua tombol dan link
- [ ] Test form simulasi penghematan

## 🔍 Testing

### Desktop Testing
- [ ] Chrome/Edge - Full page test
- [ ] Firefox - Full page test
- [ ] Safari - Full page test
- [ ] Test di 1920x1080, 1366x768, 1024x768

### Mobile Testing
- [ ] iPhone (Safari) - iOS 14+
- [ ] Android (Chrome) - Android 8+
- [ ] Test di 375x667, 414x896, 768x1024
- [ ] Test landscape orientation
- [ ] Test touch interactions

### Performance Testing
- [ ] Lighthouse score ≥ 95 (semua kategori)
- [ ] Page load time < 2 detik
- [ ] First Contentful Paint (FCP) < 1.5s
- [ ] Largest Contentful Paint (LCP) < 2.5s
- [ ] Cumulative Layout Shift (CLS) < 0.1

### SEO Testing
- [ ] Meta description muncul di search results
- [ ] Open Graph tags valid (test di https://ogp.me/)
- [ ] Sitemap.xml accessible
- [ ] Robots.txt accessible
- [ ] Mobile-friendly test (Google Mobile-Friendly Test)

### Accessibility Testing
- [ ] Keyboard navigation (Tab, Enter, Escape)
- [ ] Screen reader test (NVDA, JAWS, atau VoiceOver)
- [ ] Color contrast ratio ≥ 4.5:1
- [ ] Alt text untuk semua gambar
- [ ] Form labels properly associated

## 🔐 Security

- [ ] Enable HTTPS (SSL/TLS certificate)
- [ ] Setup security headers (.htaccess atau server config)
- [ ] No sensitive data di HTML/CSS/JS
- [ ] No console.log statements di production
- [ ] Validate form inputs (jika ada form)

## 📊 Analytics & Monitoring

- [ ] Setup Google Analytics (optional)
- [ ] Setup Google Search Console
- [ ] Setup error monitoring (Sentry, Rollbar, dll)
- [ ] Setup uptime monitoring (UptimeRobot, Pingdom, dll)

## 🚀 Deployment Steps

### Option 1: Netlify
```bash
# 1. Push ke GitHub
git add .
git commit -m "Ready for deployment"
git push origin main

# 2. Di Netlify dashboard:
# - Connect GitHub repository
# - Set build command: (leave empty for static)
# - Set publish directory: . (root)
# - Deploy
```

### Option 2: Vercel
```bash
# 1. Install Vercel CLI
npm i -g vercel

# 2. Deploy
vercel

# 3. Follow prompts
```

### Option 3: GitHub Pages
```bash
# 1. Push ke GitHub
git add .
git commit -m "Ready for deployment"
git push origin main

# 2. Di GitHub Settings → Pages:
# - Source: Deploy from a branch
# - Branch: main
# - Folder: / (root)
# - Save
```

### Option 4: Manual Hosting
```bash
# 1. Compress files (optional)
# 2. Upload via FTP/SFTP:
#    - index.html
#    - styles.css
#    - script.js
#    - sw.js
#    - manifest.json
#    - sitemap.xml
#    - robots.txt
#    - .htaccess
#    - images/ folder
# 3. Test di production URL
```

## ✅ Post-Deployment

### Verification
- [ ] Website accessible di production URL
- [ ] HTTPS working (green lock icon)
- [ ] All pages load correctly
- [ ] Images display properly
- [ ] WhatsApp link works
- [ ] Simulasi calculator works
- [ ] Mobile responsive
- [ ] No console errors

### Monitoring
- [ ] Check analytics dashboard
- [ ] Monitor error logs
- [ ] Check uptime status
- [ ] Monitor page speed

### SEO Submission
- [ ] Submit sitemap ke Google Search Console
- [ ] Submit sitemap ke Bing Webmaster Tools
- [ ] Request indexing untuk homepage
- [ ] Monitor search console for issues

## 📈 Performance Optimization (Post-Launch)

### If Lighthouse score < 95:
1. **Performance:**
   - Compress images lebih lanjut
   - Minify CSS/JS
   - Enable GZIP compression
   - Setup CDN untuk images

2. **Accessibility:**
   - Review color contrast
   - Add ARIA labels jika perlu
   - Test dengan screen reader

3. **Best Practices:**
   - Update dependencies
   - Fix deprecated APIs
   - Add security headers

4. **SEO:**
   - Add structured data (Schema.org)
   - Improve meta descriptions
   - Add internal links

## 🔄 Maintenance Schedule

- **Weekly:** Check analytics, monitor errors
- **Monthly:** Review performance metrics, update content
- **Quarterly:** Security audit, dependency updates
- **Yearly:** Full accessibility audit, SEO review

## 📞 Support Contacts

- **Hosting Support:** [Hosting Provider]
- **Domain Support:** [Domain Registrar]
- **SSL Support:** [SSL Provider]
- **Analytics Support:** [Analytics Platform]

## 📝 Notes

- Keep backup of all files
- Document any custom changes
- Update this checklist after each deployment
- Share checklist with team members

---

**Last Updated:** 2024-02-19  
**Version:** 1.0.0
