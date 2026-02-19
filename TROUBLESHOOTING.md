# 🔧 Troubleshooting Guide - Ufuk Hijau

Solusi untuk masalah umum yang mungkin Anda hadapi.

## 🖼️ Image Issues

### Gambar tidak muncul
**Gejala:** Gambar hero tidak ditampilkan, hanya alt text

**Solusi:**
1. Cek nama file (case-sensitive):
   ```
   ✅ images/hero-solar.webp
   ❌ images/Hero-Solar.webp
   ❌ images/hero-solar.jpg
   ```

2. Cek path relatif:
   ```html
   ✅ <img src="images/hero-solar.webp">
   ❌ <img src="/images/hero-solar.webp">
   ❌ <img src="./images/hero-solar.webp">
   ```

3. Cek format file:
   ```
   ✅ WebP format (.webp)
   ⚠️ JPEG/PNG (akan bekerja tapi lebih besar)
   ```

4. Cek ukuran file:
   ```
   ✅ < 100KB
   ⚠️ > 500KB (terlalu besar)
   ```

5. Cek permissions:
   ```bash
   # Pastikan file readable
   chmod 644 images/hero-solar.webp
   ```

### Gambar blur atau pixelated
**Gejala:** Gambar terlihat tidak jelas

**Solusi:**
1. Gunakan gambar dengan resolusi lebih tinggi
2. Compress dengan quality lebih tinggi:
   ```bash
   cwebp -q 85 hero-solar.jpg -o hero-solar.webp
   ```
3. Cek ukuran gambar di browser (DevTools)

### Gambar tidak lazy load
**Gejala:** Semua gambar load sekaligus

**Solusi:**
1. Cek browser support:
   ```javascript
   if ('IntersectionObserver' in window) {
       console.log('Lazy loading supported');
   }
   ```
2. Cek HTML attribute:
   ```html
   ✅ <img src="..." loading="lazy">
   ❌ <img src="..." loading="eager">
   ```

## 🔗 Link Issues

### WhatsApp link tidak bekerja
**Gejala:** Klik tombol WhatsApp tidak membuka chat

**Solusi:**
1. Cek format nomor (harus 62, bukan +62 atau 0):
   ```javascript
   ✅ const phoneNumber = '6281234567890';
   ❌ const phoneNumber = '+6281234567890';
   ❌ const phoneNumber = '081234567890';
   ```

2. Test link manual:
   ```
   https://wa.me/6281234567890?text=Halo
   ```

3. Cek browser console untuk error:
   ```
   F12 → Console → Cek error messages
   ```

4. Cek WhatsApp availability:
   - Desktop: Buka https://web.whatsapp.com/
   - Mobile: Pastikan WhatsApp app installed

### Navigation links tidak smooth scroll
**Gejala:** Klik menu tidak scroll ke section

**Solusi:**
1. Cek anchor IDs di HTML:
   ```html
   ✅ <section id="masalah">
   ✅ <a href="#masalah">Masalah</a>
   ❌ <section id="problem">
   ❌ <a href="#masalah">Masalah</a>
   ```

2. Cek CSS scroll behavior:
   ```css
   ✅ html { scroll-behavior: smooth; }
   ```

3. Test di browser console:
   ```javascript
   document.getElementById('masalah').scrollIntoView({ behavior: 'smooth' });
   ```

### External links tidak bekerja
**Gejala:** Link ke website lain tidak membuka

**Solusi:**
1. Cek URL format:
   ```html
   ✅ <a href="https://example.com">Link</a>
   ❌ <a href="example.com">Link</a>
   ```

2. Cek target attribute:
   ```html
   ✅ <a href="..." target="_blank">Link</a>
   ```

## 🎨 Styling Issues

### Warna tidak berubah setelah edit
**Gejala:** Edit CSS tapi warna tetap sama

**Solusi:**
1. Hard refresh browser:
   ```
   Windows: Ctrl + Shift + R
   Mac: Cmd + Shift + R
   ```

2. Clear browser cache:
   ```
   DevTools → Application → Clear storage
   ```

