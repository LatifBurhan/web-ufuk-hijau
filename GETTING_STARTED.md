# 🚀 Getting Started - Ufuk Hijau Landing Page

Panduan langkah demi langkah untuk memulai.

## ⚡ 5 Menit Setup

### Step 1: Download/Clone Project
```bash
# Clone dari GitHub
git clone https://github.com/username/ufuk-hijau.git
cd ufuk-hijau

# Atau download ZIP dan extract
```

### Step 2: Update Nomor WhatsApp
Edit `script.js` baris 42:
```javascript
const phoneNumber = '6281234567890'; // Ganti dengan nomor Anda
```

### Step 3: Update Kontak di Footer
Edit `index.html` footer section:
```html
<strong>WhatsApp:</strong> <a href="https://wa.me/6281234567890">+62 812-3456-7890</a>
<strong>Email:</strong> <a href="mailto:info@ufukhijau.com">info@ufukhijau.com</a>
<strong>Telepon:</strong> (021) 1234-5678
```

### Step 4: Tambahkan Gambar Hero
1. Siapkan gambar (500x400px)
2. Convert ke WebP:
   ```bash
   cwebp -q 80 hero-solar.jpg -o hero-solar.webp
   ```
3. Simpan ke folder `images/hero-solar.webp`

### Step 5: Test Locally
```bash
# Gunakan Python
python -m http.server 8000

# Atau gunakan VS Code Live Server extension
# Buka http://localhost:8000
```

## 📋 Checklist Sebelum Deploy

- [ ] Nomor WhatsApp updated
- [ ] Kontak info updated
- [ ] Gambar hero ditambahkan
- [ ] Test di desktop browser
- [ ] Test di mobile browser
- [ ] Semua link bekerja
- [ ] Simulasi calculator bekerja
- [ ] WhatsApp link bekerja

## 🚀 Deploy ke Production

### Option 1: Netlify (Recommended)
```bash
# 1. Push ke GitHub
git add .
git commit -m "Ready for deployment"
git push origin main

# 2. Di Netlify:
# - Connect GitHub repository
# - Deploy otomatis
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
git push origin main

# 2. Di GitHub Settings → Pages:
# - Source: Deploy from a branch
# - Branch: main
# - Folder: / (root)
```

### Option 4: Manual Hosting
Upload semua file ke hosting provider via FTP/SFTP.

## 📊 Verify Deployment

Setelah deploy:
1. Buka website di production URL
2. Test semua link
3. Test WhatsApp button
4. Test simulasi calculator
5. Check Lighthouse score
6. Test di mobile

## 🎨 Customization

### Mengubah Warna
Edit `styles.css`:
```css
#1B5E20 → Warna hijau tua baru
#2E7D32 → Warna hijau terang baru
```

### Mengubah Font
Edit `styles.css` baris 8:
```css
font-family: system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
```

### Menambah Section
1. Tambahkan HTML di `index.html`
2. Tambahkan CSS di `styles.css`
3. Pastikan responsive

## 📚 Documentation

| File | Tujuan |
|------|--------|
| README.md | Setup & deployment |
| QUICK_REFERENCE.md | Quick tips |
| FEATURES.md | Fitur lengkap |
| OPTIMIZATION_GUIDE.md | Advanced optimization |
| DEPLOYMENT_CHECKLIST.md | Pre-launch checklist |
| TROUBLESHOOTING.md | Solusi masalah |
| PROJECT_SUMMARY.md | Project overview |
| GETTING_STARTED.md | Panduan ini |

## 🆘 Troubleshooting

### Gambar tidak muncul
- Cek nama file: `images/hero-solar.webp`
- Cek format: WebP
- Cek path: relatif, bukan absolute

### WhatsApp link tidak bekerja
- Format nomor: `62` (bukan `+62` atau `0`)
- Contoh: `6281234567890`

### Lighthouse score rendah
- Compress images lebih lanjut
- Minify CSS/JS
- Enable GZIP compression

Lihat `TROUBLESHOOTING.md` untuk solusi lengkap.

## 🔍 Testing

### Desktop Testing
1. Chrome/Edge
2. Firefox
3. Safari

### Mobile Testing
1. iPhone (Safari)
2. Android (Chrome)
3. Test di berbagai ukuran

### Performance Testing
1. Buka DevTools (F12)
2. Tab Lighthouse
3. Klik "Analyze page load"
4. Target score: 95-100

## 📈 Next Steps

### Immediate
- [ ] Setup domain
- [ ] Enable HTTPS
- [ ] Setup analytics

### Short-term
- [ ] Monitor performance
- [ ] Collect testimonials
- [ ] Optimize images

### Medium-term
- [ ] Add blog section
- [ ] Add case studies
- [ ] Add FAQ section

### Long-term
- [ ] Add contact form
- [ ] Add booking system
- [ ] Add payment integration

## 💡 Pro Tips

1. **Backup sebelum edit:** `git commit` sebelum perubahan besar
2. **Test mobile dulu:** Mobile-first design
3. **Compress images:** Hemat 50-70% ukuran
4. **Monitor performance:** Setup analytics
5. **Update regularly:** Check security & dependencies

## 📞 Support

- **Email:** info@ufukhijau.com
- **WhatsApp:** +62-812-3456-7890
- **Docs:** Lihat file .md lainnya

## 🎓 Learning Resources

- [MDN Web Docs](https://developer.mozilla.org/)
- [Web.dev](https://web.dev/)
- [CSS-Tricks](https://css-tricks.com/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)

## ✅ Success Checklist

- [ ] Website live di production
- [ ] HTTPS enabled
- [ ] Lighthouse score ≥ 95
- [ ] Mobile responsive
- [ ] Analytics setup
- [ ] Domain configured
- [ ] Email working
- [ ] WhatsApp working

## 🎉 Congratulations!

Website Anda sudah siap! Sekarang:
1. Share ke audience
2. Monitor performance
3. Collect leads
4. Optimize berdasarkan data

---

**Last Updated:** 2024-02-19  
**Version:** 1.0.0  
**Status:** ✅ Ready to Launch
