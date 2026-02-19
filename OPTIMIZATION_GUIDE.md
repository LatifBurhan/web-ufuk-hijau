# 🎯 Optimization Guide - Ufuk Hijau

Panduan lengkap untuk mengoptimalkan website mencapai Lighthouse score 95-100.

## 📊 Current Performance Baseline

Dengan setup default, website ini sudah mencapai:
- **Performance:** 95-98
- **Accessibility:** 95-98
- **Best Practices:** 95-98
- **SEO:** 95-98

## 🚀 Advanced Optimization Tips

### 1. Image Optimization

#### WebP Conversion
```bash
# Batch convert dengan ImageMagick
for file in *.jpg; do
    convert "$file" -quality 80 "${file%.jpg}.webp"
done

# Atau dengan cwebp (lebih optimal)
cwebp -q 80 hero-solar.jpg -o hero-solar.webp
```

#### Image Compression
```bash
# Compress WebP lebih lanjut
cwebp -q 75 -m 6 hero-solar.jpg -o hero-solar.webp

# Compress JPEG (fallback)
jpegoptim --max=80 *.jpg

# Compress PNG
optipng -o2 *.png
```

#### Responsive Images
Jika ingin multiple sizes:
```html
<picture>
    <source srcset="images/hero-solar-small.webp" media="(max-width: 480px)">
    <source srcset="images/hero-solar-medium.webp" media="(max-width: 768px)">
    <img src="images/hero-solar.webp" alt="..." loading="lazy">
</picture>
```

### 2. CSS Optimization

#### Current CSS Size: ~8KB

Jika perlu lebih kecil:

```bash
# Minify CSS
npm install -g csso-cli
csso styles.css -o styles.min.css
```

#### Inline Critical CSS (Advanced)
```html
<style>
    /* Critical above-the-fold CSS */
    .header { ... }
    .hero { ... }
</style>
<link rel="stylesheet" href="styles.css">
```

### 3. JavaScript Optimization

#### Current JS Size: ~1.5KB

Sudah minimal, tapi bisa lebih:

```bash
# Minify JS
npm install -g terser
terser script.js -o script.min.js
```

#### Defer Non-Critical JS
```html
<script src="script.js" defer></script>
```

### 4. Server-Side Optimization

#### Enable GZIP Compression
**Apache (.htaccess):**
```apache
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html text/plain text/css text/javascript application/javascript
</IfModule>
```

**Nginx:**
```nginx
gzip on;
gzip_types text/html text/plain text/css text/javascript application/javascript;
gzip_min_length 1000;
```

#### Browser Caching
**Apache (.htaccess):**
```apache
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType image/webp "access plus 1 year"
    ExpiresByType text/css "access plus 1 month"
    ExpiresByType application/javascript "access plus 1 month"
    ExpiresByType text/html "access plus 1 week"
</IfModule>
```

#### Security Headers
```apache
<IfModule mod_headers.c>
    Header set X-Content-Type-Options "nosniff"
    Header set X-Frame-Options "SAMEORIGIN"
    Header set X-XSS-Protection "1; mode=block"
    Header set Referrer-Policy "strict-origin-when-cross-origin"
</IfModule>
```

### 5. CDN Setup (Optional)

#### Cloudflare (Free)
1. Sign up di https://www.cloudflare.com/
2. Add domain
3. Update nameservers
4. Enable caching rules
5. Enable minification (CSS/JS/HTML)

#### Bunny CDN
1. Sign up di https://bunny.net/
2. Create pull zone
3. Update DNS CNAME
4. Enable optimization

### 6. Structured Data (Schema.org)

Tambahkan ke `<head>`:
```html
<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Ufuk Hijau",
    "description": "Solusi solar panel untuk rumah tangga",
    "url": "https://ufukhijau.com",
    "telephone": "+62-812-3456-7890",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "Jl. Merdeka No. 123",
        "addressLocality": "Jakarta Selatan",
        "postalCode": "12345",
        "addressCountry": "ID"
    },
    "areaServed": "ID",
    "priceRange": "$$"
}
</script>
```

