// Simulasi Penghematan
const tagihanInput = document.getElementById('tagihan');
const tagihanSaat = document.getElementById('tagihanSaat');
const hemat = document.getElementById('hemat');
const tagihanSetelah = document.getElementById('tagihanSetelah');
const tahunan = document.getElementById('tahunan');

function formatRupiah(num) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(num);
}

function updateSimulasi() {
    const tagihan = parseInt(tagihanInput.value) || 0;
    const hematBulanan = Math.round(tagihan * 0.5);
    const tagihanBaru = tagihan - hematBulanan;
    const hematTahunan = hematBulanan * 12;

    tagihanSaat.textContent = formatRupiah(tagihan);
    hemat.textContent = formatRupiah(hematBulanan);
    tagihanSetelah.textContent = formatRupiah(tagihanBaru);
    tahunan.textContent = formatRupiah(hematTahunan);
}

tagihanInput.addEventListener('input', updateSimulasi);
updateSimulasi();

// Scroll Functions
function scrollToContact() {
    document.getElementById('kontak').scrollIntoView({ behavior: 'smooth' });
}

function scrollToSimulasi() {
    document.getElementById('simulasi').scrollIntoView({ behavior: 'smooth' });
}

// WhatsApp Integration
function hubungiWhatsApp(paket) {
    const phoneNumber = '6281234567890';
    const message = `Halo Ufuk Hijau, saya tertarik dengan paket ${paket}. Bisa konsultasi gratis?`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
}

// Lazy Loading Images (fallback untuk browser lama)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[loading="lazy"]').forEach(img => {
        imageObserver.observe(img);
    });
}
