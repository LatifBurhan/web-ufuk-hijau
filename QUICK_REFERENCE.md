# ⚡ Quick Reference - Ufuk Hijau

Panduan cepat untuk tugas-tugas umum.

## 🔧 Common Tasks

### Mengubah Nomor WhatsApp
**File:** `script.js` (baris 42)
```javascript
const phoneNumber = '6281234567890'; // Ganti dengan nomor Anda
```

### Mengubah Warna Brand
**File:** `styles.css`
```css
/* Hijau Tua */
#1B5E20 → Warna baru

/* Hijau Terang */
#2E7D32 → Warna baru
```

### Mengubah Informasi Kontak
**File:** `index.html` (Footer section)
```html
<strong>WhatsApp:</strong> <a href="https://wa.me/6281234567890">+62 812-3456-7890</a>
<strong>Email:</strong> <a href="mailto:info@ufukhijau.com">info@ufukhijau.com</a>
<strong>Telepon:</strong> (021) 1234-5678
```

### Menambah Gambar
1. Convert ke WebP: `cwebp -q 80 image.jpg -o image.webp`
2. Simpan ke folder `images/`
3. Update `src` di HTML

### Menambah Section Baru
1. Tambahkan HTML di `index.html`
2. Tambahkan CSS di `styles.css`
3. Pastikan responsive (mobile-first)

### Mengubah Harga Paket
**File:** `index.html` (Paket section)
```html
<div class="harga">Mulai dari <strong>Rp 25 Juta</strong></div>
```

## 🚀 Deployment

### Netlify
```bash
git push origin main
# Deploy otomatis
```

### Vercel
```bash
vercel
# Follow prompts
```

### GitHub Pages
```bash
git push origin main
# Enable di Settings → Pages
```

## 🧪 Testing

### Local Testing
```bash
python -m http.server 8000
# Buka http://localhost:8000
```

### Lighthouse
1. Buka DevTools (F12)
2. Tab Lighthouse
3. Klik "Analyze page load"

### Mobile Testing
1. DevTools → Device Toolbar (Ctrl+Shift+M)
2. Test di berbagai ukuran

## 📊 File Sizes

| File | Size | Gzip |
|------|------|------|
| index.html | 15KB | 4KB |
| styles.css | 8KB | 2KB |
| script.js | 1.5KB | 0.8KB |
| sw.js | 2KB | 1KB |
| manifest.json | 2KB | 0.8KB |
| **Total** | **28.5KB** | **8.6KB** |

## 🎯 SEO Checklist

- [ ] Meta description ada
- [ ] Open Graph tags ada
- [ ] Sitemap.xml accessible
- [ ] Robots.txt accessible
- [ ] Mobile-friendly
- [ ] Fast loading
- [ ] Proper headings

## ♿ Accessibility Checklist

- [ ] Alt text untuk semua images
- [ ] Color contrast > 4.5:1
- [ ] Keyboard navigation works
- [ ] Semantic HTML
- [ ] Proper heading hierarchy
- [ ] Form labels associated

## 🔐 Security Checklist

- [ ] HTTPS enabled
- [ ] No sensitive data
- [ ] No console.log
- [ ] Security headers set
- [ ] No external dependencies

## 📱 Mobile Checklist

- [ ] Responsive design
- [ ] Touch-friendly buttons
- [ ] Readable text (16px+)
- [ ] Proper viewport meta
- [ ] Fast loading

## 🚨 Troubleshooting

### Gambar tidak muncul
```
1. Cek nama file (case-sensitive)
2. Cek path: images/hero-solar.webp
3. Cek format: WebP
```

### WhatsApp link tidak bekerja
```
1. Format nomor: 62 (bukan +62 atau 0)
2. Contoh: 6281234567890
3. Test: https://wa.me/6281234567890
```

### Lighthouse score rendah
```
1. Compress images lebih lanjut
2. Minify CSS/JS
3. Enable GZIP
4. Setup CDN
```

### Mobile score lebih rendah
```
1. Optimize images untuk mobile
2. Reduce JavaScript
3. Improve server response
4. Test di actual device
```

## 📚 File Reference

| File | Purpose | Edit? |
|------|---------|-------|
| index.html | Main content | ✅ Yes |
| styles.css | Styling | ✅ Yes |
| script.js | Functionality | ✅ Yes |
| sw.js | PWA caching | ⚠️ Advanced |
| manifest.json | PWA config | ✅ Yes |
| sitemap.xml | SEO | ✅ Yes |
| robots.txt | SEO | ✅ Yes |
| .htaccess | Server config | ⚠️ Advanced |
| .gitignore | Git config | ❌ No |
| package.json | Metadata | ❌ No |

## 🔗 Useful Links

- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [WebP Converter](https://cloudconvert.com/)
- [Color Contrast](https://webaim.org/resources/contrastchecker/)
- [Mobile Friendly Test](https://search.google.com/test/mobile-friendly)
- [Schema.org](https://schema.org/)

## 💡 Pro Tips

1. **Backup sebelum edit:** `git commit` sebelum perubahan besar
2. **Test mobile dulu:** Mobile-first design
3. **Compress images:** Hemat 50-70% ukuran
4. **Monitor performance:** Setup analytics
5. **Update regularly:** Check dependencies & security

## 📞 Quick Contacts

- **Hosting:** [Provider]
- **Domain:** [Registrar]
- **Email:** info@ufukhijau.com
- **WhatsApp:** +62-812-3456-7890

## 🎓 Learning Path

1. **Beginner:** Ubah warna, teks, kontak
2. **Intermediate:** Tambah section, ubah layout
3. **Advanced:** Optimize images, setup CDN, monitoring

## ✅ Pre-Launch Checklist

- [ ] Nomor WhatsApp updated
- [ ] Kontak info updated
- [ ] Gambar hero ditambahkan
- [ ] Lighthouse score ≥ 95
- [ ] Mobile tested
- [ ] Links tested
- [ ] Sitemap updated
- [ ] Analytics setup
- [ ] HTTPS enabled
- [ ] Domain configured

---

**Last Updated:** 2024-02-19  
**Version:** 1.0.0
