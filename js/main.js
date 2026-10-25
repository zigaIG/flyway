// Mobile Nav
const hamburger = document.getElementById('hamburger');
const navMenu   = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    hamburger.classList.toggle('active', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
});

navMenu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
    });
});

// Footer Year
document.getElementById('year').textContent = new Date().getFullYear();

// Lightbox
const lightbox = document.getElementById('lightbox');
if (lightbox) {
    const lbImg   = lightbox.querySelector('img');
    const imgs    = Array.from(document.querySelectorAll('.gallery-grid img'));
    let current   = 0;

    function openLightbox(index) {
        current = index;
        lbImg.src = imgs[current].src;
        lbImg.alt = imgs[current].alt;
        lightbox.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        lightbox.classList.remove('open');
        document.body.style.overflow = '';
    }

    function showPrev() { openLightbox((current - 1 + imgs.length) % imgs.length); }
    function showNext() { openLightbox((current + 1) % imgs.length); }

    imgs.forEach((img, i) => img.addEventListener('click', () => openLightbox(i)));

    lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
    lightbox.querySelector('.lightbox-prev').addEventListener('click', showPrev);
    lightbox.querySelector('.lightbox-next').addEventListener('click', showNext);

    lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });

    document.addEventListener('keydown', e => {
        if (!lightbox.classList.contains('open')) return;
        if (e.key === 'Escape')      closeLightbox();
        if (e.key === 'ArrowLeft')   showPrev();
        if (e.key === 'ArrowRight')  showNext();
    });
}
