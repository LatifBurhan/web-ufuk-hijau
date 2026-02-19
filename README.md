# Ufuk Hijau - Landing Page Solar Panel

Website landing page statis untuk jasa pemasangan solar panel Ufuk Hijau. Dioptimalkan untuk performa tinggi dan Lighthouse score 95-100.

## 📋 Fitur

✅ 100% Static (HTML + CSS + Vanilla JS)  
✅ Tanpa framework berat (no React, Bootstrap, jQuery)  
✅ Tanpa slider dan animasi berat  
✅ Inline SVG icons (tanpa library eksternal)  
✅ System fonts (tanpa Google Fonts)  
✅ Mobile-first responsive design  
✅ Lazy loading untuk gambar  
✅ SEO-friendly structure  
✅ WebP image format support  
✅ Minimal CSS dan clean code  

## 🚀 Quick Start

1. **Clone atau download project ini**
2. **Ganti nomor WhatsApp di `script.js`** (baris 42)
3. **Tambahkan gambar WebP ke folder `images/`**
4. **Deploy ke hosting statis (Netlify, Vercel, GitHub Pages, dll)**

## 📁 Struktur File

```
ufuk-hijau/
├── index.html          # Main HTML file
├── styles.css          # Stylesheet (minimal & efficient)
├── script.js           # Vanilla JavaScript
├── images/             # Folder untuk gambar WebP
│   └── hero-solar.webp # Gambar hero (500x400px)
└── README.md           # File ini
```

## 🖼️ Gambar yang Diperlukan

### Hero Image
- **File:** `images/hero-solar.webp`
- **Ukuran:** 500x400px (desktop), 400x300px (mobile)
- **Format:** WebP (untuk performa optimal)
- **Deskripsi:** Teknisi memasang solar panel di atap rumah

### Cara Convert ke WebP

**Menggunakan ImageMagick:**
```bash
convert hero-solar.jpg -quality 80 hero-solar.webp
```

**Menggunakan FFmpeg:**
```bash
ffmpeg -i hero-solar.jpg -c:v libwebp -quality 80 hero-solar.webp
```

**Online tools:**
- https://cloudconvert.com/
- https://convertio.co/

## ⚙️ Konfigurasi

### Nomor WhatsApp
Edit `script.js` baris 42:
```javascript
const phoneNumber = '6281234567890'; // Ganti dengan nomor Anda
```

### Informasi Kontak
Edit `index.html` di section footer:
- WhatsApp link
- Email
- Telepon
- Alamat

### Warna Brand
Edit `styles.css`:
- `#1B5E20` - Hijau tua (primary)
- `#2E7D32` - Hijau terang (secondary)

## 📊 Lighthouse Optimization

### Checklist untuk score 95-100:

✅ **Performance:**
- Lazy loading images
- Minimal CSS (hanya 8KB)
- Minimal JS (hanya 1.5KB)
- WebP format untuk gambar
- No render-blocking resources

✅ **Accessibility:**
- Semantic HTML
- Proper heading hierarchy
- Alt text untuk semua gambar
- Color contrast ratio > 4.5:1
- Keyboard navigation support

✅ **Best Practices:**
- HTTPS recommended
- No console errors
- Proper viewport meta tag
- No deprecated APIs

✅ **SEO:**
- Meta descriptions
- Open Graph tags
- Semantic HTML
- Mobile-friendly
- Fast loading

## 📱 Responsive Breakpoints

- **Desktop:** 1200px+
- **Tablet:** 768px - 1199px
- **Mobile:** < 768px
- **Small Mobile:** < 480px

## 🔧 Customization

### Menambah Section Baru
1. Tambahkan HTML di `index.html`
2. Tambahkan CSS di `styles.css` (gunakan grid/flexbox)
3. Pastikan mobile-responsive

### Mengubah Warna
Cari dan ganti di `styles.css`:
- `#1B5E20` → Warna hijau tua baru
- `#2E7D32` → Warna hijau terang baru

### Mengubah Font
Edit di `styles.css` baris 8:
```css
font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
```

## 🚀 Deployment

### Netlify
1. Push ke GitHub
2. Connect repository ke Netlify
3. Deploy otomatis

### Vercel
1. Push ke GitHub
2. Import project di Vercel
3. Deploy otomatis

### GitHub Pages
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/username/ufuk-hijau.git
git push -u origin main
```

Aktifkan GitHub Pages di Settings → Pages → Deploy from branch (main)

### Manual Hosting
Upload semua file ke hosting provider Anda via FTP/SFTP.

## 📈 Performance Tips

1. **Compress images lebih lanjut:**
   ```bash
   cwebp -q 80 hero-solar.jpg -o hero-solar.webp
   ```

2. **Minify CSS (optional):**
   - Gunakan online tools seperti CSS Minifier
   - Hemat ~20% ukuran file

3. **Minify HTML (optional):**
   - Gunakan online tools seperti HTML Minifier
   - Hemat ~10% ukuran file

4. **Enable GZIP compression** di server

5. **Setup CDN** untuk gambar (optional)

## 🔍 Testing

### Lighthouse
1. Buka DevTools (F12)
2. Tab Lighthouse
3. Klik "Analyze page load"
4. Target score: 95-100

### Mobile Testing
- Chrome DevTools → Device Toolbar
- Test di berbagai ukuran layar

### Cross-browser Testing
- Chrome/Edge
- Firefox
- Safari
- Mobile browsers

## 📝 SEO Checklist

- ✅ Meta description
- ✅ Open Graph tags
- ✅ Semantic HTML
- ✅ Mobile-friendly
- ✅ Fast loading
- ✅ Proper heading hierarchy
- ✅ Alt text untuk gambar
- ✅ Internal links

## 🐛 Troubleshooting

### Gambar tidak muncul
- Pastikan file ada di folder `images/`
- Cek nama file di HTML (case-sensitive)
- Gunakan path relatif: `images/hero-solar.webp`

### WhatsApp link tidak bekerja
- Pastikan nomor format: `62` (bukan `+62` atau `0`)
- Contoh: `6281234567890`

### CSS tidak ter-load
- Pastikan file `styles.css` di root folder
- Cek console untuk error messages

### Lighthouse score rendah
- Compress gambar lebih lanjut
- Pastikan lazy loading aktif
- Cek ukuran file CSS/JS

## 📄 License

Bebas digunakan untuk keperluan komersial dan non-komersial.

## 📞 Support

Untuk pertanyaan atau modifikasi, hubungi tim development Anda.

---

**Last Updated:** 2024  
**Version:** 1.0.0