3. Cek CSS file:
   ```bash
   # Pastikan styles.css di root folder
   ls -la styles.css
   ```

4. Cek syntax CSS:
   ```css
   ✅ color: #1B5E20;
   ❌ color: #1B5E20  (missing semicolon)
   ❌ color: 1B5E20;  (missing #)
   ```

### Layout berantakan di mobile
**Gejala:** Layout tidak responsive, text terlalu besar

**Solusi:**
1. Cek viewport meta tag:
   ```html
   ✅ <meta name="viewport" content="width=device-width, initial-scale=1.0">
   ```

2. Test di DevTools mobile view:
   ```
   F12 → Device Toolbar (Ctrl+Shift+M)
   ```

3. Cek media queries:
   ```css
   @media (max-width: 768px) {
       /* Mobile styles */
   }
   ```

4. Cek CSS grid/flexbox:
   ```css
   ✅ display: grid;
   ✅ display: flex;
   ❌ display: inline-block; (tidak responsive)
   ```

### Font tidak terlihat jelas
**Gejala:** Text terlalu kecil atau tidak readable

**Solusi:**
1. Cek font size:
   ```css
   ✅ font-size: 1rem; (16px)
   ❌ font-size: 0.7rem; (11px - terlalu kecil)
   ```

2. Cek line height:
   ```css
   ✅ line-height: 1.6;
   ❌ line-height: 1; (terlalu rapat)
   ```

3. Cek font weight:
   ```css
   ✅ font-weight: 600; (readable)
   ❌ font-weight: 300; (terlalu tipis)
   ```

## ⚡ Performance Issues

### Page load lambat
**Gejala:** Website butuh waktu lama untuk load

**Solusi:**
1. Cek image size:
   ```bash
   # Compress images
   cwebp -q 80 *.jpg -o output.webp
   ```

2. Cek CSS/JS size:
   ```bash
   # Minify CSS
   csso styles.css -o styles.min.css
   
   # Minify JS
   terser script.js -o script.min.js
   ```

3. Enable GZIP compression (.htaccess):
   ```apache
   <IfModule mod_deflate.c>
       AddOutputFilterByType DEFLATE text/html text/css text/javascript
   </IfModule>
   ```

4. Setup browser caching:
   ```apache
   <IfModule mod_expires.c>
       ExpiresActive On
       ExpiresByType image/webp "access plus 1 year"
   </IfModule>
   ```

### Lighthouse score rendah
**Gejala:** Lighthouse score < 95

**Solusi:**

**Performance:**
- Compress images lebih lanjut
- Minify CSS/JS
- Enable GZIP
- Setup CDN

**Accessibility:**
- Check color contrast
- Add alt text
- Add ARIA labels
- Test dengan screen reader

**Best Practices:**
- Update dependencies
- Fix deprecated APIs
- Add security headers
- Remove console.log

**SEO:**
- Add meta descriptions
- Add structured data
- Improve page titles
- Add internal links

### Mobile score lebih rendah dari desktop
**Gejala:** Lighthouse mobile score < desktop

**Solusi:**
1. Optimize images untuk mobile
2. Reduce JavaScript
3. Improve server response time
4. Test di actual mobile device

## 🔍 Browser Issues

### Website tidak bekerja di IE 11
**Gejala:** Website error atau tidak tampil di IE 11

**Solusi:**
1. IE 11 tidak fully supported (by design)
2. Gunakan modern browser:
   - Chrome 90+
   - Firefox 88+
   - Safari 14+
   - Edge 90+

3. Jika harus support IE 11:
   - Add polyfills
   - Use transpiler (Babel)
   - Test thoroughly

### Website tidak bekerja di Safari
**Gejala:** Fitur tidak bekerja di Safari

**Solusi:**
1. Cek browser compatibility:
   ```javascript
   // Check IntersectionObserver
   if ('IntersectionObserver' in window) {
       // Supported
   }
   ```

2. Test di Safari:
   - macOS: Safari
   - iOS: Safari

