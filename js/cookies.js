(function () {
    var GA_ID = 'G-7LB6D0VZNV';

    function loadGA() {
        var s = document.createElement('script');
        s.async = true;
        s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
        document.head.appendChild(s);
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        window.gtag = gtag;
        gtag('js', new Date());
        gtag('config', GA_ID);
    }

    var stored = localStorage.getItem('cookieConsent');
    if (stored === 'accepted') loadGA();

    document.addEventListener('DOMContentLoaded', function () {
        var banner  = document.getElementById('cookie-banner');
        var accept  = document.getElementById('cookie-accept');
        var decline = document.getElementById('cookie-decline');

        if (stored === null && banner) banner.removeAttribute('hidden');

        if (accept) {
            accept.addEventListener('click', function () {
                localStorage.setItem('cookieConsent', 'accepted');
                if (banner) banner.setAttribute('hidden', '');
                loadGA();
            });
        }

        if (decline) {
            decline.addEventListener('click', function () {
                localStorage.setItem('cookieConsent', 'declined');
                if (banner) banner.setAttribute('hidden', '');
            });
        }
    });
})();