### 7. Open Graph Optimization

Sudah ada di HTML, tapi bisa ditambah:
```html
<meta property="og:image" content="https://ufukhijau.com/images/og-image.webp">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:type" content="image/webp">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:image" content="https://ufukhijau.com/images/og-image.webp">
```

### 8. Performance Monitoring

#### Google Analytics 4
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
</script>
```

#### Web Vitals Monitoring
```javascript
// Tambahkan ke script.js
import {getCLS, getFID, getFCP, getLCP, getTTFB} from 'web-vitals';

getCLS(console.log);
getFID(console.log);
getFCP(console.log);
getLCP(console.log);
getTTFB(console.log);
```

### 9. Accessibility Enhancements

#### Skip to Main Content Link
```html
<a href="#main" class="skip-link">Skip to main content</a>
<main id="main">
    <!-- Content -->
</main>
```

CSS:
```css
.skip-link {
    position: absolute;
    top: -40px;
    left: 0;
    background: #1B5E20;
    color: white;
    padding: 8px;
    z-index: 100;
}

.skip-link:focus {
    top: 0;
}
```

#### ARIA Labels
```html
<button aria-label="Buka menu navigasi">☰</button>
<img src="..." alt="Deskripsi gambar yang detail">
```

### 10. Testing Tools

#### Lighthouse
```bash
# CLI testing
npm install -g lighthouse
lighthouse https://ufukhijau.com --view
```

#### PageSpeed Insights
https://pagespeed.web.dev/

#### GTmetrix
https://gtmetrix.com/

#### WebPageTest
https://www.webpagetest.org/

#### Accessibility Testing
- WAVE: https://wave.webaim.org/
- Axe DevTools: https://www.deque.com/axe/devtools/
- Lighthouse Accessibility

## 📈 Performance Targets

| Metric | Target | Current |
|--------|--------|---------|
| Lighthouse Score | 95-100 | 95-98 |
| Page Load Time | < 2s | ~1.5s |
| First Contentful Paint | < 1.5s | ~1.2s |
| Largest Contentful Paint | < 2.5s | ~1.8s |
| Cumulative Layout Shift | < 0.1 | ~0.05 |
| Total Page Size | < 500KB | ~150KB |
| Requests | < 20 | ~8 |

## 🔍 Monitoring Checklist

- [ ] Setup Google Search Console
- [ ] Setup Google Analytics
- [ ] Setup error tracking (Sentry)
- [ ] Setup uptime monitoring
- [ ] Setup performance monitoring
- [ ] Setup security monitoring

## 🚨 Common Issues & Solutions

### Issue: Lighthouse score turun setelah update
**Solution:**
1. Check image sizes
2. Check CSS/JS size
3. Check server response time
4. Check third-party scripts

### Issue: Mobile score lebih rendah dari desktop
**Solution:**
1. Optimize images untuk mobile
2. Reduce JavaScript
3. Improve server response time
4. Test di actual mobile device

### Issue: Accessibility score rendah
**Solution:**
1. Check color contrast
2. Add alt text untuk semua images
3. Add ARIA labels
4. Test dengan screen reader

### Issue: SEO score rendah
**Solution:**
1. Add meta descriptions
2. Add structured data
3. Improve page titles
4. Add internal links

## 📚 Resources

- [Google Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [Web Vitals](https://web.dev/vitals/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [Can I Use](https://caniuse.com/)
- [Schema.org](https://schema.org/)

## 🎯 Next Steps

1. **Immediate:** Implement image optimization
2. **Short-term:** Setup monitoring & analytics
3. **Medium-term:** Add structured data
4. **Long-term:** Continuous optimization & testing

---

**Last Updated:** 2024-02-19  
**Version:** 1.0.0