3. Check CSS support:
   - Grid: ✅ Supported
   - Flexbox: ✅ Supported
   - CSS Variables: ✅ Supported

## 📱 Mobile Issues

### Touch buttons tidak responsive
**Gejala:** Tombol tidak merespons tap di mobile

**Solusi:**
1. Cek button size (minimum 48x48px):
   ```css
   .btn {
       padding: 0.75rem 1.5rem; /* ~48px height */
       min-width: 48px;
   }
   ```

2. Cek touch events:
   ```javascript
   button.addEventListener('click', function() {
       // Works on both click and tap
   });
   ```

3. Test di actual mobile device

### Text terlalu kecil di mobile
**Gejala:** Text tidak readable di mobile

**Solusi:**
1. Cek minimum font size:
   ```css
   ✅ font-size: 1rem; (16px)
   ❌ font-size: 0.8rem; (13px - terlalu kecil)
   ```

2. Cek viewport meta:
   ```html
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   ```

3. Avoid zoom-disabled:
   ```html
   ❌ <meta name="viewport" content="user-scalable=no">
   ✅ Allow user zoom
   ```

## 🔐 Security Issues

### Mixed content warning
**Gejala:** Browser warning tentang mixed content

**Solusi:**
1. Gunakan HTTPS untuk semua resources:
   ```html
   ✅ <img src="https://example.com/image.webp">
   ❌ <img src="http://example.com/image.webp">
   ```

2. Update .htaccess:
   ```apache
   <IfModule mod_rewrite.c>
       RewriteEngine On
       RewriteCond %{HTTPS} off
       RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
   </IfModule>
   ```

### Console security warnings
**Gejala:** Security warnings di browser console

**Solusi:**
1. Remove console.log statements
2. Add security headers
3. Use HTTPS
4. Validate all inputs

## 📊 Analytics Issues

### Analytics tidak tracking
**Gejala:** Google Analytics tidak mencatat traffic

**Solusi:**
1. Cek GA tracking code:
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   ```

2. Cek GA ID:
   ```javascript
   gtag('config', 'G-XXXXXXXXXX'); // Ganti dengan ID Anda
   ```

3. Test di GA Real-time:
   - Google Analytics → Real-time
   - Buka website
   - Cek apakah traffic muncul

## 🆘 Getting Help

### Jika masalah tidak teratasi:

1. **Check Documentation:**
   - README.md
   - QUICK_REFERENCE.md
   - FEATURES.md

2. **Check Browser Console:**
   ```
   F12 → Console → Cek error messages
   ```

3. **Check Network Tab:**
   ```
   F12 → Network → Cek failed requests
   ```

4. **Check Lighthouse:**
   ```
   F12 → Lighthouse → Analyze page load
   ```

5. **Search Online:**
   - Stack Overflow
   - MDN Web Docs
   - GitHub Issues

6. **Contact Support:**
   - Email: info@ufukhijau.com
   - WhatsApp: +62-812-3456-7890

## 📝 Common Error Messages

### "Cannot read property 'addEventListener' of null"
**Penyebab:** Element tidak ditemukan  
**Solusi:** Cek ID/class element di HTML

### "Uncaught SyntaxError: Unexpected token"
**Penyebab:** Syntax error di JavaScript  
**Solusi:** Cek syntax di script.js

### "Failed to load resource: 404"
**Penyebab:** File tidak ditemukan  
**Solusi:** Cek path file dan nama file

### "Mixed Content: The page was loaded over HTTPS, but requested an insecure resource"
**Penyebab:** HTTP resource di HTTPS page  
**Solusi:** Gunakan HTTPS untuk semua resources

## ✅ Verification Checklist

Sebelum melaporkan bug:
- [ ] Hard refresh browser (Ctrl+Shift+R)
- [ ] Clear browser cache
- [ ] Test di incognito/private mode
- [ ] Test di browser lain
- [ ] Test di mobile device
- [ ] Check browser console
- [ ] Check network tab
- [ ] Check file permissions
- [ ] Check file paths
- [ ] Check syntax

---

**Last Updated:** 2024-02-19  
**Version:** 1.0.0
